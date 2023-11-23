import { useEffect, useState } from "react";

function ProfileCard(props){
     const {titulo , arroba , img } =props;

const [ contadorUno , SetContadorUno ] = useState(0);
const [ contadorDos , SetContadorDos ] = useState(0);

useEffect(()=>{
    console.log("Se ejecutouseEffect");
},[contadorUno])

        return (
            <div className="card">
                <div className="card-img">
                    <figure className="image is-1by1">
                    <img src={img} alt="logo"/>   
                    </figure>
                    </div>
                    <div className="card-content">
                        <div className="media-content">
                        <h3 className="title is-4">Titulo: {titulo}</h3>
                        <p className="subtitle is-4">{arroba}</p>
                    </div>

                    <div className="columns">

<div className="colunm">
    <button onClick={()=> SetContadorUno(contadorUno+1)} className="button is-primary is-fullwidth">
        <p>+</p>
    </button>
    </div>


    <div className="colunm">
        <p>Likes{contadorUno}</p>
    </div>


    <div className="colunm">
    <button onClick={()=> SetContadorDos(contadorDos-1)} className="button is-primary is-fullywidth" >
        <p>-</p>
    </button>

    </div>
    
    <div className="colunm">
        <p>Likes{contadorDos}</p>
    </div>




</div>

</div>
</div>


            )
            };

export default ProfileCard;