// Change title name
document.title = "Fruits & Vegetable Corp";

// Change h1 text
let headerEl = document.getElementsByTagName("h1")[0];
headerEl.textContent = "Fruits & Vegetables Corp";

// Change "banana" to "vegetables"
var li = document.getElementsByTagName("a")[2];
li.textContent = "Vegetables";
li.setAttribute("href", "#Vegetables");

// Rubrik Contact
var main = document.getElementById('main');
var contact = document.getElementById('contact');
var h = document.createElement("H2");
var t = document.createTextNode("Contact");
h.appendChild(t);
contact.insertBefore(h, contact.firstChild);

// Change sektion contact & about, create P-tag
let sectionElement = document.getElementsByTagName("section");
let aboutPTag = document.createElement("P");
aboutPTag.appendChild(sectionElement[1].firstChild);
sectionElement[1].appendChild(aboutPTag);
var about = document.getElementById('about');
var g = document.createElement("H2");
var y = document.createTextNode("About");
g.appendChild(y);
about.insertBefore(g, about.firstChild);
about.after(contact);


// Change "Name & Email" to 
var child = document.getElementsByTagName("td")[0];
var parent = document.createElement("th");
parent.textContent = "Name";
child.replaceWith(parent);
var child2 = document.getElementsByTagName("td")[0];
var parent2 = document.createElement("th");
parent2.textContent = "Email";
child2.replaceWith(parent2);

// Change color
var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css';

head.appendChild(link);