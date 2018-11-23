import React from 'react';

class Pacientes extends React.Component {
    state = {
        pac: [],

    }
    getPaciente = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`http://192.168.8.100:8080/pacientes`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
            pac: data.pac

        });
    }
    render() {
        return (
            <div align="left">
            <button className="btn btn-primary" onClick={this.getPaciente}>LISTAR</button>
                <table className="table table-striped table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>Rut</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Acciones</th>
                        </tr>
                        {this.state.pac.map(function(item){
                            return (<tr>
                                <td>{item.pac_rut}</td>
                                <td>{item.pac_nombres}</td>
                                <td>{item.pac_appat + ' ' + item.pac_apmat}</td>
                                <td><button classNme="btn btn-primary btn-sm ">Categorizar</button><button classNme="btn btn-default btn-sm ">editar</button></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Pacientes;