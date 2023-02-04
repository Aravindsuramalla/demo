//console.dir(document);
//console.log(document.domain);
//console.log(document.url);
//console.log(document.title);
//document.title="Hi DOM";
//console.log(document.type);
//console.log(document.head);
//console.log(document.all);
//console.log(document.all[2]);
//console.log(document.forms);

//GEtELEMENTBYID

//let headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent="Hello";
//headerTitle.innerText="GOOGBYE";

//headerTitle.innerHTML='<h3>hello</h3';
//headerTitle.style.borderBottom='solid 3px #000';

//QUERYSELECTOR

//let addItem=document.querySelector('.title');
//addItem.style.fontWeight='bold';
//addItem.style.color="green";

//let li=document.getElementsByTagName('li');
//console.log(li);
//li[2].style.backgroundColor='green';

//let items=document.getElementsByClassName('.list-group');
//console.log(items);

//let items=document.getElementsByClassName('list-group-item');
//for(let i=0;i<items.length;i++)
//{
    //items[i].style.backgroundColor='red';
//}

//let li=document.getElementsByTagName('li');
//for(let i=0;i<li.length;i++)
//{
    //li[i].style.backgroundColor='red';
//}

//let secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor='green';

//let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display="none";

//let li=document.querySelectorAll('li');
//li[1].style.color='green';

//let odds=document.querySelectorAll('li:nth-child(odd)');
//for(let i=0;i<odds.length;i++)
//{
   // odds[i].style.backgroundColor='green';
//}


let itemList=document.querySelector('#items');

//console.log(itemList);
//console.log(itemList.parentNode);
//console.log(itemList.parentNode.parentNode);
//itemList.parentNode.style.backgroundColor='grey';
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='yellow';

//console.log(itemList.childNodes);
//console.log(itemList.children);
//itemList.children[1].style.color='red';

//console.log(itemList.firstChild);
//console.log(itemList.firstElementChild);
//console.log(itemList.lastChild);
//console.log(itemList.firstElementChild);

//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);

//console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);

//create Element
    //create Div

let newDiv=document.createElement('div');
newDiv.className='Hello';
newDiv.id='world';

//Add Attribute

newDiv.setAttribute('title',"Hello Div");
let newDivText=document.createTextNode('Hello!This is Aravind');
//Add text to div
newDiv.appendChild(newDivText);

//Add newDiv to html

let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
console.log(newDiv);


let newDiv2=document.createElement('div');
newDiv2.className='hi';
newDiv2.id='div2';

newDiv2.setAttribute('title','Hello div2');
let newDivText2=document.createTextNode('Hello World');

newDiv2.appendChild(newDivText2);

let listGroup=document.querySelector('.list-group');
let li=document.querySelector('.list-group-item');
listGroup.insertBefore(newDivText2,li);
console.log(newDiv2);