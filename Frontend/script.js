fetch("https://ordinario-web.onrender.com/api/tareas")

.then(res=>res.json())

.then(datos=>{

    const contenedor=document.getElementById("contenedor");

    datos.forEach(tarea=>{

        contenedor.innerHTML +=`

        <div class="tarjeta">

            <h3>${tarea.titulo}</h3>

            <a href="${tarea.url}" target="_blank">

                Abrir tarea

            </a>

        </div>

        `;

    });

})

.catch(error=>{

    console.log(error);

});