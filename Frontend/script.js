fetch("mongodb+srv://jaimitojamonsalchicha_db_user:9MgHbA3cCFRBW0p8@cluster0.yptw9d6.mongodb.net/?appName=Cluster0")

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