// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);

// GET ELEMENTBY ID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// headerTitle.textContent = "Item Lister";
// headerTitle.innerText = "Goodbye";
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom='solid 3px #000';


// // GET ELEMENTS BY CLASS NAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'blue';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i <items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GET ELEMENTS BY TAG NAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'blue';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i <li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERY SELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input'); //grabs the first one
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

// QUERY SELECTOR ALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[1].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i< odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);

// childNodes (useless because it includes spaces)
// console.log(itemList.childNodes);

// children (better way to reference things because it takes element)
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild (useluess because it includes the spaces)
// console.log(itemList.firstChild);
// // firstElementChild (better because it takes element, not node)
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";


// // firstChild (useluess because it includes the spaces)
// console.log(itemList.lastChild);
// // firstElementChild (better because it takes element, not node)
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// // nextSibling (takes the next node, not the next element)
// console.log(itemList.nextSibling);
// // nextElementibling (takes the element, not the empty text)
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "red";

// CREATING ELEMENTS AND ADDING THEM TO THE DOCUMENT //
// createElement
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = "hello";

// // Add id
// newDiv.id = "hello 1";

// // Add attribute
// newDiv.setAttribute('title', 'Hello Div');

// // Create a text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to Div
// newDiv.appendChild(newDivText);

// //Push the newDiv to a spot under the header .container class
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// console.log(newDiv);

// EVENT LISTENERS

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//     // console.log("button clicked");
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     // console.log(e);

//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';

//     // console.log(e.type);

//     // console.log(e.clientX); // Position of mouse in x relative to page
//     // console.log(e.offsetX); // Position of mouse in x relative to element

// }

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent); //single click event
// button.addEventListener('dblclick', runEvent); //double click event
// button.addEventListener('mousedown', runEvent); //mousdown event click event
// button.addEventListener('mouseup', runEvent); //mousdown event click event

// box.addEventListener('mouseenter', runEvent); // mouse enter event
// box.addEventListener('mouseleave', runEvent); //mouse leaves the box event
// box.addEventListener('mouseover', runEvent); // mouse over event - will fire when the mouse is over a child element
// box.addEventListener('mouseout', runEvent); //mouse out the box event
// box.addEventListener('mousemove', runEvent); //mouse out the box event

var itemInput = document.querySelector('input[type="text"]');// references the input type text tag under the form in html file
var form = document.querySelector('form');// references the form tag 
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);// logs when there is a keydown
// itemInput.addEventListener('keyup', runEvent);// logs when there is a keyup
// itemInput.addEventListener('keypress', runEvent);// logs when there is a keypress

// itemInput.addEventListener('focus',runEvent); //logs when user clicks into the input box
// itemInput.addEventListener('blur',runEvent); //logs when user clicks out off input box
// itemInput.addEventListener('cut',runEvent); //logs when user cuts what's in the input box
// itemInput.addEventListener('paste',runEvent); //logs when user pastes to input box

// itemInput.addEventListener('input',runEvent); //logs anything that is input into the input box
// select.addEventListener('change', runEvent); // fires when select list is changed
// select.addEventListener('input', runEvent); // fires when there is an input to the selector

form.addEventListener('submit', runEvent); // fires when there is a submit event in the form

function runEvent(e){
    e.preventDefault();//used to prevent the default when there is a submit event in a form
    console.log('EVENT TYPE:' + e.type);
    console.log(e.target.value);
    
    // document.getElementById('output').innerHTML = '<h3>' + e.target.value +'</h3>';//outputs the target value of the event related to the item input event listener
    
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: '+ e.offsetY + '</h3>';//note: output is connected to the div with ID output

    // box.style.backgroundColor ="rgb(" + e.offsetX + "," + e.offsetY + ",40)";
    // document.body.style.backgroundColor ="rgb(" + e.offsetX + "," + e.offsetY + ",40)";


}
