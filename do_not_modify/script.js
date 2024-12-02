/***
 * This is a simple Vanilla JS script to
 * enable tab-switching and side-by-side
 * mode.
 *
 * This is not intended to be modified or
 * read by students, but feel free to have a look
 * :)
 ***/

/* Turn all links into tab-switching magic */
document.querySelectorAll("a").forEach((a) => {
  // Create custom click handlers
  a.onclick = (e) => {
    /* The href= attribute must be a valid selector */
    const selector = a.getAttribute("href");
    // Remove other active attributes
    document.querySelectorAll("a").forEach((l) => {
      l.classList.remove("active");
    });
    // Make the link we clicked active
    a.classList.add("active");
    // Now remove any existing visible class
    document.querySelectorAll(".content").forEach((div) => {
      div.classList.remove("visible");
    });
    // Find our target div
    let target = document.querySelector(selector);
    // Add the visible class to it
    target.classList.add("visible");
    // Add class to body as well...
    let body = document.querySelector("body");
    body.classList.remove("original");
    body.classList.remove("responsive");
    body.classList.remove("imitation");
    document.querySelector("body").classList.add(selector.replace("#", ""));
    // Don't follow the fallback link
    e.preventDefault();
  };
});

/*
  Enable side-by-side checkbox
 */
document.querySelector("#sbs").onchange = (e) => {
  let body = document.querySelector("body");
  // If checked, add sbs class to body
  if (e.target.checked) {
    body.classList.add("sbs");
  } else {
    // Otherwise remove sbs class
    body.classList.remove("sbs");
  }
};

/* Minimizer */
document.querySelector("#minimize").onclick = (e) => {
  let header = document.querySelector("header");
  header.classList.toggle("minimized");
};
