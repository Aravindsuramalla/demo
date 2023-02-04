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

let li=document.getElementsByTagName('li');
for(let i=0;i<li.length;i++)
{
    li[i].style.backgroundColor='red';
}




