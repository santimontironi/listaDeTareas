const txtFecha = document.querySelector(".txtFecha");

const ahora = new Date();
const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const ano = ahora.getFullYear();
const fechaCompleta = `${dia}/${mes}/${ano}`; //Se obtiene la fecha completa.

txtFecha.textContent = fechaCompleta; //Se agrega la fecha en el dom.

const input = document.querySelector("input");
const agregarTarea = document.querySelector(".agregarTarea");
const listaPendientes = document.getElementById("ulPendientes");
const listaCumplidas = document.getElementById("ulCumplidas");

agregarTarea.addEventListener("click",function(){
    txtTarea = input.value.trim();
    if(txtTarea !== ''){

        listaPendientes.style.display = "block";

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = txtTarea;
        li.appendChild(p);

        const borrar = document.createElement("i");
        borrar.className = 'bx bx-trash btnBorrar';
        li.appendChild(borrar);

        const hecha = document.createElement("i");
        hecha.className = 'bx bx-check btnHecha';
        li.appendChild(hecha);

        listaPendientes.appendChild(li);
        input.value = "";

        hecha.addEventListener("click",function(){
            listaPendientes.removeChild(li);
            listaCumplidas.style.display = "block";
            listaCumplidas.appendChild(li);
        })

        borrar.addEventListener("click",function(){
            if(li.parentNode === listaPendientes){
                listaPendientes.removeChild(li);
            }else if (li.parentNode === listaCumplidas){
                listaCumplidas.removeChild(li);
            }
        })
    }
})

