/*
STUDENTS: DO NOT MODIFY THIS FILE

Note: many cool things can be done with JavaScript, but
they are outside the scope of this project. This file
exists just to switch the styles around when
you click the "Select a Design" links.

There is a different script that is loaded on the live site
which handles all the many links from students in the live 
project. 
*/

// When the page loads, add a click event listener to each of the
// "Select a Design" links.
document.addEventListener("DOMContentLoaded", function () {
  var designLinks = document.querySelectorAll(".design-name");
  for (var i = 0; i < designLinks.length; i++) {
    const a = designLinks[i];
    a.addEventListener("click", function (event) {
      let filename = a.href.replace(/^.*#/, "");
      let link = document.querySelector("link#thestyle");
      console.log("Changing style to " + filename);
      link.href = filename;
    });
  }

  // Set up "next" button
  var nextButton = document.querySelector('[href="#next"]');
  nextButton.addEventListener("click", function (event) {
    let links = Array.from(designLinks).slice(0, 3);
    let current = links.findIndex(function (a) {
      return a.href.includes(
        document.querySelector("link#thestyle").getAttribute("href")
      );
    });
    let next = (current + 1) % links.length;
    let filename = links[next].href.replace(/^.*#/, "");
    let link = document.querySelector("link#thestyle");
    console.log("Changing style to " + filename);
    link.href = filename;
  });

  // Set up "all" button
  var allButton = document.querySelector('[href="#all"]');
  allButton.addEventListener("click", function (event) {
    let designLinks = document.querySelectorAll(".design-name");
    let links = Array.from(designLinks);
    if (links.length < 6) {
      document.querySelector(".design-selection ul");
      for (let i = 0; i < 20; i++) {
        let li = document.createElement("li");
        let html = `
          <a class="design-name" href="#">Fake Design ${i + 1}</a>
          by <a href="#">Fake Student</a>
        `;
        li.innerHTML = html;
        document.querySelector(".design-selection ul").appendChild(li);
      }
    }
  });
});
