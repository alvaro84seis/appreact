import React from 'react';


class FormPaciente extends React.Component {
    state = {
        pac_rut: undefined,
        pac_nombres: undefined,
        pac_appat: undefined,
        pac_apmat: undefined
    }
    postPaciente = async (e) => {
        e.preventDefault();
        console.log(e.target.rut);
        const pac_rut = e.target.rut.value;
        const pac_nombres = e.target.nombre.value;
        const pac_appat = e.target.appat.value;
        const pac_apmat = e.target.apmat.value;
        fetch(`http://192.168.8.100:8080/pacientes`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                pac_rut: pac_rut,
                pac_nombres: pac_nombres,
                pac_appat: pac_appat,
                pac_apmat: pac_apmat 
            })

        }).then(function(respuesta){
            console.log(respuesta);
        })
    }
    render() {
       
        return (
            <form onSubmit={this.postPaciente}>
               RUT:<input className="form-control" type="text" name="rut"/>  
               Nombre<input className="form-control" type="text" name="nombre"/>  
               Apellido Paterno<input className="form-control" type="text" name="appat"/>  
               Apellido Materno<input className="form-control" type="text" name="apmat"/>  
               <button className="btn btn-Primary btn-lg">INGRESAR</button>
           </form>
        )
    }
}
export default FormPaciente;