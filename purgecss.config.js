// purgecss.config.js
module.exports = {
  // scan the built site (adjust paths to your theme/output)
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],

  // write minimized CSS back to the same folder (or use a separate output dir)
  output: "_site/assets/css/",

  // keep classes PurgeCSS might think are unused but are added at runtime
  safelist: [
    // Font Awesome / icons / syntax highlighting / collapses / modals
    /^fa-/,
    /^fab/,
    /^fas/,
    /^far/,
    /^hljs/,
    "show",
    "collapse",
    "navbar-collapse",
    "active",
    "dropdown",
    "dropdown-menu",
    "open",
    "modal",
    "fade",
    "in",
    "tooltip",
    "popover",
  ],
};
