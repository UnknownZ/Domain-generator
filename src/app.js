/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateDomains() {
  let domainList = "";
  let pronoun = ["the", "our", "we"];
  let adj = ["great", "big", "awesome"];
  let noun = ["jogger", "racoon", "org", "us"];
  let domain = [".com", ".cl"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let z = 0; z < domain.length; z++) {
          if (noun[k].length <= 3) {
            domainList += pronoun[i] + adj[j] + "." + noun[k] + "<br>";
            z++;
          } else {
            domainList += pronoun[i] + adj[j] + noun[k] + domain[z] + "<br>";
          }
        }
      }
    }
  }
  return domainList;
}

function insert(text, id) {
  document.getElementById(id).innerHTML = text;
}

window.onload = function() {
  //write your code here
  insert(generateDomains(), "domains");
};
