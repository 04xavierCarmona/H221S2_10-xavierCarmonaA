const url = "http://localhost:3000/api/EDUCANDO/";
let resultados = '';
const formArticulo = document.querySelector("form");
const userped = document.getElementById("USERPED");
const emausped = document.getElementById("EMAUSPED");
const celusped = document.getElementById("CELUSPED");
const fooped = document.getElementById("FOODPED");
const teledu = document.getElementById("TELEDU");
const msgped = document.getElementById("MSGPED");
var opcion = '';

btn.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
   	 e.preventDefault();
   	 if (opcion == 'crear') {
   		 if (USERPED.value == "" || EMAUSPED.value == "" || CELUSPED.value == "" || FOODPED.value == "" || TELEDU.value == "" || MSGPED.value == "") {
            alert("Asegúrese de que todos los campos estén completos");
            return false;
        } else {
            console.log("Todos los campos están completos");
            fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'content-Type':'application/json'
                    },
                    body: JSON.stringify(
                        {
                            USERPED: USERPED.value,
                            EMAUSPED: EMAUSPED.value,
                            CELUSPED: CELUSPED.value,
                            FOODPED: FOODPED.value,
                            TELEDU: TELEDU.value,
                            MSGPED: MSGPED.value
                        }
                    )
                }
            )
            .then(
                response => response.json()
            )
            .then(
                response => location.reload()
            );
        }
    } else if(opcion == 'editar'){
        console.log("Activado el ");
    }
}
);