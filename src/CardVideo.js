import React from "react"
import InfoUsuario from "./InfosUsuario";


export default function CardVideo() {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }

    return (
   
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <InfoUsuario/>
    </div>
    
 
    );
}