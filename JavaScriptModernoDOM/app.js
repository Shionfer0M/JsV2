//*console.log(document);
//console.log(document.title);
//document.title = "Preuba";
//console.log(document.title);

//console.log(document.head);
//console.log(document.body);
//console.log(document.all[5]);

//TODO: getElementById()
//* Devuelve la referencia de el objeto que es al id
//console.log(document.getElementById("header-title"));
//var headerTitle = document.getElementById("header-title");
//var header = document.getElementById("main-header");
//console.log(headerTitle);
//console.log(header);
//*Cambiando el contenido de headerTitle cualquiera de estos 2 sirven
//headerTitle.textContent = "Hola";
//headerTitle.innerText = "Adios";
//*---------------------------------
//headerTitle.innerHTML = "<h3>Prueba</h3>";

//TODO: getElementsByClassName
//*Similar al anterior pero esto atrae a varios elementos
//var items = document.getElementsByClassName("list-group-item");
//console.log(items);
//items[0].textContent = "Prueba";

//TODO: getElementsByTagName
//* Tag se refiere a la etiqueda div,ul,li y se pueden tener varios
//* A continuación trae todos los elementos que tengan li
//var items = document.getElementsByTagName("li");
//items[2].textContent = "Prueba02";

//*---------------------------------------------
//TODO: querySelector
//* Son absados en consultas, selecciona el primer elemento de acuerdo a un parámetro en el cual selecciona a un grupo de selectores
//* Los selectores son CLASES, ID´S o ETIQUETAS
//var header = document.querySelector("#main-header");
//podemos cambiar el estido
//header.style.borderBottom = "solid 4px #23043E";

//Para el input
//var input = document.querySelector("input");
//input.value = "Hola mundo";
//Para el boton
//var submit = document.querySelector('input[type="submit"]');
//submit.value = "Enviar";

//var item = document.querySelector(".list-group-item");
//item.style.color = "red";
//TODO: querySelectorAll
//* Selecciona todo
//var items = document.querySelectorAll(".list-group-item");
//items[2].style.color = "red";

//var titulos = document.querySelectorAll(".title");
//console.log(titulos);
//titulos[0].textContent = "Prueba";

//var impar = document.querySelectorAll("li:nth-child(odd)");
//var par = document.querySelectorAll("li:nth-child(even)");
//Recorriendo el arreglo con un for
//for (var i = 0; i < impar.length; i++) {
//  impar[i].style.backgroundColor = "#ccc";
//  par[i].style.backgroundColor = "#f4f4f4";
//}
//*---------------------------------------------
//TODO: ParentNode
//* Seleccionar y agrupar
//var itemList = document.querySelector("#items");
//* con parentNode trae al padre de donde esta el id #items
//console.log(itemList.parentNode);

//var main = itemList.parentNode;
//*Darle estilo
//main.style.backgroundColor = "#f4f4f4";
//console.log(main.parentNode);
//TODO: ParenElement
//var itemList = document.querySelector("#items");
//* con parentNode trae al padre de donde esta el id #items
//console.log(itemList.parentElement);

//var main = itemList.parentElement;
//*Darle estilo
//main.style.backgroundColor = "#f4f4f4";
//console.log(main.parentElement);

//*--------------------------------------------------------
//TODO: ELEMENTOS Y NODOS HIJOS
//! IMPORTANTE
var itemList = document.querySelector("#items");
//TODO: childNodes
//* Nodos hijos
//console.log(itemList.childNodes);
//TODO: children
//* Para ver los hijos
//console.log(itemList.children);

//TODO: firstChild
//* Para ver el primer elemento hijo
//console.log(itemList.firstChild);
//*Este si es el primer elemento
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = "Prueba";
//TODO: lastChild
//* Para ver el ultimo elemento hijo
//console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
