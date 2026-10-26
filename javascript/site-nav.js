/* =====================================================================
   Home page — collapsible site navigation
   - hamburger button collapses the whole row on phones (<= 900px)
   - each group (Ch 1 … Ch 4, Quizzes, More) is an accordion on phones and
     a dropdown on desktop (hover, or click for keyboard / touch)
   ===================================================================== */
(function () {
  "use strict";

  var nav = document.getElementById("siteNav");
  if (!nav) return;

  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  var toggleLabel = toggle.querySelector(".nav-toggle-text");
  var groups = Array.prototype.slice.call(nav.querySelectorAll(".nav-item"));

  function setMenu(open) {
    nav.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (toggleLabel) toggleLabel.textContent = open ? "Close" : "Menu";
    if (!open) closeGroups();
  }

  function closeGroups() {
    groups.forEach(function (item) {
      if (!item.classList.contains("open")) return;
      item.classList.remove("open");
      var btn = item.querySelector(".nav-group-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }

  toggle.addEventListener("click", function () {
    setMenu(!nav.classList.contains("nav-open"));
  });

  /* group headers: accordion on phones, click-to-open dropdown on desktop */
  groups.forEach(function (item) {
    var btn = item.querySelector(".nav-group-toggle");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var wasOpen = item.classList.contains("open");
      closeGroups();
      if (!wasOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* a real link was followed — tidy up, the page is changing anyway */
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });

  /* click anywhere outside closes the open panel / group */
  document.addEventListener("click", function (e) {
    if (nav.contains(e.target)) return;
    setMenu(false);
  });

  /* Esc closes the panel first */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      if (nav.classList.contains("nav-open")) {
        setMenu(false);
        toggle.focus();
      } else {
        closeGroups();
      }
    }
  });

  /* leaving the phone breakpoint puts the desktop row back */
  var wide = window.matchMedia("(min-width: 901px)");
  function onBreakpoint(e) { if (e.matches) setMenu(false); }
  if (wide.addEventListener) wide.addEventListener("change", onBreakpoint);
  else if (wide.addListener) wide.addListener(onBreakpoint);
})();
