/* =====================================================================
   Chapter 7 / 8 slide pages — short-answer exam drill.
   Each .exam-card holds one question and one input per scoring point.
   A point is correct as soon as the answer contains one English keyword
   or one Chinese key term from that point's model answer.
   ===================================================================== */
(function () {
  "use strict";

  function norm(value) {
    return String(value == null ? "" : value)
      .toLowerCase()
      .replace(/[\u2018\u2019\u02bc`\u00b4]/g, "'")
      .replace(/[\u201c\u201d]/g, '"')
      .replace(/[^a-z0-9\u3400-\u9fff\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function splitKeys(value) {
    return String(value || "").split("|").map(norm).filter(Boolean);
  }

  function mark(field, state) {
    field.classList.toggle("ok", state === "ok");
    field.classList.toggle("bad", state === "bad");
    var el = field.querySelector(".exam-mark");
    el.textContent = state === "ok" ? "\u2713" : (state === "bad" ? "\u2717" : "");
    el.className = "exam-mark" + (state ? " " + state : "");
  }

  Array.prototype.forEach.call(document.querySelectorAll(".exam-card"), function (card) {
    var fields = Array.prototype.slice.call(card.querySelectorAll(".exam-field"));
    var scoreEl = card.querySelector(".exam-score");
    var modelEl = card.querySelector(".exam-model");
    if (!fields.length || !scoreEl) return;

    function updateScore() {
      var ok = fields.filter(function (f) { return f.classList.contains("ok"); }).length;
      scoreEl.textContent = ok + " / " + fields.length + " correct";
      scoreEl.classList.toggle("perfect", ok === fields.length);
    }

    function check() {
      fields.forEach(function (field) {
        var input = field.querySelector(".exam-input");
        var value = norm(input.value);
        if (!value) { mark(field, ""); return; }
        var keys = splitKeys(field.getAttribute("data-keys"))
          .concat(splitKeys(field.getAttribute("data-zh")));
        var good = keys.some(function (k) { return value.indexOf(k) !== -1; });
        mark(field, good ? "ok" : "bad");
      });
      updateScore();
    }

    function reveal() {
      fields.forEach(function (field) {
        field.querySelector(".exam-input").value = field.getAttribute("data-answer") || "";
        mark(field, "ok");
      });
      if (modelEl) modelEl.hidden = false;
      updateScore();
    }

    function reset() {
      fields.forEach(function (field) {
        field.querySelector(".exam-input").value = "";
        mark(field, "");
      });
      if (modelEl) modelEl.hidden = true;
      scoreEl.textContent = "";
      scoreEl.classList.remove("perfect");
    }

    var checkBtn = card.querySelector("[data-exam-check]");
    var showBtn = card.querySelector("[data-exam-show]");
    var resetBtn = card.querySelector("[data-exam-reset]");
    if (checkBtn) checkBtn.addEventListener("click", check);
    if (showBtn) showBtn.addEventListener("click", reveal);
    if (resetBtn) resetBtn.addEventListener("click", reset);

    fields.forEach(function (field) {
      var input = field.querySelector(".exam-input");
      input.addEventListener("input", function () { mark(field, ""); updateScore(); });
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
          event.preventDefault();
          check();
        }
      });
    });
  });
})();
