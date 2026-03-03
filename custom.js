/* NORD UI KIT legacy wrapper (custom.js)
   Backward compatibility for pages that still load ./custom.js */
(() => {
  "use strict";
  if (typeof document === "undefined") return;

  const alreadyLoaded = Array.from(document.scripts || []).some((node) => {
    const src = node.getAttribute("src") || "";
    return /nord-ui-kit\/custom\.js(?:\?.*)?$/i.test(src);
  });
  if (alreadyLoaded) return;

  const current = document.currentScript;
  const rawSrc = current ? current.getAttribute("src") || "" : "";
  const cleanSrc = rawSrc.split("#")[0].split("?")[0];
  const basePath = cleanSrc.includes("/") ? cleanSrc.replace(/[^/]*$/, "") : "./";

  const script = document.createElement("script");
  script.src = basePath + "nord-ui-kit/custom.js";
  script.defer = true;
  script.setAttribute("data-nord-wrapper", "custom-js");
  (document.head || document.documentElement).appendChild(script);
})();
