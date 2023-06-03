import React from "react";
import { Section } from "./Styled";

class ClassState extends React.Component {
  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
        <input type="text" placeholder="Código de Seguridads" />
        <button>Comprobar</button>
      </div>
    )
  }
}

export { ClassState }