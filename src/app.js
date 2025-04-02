import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.us', '.io'];



function createMyDomain(arr1, arr2, arr3, arr4) {
    let myDomain = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {
                for (let l = 0; l < arr4.length; l++) {
                    myDomain.push(arr1[i] + arr2[j] + arr3[k] + arr4[l]);
                }
            }
        }
    }

    return myDomain;
}

console.log(createMyDomain(pronoun, adj, noun, domain));
  console.log("Hello Rigo from the console!");
};
