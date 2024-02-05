// let he = document.getElementById("hh").innerHTML = "kira";
// console.log(he);
function pageFunctionOn() {
      // Get HTML head element
      let head = document.getElementsByTagName('HEAD')[0];
 
      // Create new link Element
      let link = document.createElement('link');

      // set the attributes for link element
      link.rel = 'stylesheet';
   
      link.type = 'text/css';
   
      link.href = 'style.css';

      // Append link element to HTML head
      head.appendChild(link);
 }