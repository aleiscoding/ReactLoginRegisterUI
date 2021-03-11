import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <div className="form-group">
                    <label><b>Correo</b></label>
                    <input type="email" className="form-control" required />
                </div>

                <div className="form-group">
                    <label><b>Contraseña</b></label>
                    <input type="password" className="form-control" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" required />
                        <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-custom btn-lg btn-block"><b>Ingresar</b></button>
                <p className="forgot-password text-right">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </p>
            </form>
        );
    }
}
