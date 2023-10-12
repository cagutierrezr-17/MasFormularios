import { useState } from "react";
import "./MasFormularios.css"

const Formulario = () => {
    const [Nombre, setNombre] = useState("");
    const [NombreError, setNombreError] = useState("");
    const [Apellido, setApellido] = useState("");
    const [ApellidoError, setApellidoError] = useState("");
    const [Correo, setCorreo] = useState("");
    const [MailError, setMailError] = useState("");
    const [Contraseña, setContraseña] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [ConfirmContraseña, setConfirmContraseña] = useState("");
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("");

    const manejadorDeErrorNombre = (e) => {
        setNombre(e.target.value);
        if ((e.target.value.length >= 2) && (e.target.value.length !== 0)) {
            setNombreError("");
        } else {
            setNombreError("El campo debe tener al menos 2 caracteres.");
        }
    }

    const manejadorDeErrorApellido = (e) => {
        setApellido(e.target.value);
        if ((e.target.value.length >= 2) && (e.target.value.length !== 0)) {
            setApellidoError("");
        } else {
            setApellidoError("El campo debe tener al menos 2 caracteres.");
        }
    }

    const manejadorDeErrorMail = (e) => {
        setCorreo(e.target.value);
        if ((e.target.value.length >= 5) && (e.target.value.length !== 0)) {
            setMailError("");
        } else {
            setMailError("El campo debe tener al menos 5 caracteres.");
        }
    }

    const manejadorDeErrorPassword = (e) => {
        setContraseña(e.target.value);
        if ((e.target.value.length >= 8) && (e.target.value.length !== 0)) {
            setPasswordError("");
        } else {
            setPasswordError("El campo debe tener al menos 8 caracteres.");
        }
    }

    const manejadorConfirmPassword = (e) => {
        setConfirmContraseña(e.target.value);
        if (Contraseña === e.target.value) {
            setConfirmPasswordError("");
        } else {
            setConfirmPasswordError("Las contraseñas deben coincidir.")
        }
    }

    return (
        <form>
            <div className="inputForm">
                <label>Nombre: </label>
                <input type="text" onChange={manejadorDeErrorNombre} />
            </div>
            <p>{NombreError}</p>

            <div className="inputForm">
                <label>Apellido: </label>
                <input type="text" onChange={manejadorDeErrorApellido} />
            </div>
            <p>{ApellidoError}</p>

            <div className="inputForm">
                <label>Correo Electrónico: </label>
                <input type="email" onChange={manejadorDeErrorMail} />
            </div>
            <p>{MailError}</p>

            <div className="inputForm">
                <label>Contraseña: </label>
                <input type="password" onChange={manejadorDeErrorPassword} />
            </div>
            <p>{PasswordError}</p>

            <div className="inputForm">
                <label>Confirmar Contraseña: </label>
                <input type="password" onChange={manejadorConfirmPassword} />
            </div>
            <p>{ConfirmPasswordError}</p>
            <br />

            <div>
                <h2> Datos de tu Formulario</h2>
                <ul>
                    <li>Nombre: {Nombre} </li>
                    <br />
                    <li>Apellido: {Apellido} </li>
                    <br />
                    <li>Correo Electrónico: {Correo} </li>
                    <br />
                    <li> Contraseña: {Contraseña}</li>
                    <br />
                    <li> Confirmar Contraseña: {ConfirmContraseña} </li>
                </ul>
            </div>

        </form>
    );
}
export default Formulario;