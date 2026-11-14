/* =====================================================================
   Shared site navigation — ONE canonical copy of the index.html nav bar used
   on every page. The prefix is derived from this script's own src so all links
   resolve from any directory depth. Renders into <div id="siteNavMount"></div>
   and wires up the desktop dropdowns / phone hamburger. To change the nav,
   edit NAV_LINES below; no per-page edits needed.
   ===================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------- template */
  var NAV_LINES = [
    "  <nav class=\"site-nav\" id=\"siteNav\" aria-label=\"Main navigation\">",
    "    <div class=\"site-shell site-nav-inner\">",
    "      <a class=\"site-nav-brand\" href=\"__BASE__index.html\">",
    "        <span class=\"brand-mark\" aria-hidden=\"true\">OS</span>",
    "        <span class=\"brand-text\">CSIS2260<small>Review Hub</small></span>",
    "      </a>",
    "",
    "      <a class=\"nav-neon\" href=\"__BASE__pages/LinuxLabsPractice.html\">",
    "        <span class=\"nn-bolt\" aria-hidden=\"true\">&#9889;</span>",
    "        <span>Linux 代码实战<small>Labs 5&ndash;8 &middot; Command Drill</small></span>",
    "      </a>",
    "",
    "      <button class=\"nav-toggle\" id=\"navToggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"navMenu\" aria-label=\"Open navigation menu\">",
    "        <span class=\"nav-toggle-bars\" aria-hidden=\"true\"><span></span><span></span><span></span></span>",
    "        <span class=\"nav-toggle-text\">Menu</span>",
    "      </button>",
    "",
    "      <div class=\"nav-menu\" id=\"navMenu\">",
    "        <ul class=\"nav-list\">",
    "          <li class=\"nav-item\">",
    "            <button class=\"nav-group-toggle\" type=\"button\" aria-expanded=\"false\">Ch 1<span class=\"nav-caret\" aria-hidden=\"true\"></span></button>",
    "            <div class=\"nav-dropdown\">",
    "              <a href=\"__BASE__pages/chapter1.html\">Chapter 1 Slides<span class=\"dd-zh\">第 1 章幻灯片</span><span class=\"dd-n\">59</span></a>",
    "              <a href=\"__BASE__pages/Chapter1Review.html\">Chapter 1 Review<span class=\"dd-zh\">第 1 章复习题</span><span class=\"dd-n\">18</span></a>",
    "            </div>",
    "          </li>",
    "          <li class=\"nav-item\">",
    "            <button class=\"nav-group-toggle\" type=\"button\" aria-expanded=\"false\">Ch 2<span class=\"nav-caret\" aria-hidden=\"true\"></span></button>",
    "            <div class=\"nav-dropdown\">",
    "              <a href=\"__BASE__pages/chapter2.html\">Chapter 2 Slides<span class=\"dd-zh\">第 2 章幻灯片</span><span class=\"dd-n\">75</span></a>",
    "              <a href=\"__BASE__pages/Chapter2Review.html\">Chapter 2 Review<span class=\"dd-zh\">第 2 章复习题</span><span class=\"dd-n\">23</span></a>",
    "            </div>",
    "          </li>",
    "          <li class=\"nav-item\">",
    "            <button class=\"nav-group-toggle\" type=\"button\" aria-expanded=\"false\">Ch 3<span class=\"nav-caret\" aria-hidden=\"true\"></span></button>",
    "            <div class=\"nav-dropdown\">",
    "              <a href=\"__BASE__pages/chapter3.html\">Chapter 3 Slides<span class=\"dd-zh\">第 3 章幻灯片</span><span class=\"dd-n\">58</span></a>",
    "              <a href=\"__BASE__pages/Chapter3Review.html\">Chapter 3 Review<span class=\"dd-zh\">第 3 章复习题</span><span class=\"dd-n\">12</span></a>",
    "            </div>",
    "          </li>",
    "          <li class=\"nav-item\">",
    "            <button class=\"nav-group-toggle\" type=\"button\" aria-expanded=\"false\">Ch 4<span class=\"nav-caret\" aria-hidden=\"true\"></span></button>",
    "            <div class=\"nav-dropdown\">",
    "              <a href=\"__BASE__pages/chapter4.html\">Chapter 4 Slides<span class=\"dd-zh\">第 4 章幻灯片</span><span class=\"dd-n\">22</span></a>",
    "              <a href=\"__BASE__pages/Chapter4Review.html\">Chapter 4 Review<span class=\"dd-zh\">第 4 章复习题</span><span class=\"dd-n\">7</span></a>",
    "            </div>",
    "          </li>",
    "          <li class=\"nav-item\">",
    "            <a class=\"nav-link\" href=\"__BASE__pages/chapter7.html\">Ch 7<span class=\"dd-zh\">内存管理</span></a>",
    "          </li>",
    "          <li class=\"nav-item\">",
    "            <a class=\"nav-link\" href=\"__BASE__pages/chapter8.html\">Ch 8<span class=\"dd-zh\">虚拟内存</span></a>",
    "          </li>",
    "          <li class=\"nav-item\">",
    "            <button class=\"nav-group-toggle\" type=\"button\" aria-expanded=\"false\">Quizzes<span class=\"nav-caret\" aria-hidden=\"true\"></span></button>",
    "            <div class=\"nav-dropdown\">",
    "              <a href=\"__BASE__pages/Quiz1importantShortAnswer.html\">Short Answer Drill<span class=\"dd-zh\">重点简答题</span><span class=\"dd-n\">17</span></a>",
    "              <a href=\"__BASE__pages/Quiz1keyQuestions.html\">Quiz 1 Key Questions<span class=\"dd-zh\">重点回忆题</span><span class=\"dd-n\">25</span></a>",
    "              <a href=\"__BASE__pages/Quiz1Fall2026.html\">Quiz 1 Fall 2026<span class=\"dd-zh\">2026 秋季真题</span><span class=\"dd-n\">5</span></a>",
    "              <a href=\"__BASE__pages/InstructionCycleDrill.html\">Instruction Cycle Drill<span class=\"dd-zh\">指令周期填空练习</span><span class=\"dd-n\">10</span></a>",
    "              <a href=\"__BASE__pages/Quiz2.html\">Quiz 2<span class=\"dd-zh\">预测题精练</span><span class=\"dd-n\">21</span></a>",
    "            </div>",
    "          </li>",
    "          <li class=\"nav-item\">",
    "            <button class=\"nav-group-toggle\" type=\"button\" aria-expanded=\"false\">More<span class=\"nav-caret\" aria-hidden=\"true\"></span></button>",
    "            <div class=\"nav-dropdown\">",
    "              <a href=\"__BASE__pages/intro-hw.html\">Intro to Hardware<span class=\"dd-zh\">计算机硬件导论</span><span class=\"dd-n\">40</span></a>",
    "              <a href=\"__BASE__pages/UnixCommands.html\">UNIX Commands<span class=\"dd-zh\">UNIX 命令速查表</span><span class=\"dd-n\">29</span></a>",
    "              <a href=\"__BASE__pages/WindowsLabsReview.html\">Windows Labs<span class=\"dd-zh\">Windows 实验</span></a>",
    "              <a href=\"__BASE__pages/MidtermMockExam.html\">Mock Exam<span class=\"dd-zh\">期中模拟考</span></a>",
    "              <a href=\"__BASE__pages/Fall2025MidtermReview.html\">Fall 2025 Midterm<span class=\"dd-zh\">2025 秋季期中答案</span><span class=\"dd-n\">6</span></a>",
    "              <a href=\"__BASE__pages/Quiz2MockTest.html\">Quiz 2 Mock Test<span class=\"dd-zh\">测验 2 模拟卷</span><span class=\"dd-n\">12</span></a>",
    "              <a href=\"__BASE__pages/Quiz2AllQuestions.html\">Quiz 2 All Questions<span class=\"dd-zh\">测验 2 全部题目</span><span class=\"dd-n\">109</span></a>",
    "            </div>",
    "          </li>",
    "        </ul>",
    "      </div>",
    "    </div>",
    "  </nav>"
  ];

  var script = document.currentScript || document.querySelector("script[data-site-nav]");
  var src = script ? (script.getAttribute("src") || "javascript/site-nav.js") : "javascript/site-nav.js";
  var base = src.replace(/javascript\/site-nav\.js.*$/, "");
  var mount = document.getElementById("siteNavMount");
  if (!mount) return;

  mount.innerHTML = NAV_LINES.join("\n").replace(/__BASE__/g, base);
  document.body.classList.add("has-site-nav");

  var nav = document.getElementById("siteNav") || mount.querySelector(".site-nav");
  if (!nav) return;

  /* keep the page-specific sticky bars glued directly below the shared nav */
  function syncNavHeight() {
    var h = Math.round(nav.getBoundingClientRect().height);
    if (h > 0) document.documentElement.style.setProperty("--site-nav-h", h + "px");
  }
  syncNavHeight();
  window.addEventListener("resize", syncNavHeight);
  window.addEventListener("load", syncNavHeight);

  /* -------------------------------------------------------- behaviours */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  var toggleLabel = toggle.querySelector(".nav-toggle-text");
  var groups = Array.prototype.slice.call(nav.querySelectorAll(".nav-item"));

  function closeGroups() {
    groups.forEach(function (item) {
      if (!item.classList.contains("open")) return;
      item.classList.remove("open");
      var btn = item.querySelector(".nav-group-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }
  function setMenu(open) {
    nav.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (toggleLabel) toggleLabel.textContent = open ? "Close" : "Menu";
    if (!open) closeGroups();
  }

  toggle.addEventListener("click", function () {
    setMenu(!nav.classList.contains("nav-open"));
  });

  groups.forEach(function (item) {
    var btn = item.querySelector(".nav-group-toggle");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var wasOpen = item.classList.contains("open");
      closeGroups();
      if (!wasOpen) { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
    });
  });

  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });

  document.addEventListener("click", function (e) {
    if (nav.contains(e.target)) return;
    setMenu(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape" && e.key !== "Esc") return;
    if (nav.classList.contains("nav-open")) {
      setMenu(false);
      toggle.focus();
      e.stopImmediatePropagation();   /* do not let main.js treat Esc as "go home" */
    } else {
      closeGroups();
    }
  });

  var wide = window.matchMedia("(min-width: 901px)");
  function onBreakpoint(e) { if (e.matches) setMenu(false); }
  if (wide.addEventListener) wide.addEventListener("change", onBreakpoint);
  else if (wide.addListener) wide.addListener(onBreakpoint);
})();
