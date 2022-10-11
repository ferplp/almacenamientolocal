console.log("Prueba 1");

//funcion del boton
const mostrarContactos = ()=>{
    // pregunta si estan los datos en local
    document.getElementById("tabla").innerHTML = " "; //limpiamos el DOM
    //const data = JSON.parse( localStorage.getItem());
    //data ?  leerData() : mostrarData();

    mostrarData(); 
    if (localStorage.getItem("info")){
        let conversion = JSON.parse(localStorage.getItem("info"));
        console.log(conversion);
        let info = conversion;
        console.log(info);
        console.log(conversion);
        for (let i=0; i<info.length; i++){
            let element = document.createElement("tr");
            const elementId = document.createElement("td");
            elementId.innerHTML = info[i].id;
            element.appendChild(elementId);
            const elementName = document.createElement("td");
            elementName.innerHTML = info[i].first_name;
            element.appendChild(elementName);

            const elementLname = document.createElement("td");
            elementLname.innerHTML = info[i].last_name;
            element.appendChild(elementLname);

            const elementEmail = document.createElement("td");
            elementEmail.innerHTML = info[i].email;
            element.appendChild(elementEmail);
            
            const elementAvatar = document.createElement("td");
          function display_image(src,width,height,alt,){
           a= document.createElement("img");
           a.src = src;
           a.width = width;
           a.height = height;
           a.alt = alt;
           a.setAttribute("class","rounded-circle");
           element.appendChild(a); 
        }
           display_image(info[i].avatar,100,100);


            elementAvatar.innerHTML.image = info[i].avatar;
            element.appendChild(elementAvatar);


            document.getElementById("tabla").appendChild(element); 

}
}
else{}
}

function mostrarData(){
    console.log("empiza fetch");
    fetch("https://reqres.in/api/users?delay=3")
    .then(muestraContactos=>muestraContactos.json())
    .then(conversion=>{
        console.log(conversion);
        let resultado = conversion.data;
        console.log(resultado);
        let info = Object.values(resultado);
        for (let i=0; i<info.length; i++){
            let element = document.createElement("tr");
            const elementId = document.createElement("td");
            elementId.innerHTML = info[i].id;
            element.appendChild(elementId);
            const elementName = document.createElement("td");
            elementName.innerHTML = info[i].first_name;
            element.appendChild(elementName);

            const elementLname = document.createElement("td");
            elementLname.innerHTML = info[i].last_name;
            element.appendChild(elementLname);

            const elementEmail = document.createElement("td");
            elementEmail.innerHTML = info[i].email;
            element.appendChild(elementEmail);
            
            const elementAvatar = document.createElement("td");
          function display_image(src,width,height,alt,){
           a= document.createElement("img");
           a.src = src;
           a.width = width;
           a.height = height;
           a.alt = alt;
           a.setAttribute("class","rounded-circle");
           element.appendChild(a); 
        }
           display_image(info[i].avatar,100,100);


            elementAvatar.innerHTML.image = info[i].avatar;
            element.appendChild(elementAvatar);


            document.getElementById("tabla").appendChild(element);
        }
        usarLocalStorage(resultado);
        
    });

}

function leerData(){
    console.log("leerData");
    console.log(localStorage);
    if(localStorage){
        usarLocalStorage();
        const temporal = JSON.parse(localStorage.info);

    }
    else{
        mostrarData();

    }
}

const contactos = document.getElementById("contactos")
contactos.addEventListener("click",mostrarContactos)


function usarLocalStorage(info){
    console.log("usar local storage");
   //localStorage.setItem('clave', valor);
    localStorage.setItem("info", JSON.stringify(info));


}
