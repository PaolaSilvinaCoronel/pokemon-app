import axios from "axios";
import React, 
{ useEffect,
     useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import estilo from "./detalle.module.css"
export function Detalles() {
    const {id} =useParams()
    const [poke, setpoke] = useState("");
    
    useEffect(() => {
        const getpoke=async()=>await axios.get(`http://pokemonapi2021.herokuapp.com/pokemons/${id}`).then((respuesta)=>{ 
        
            setpoke(respuesta.data)
        })
    getpoke()
    }, );
    return (
         <div className={estilo.bodyhome}>
            <Link to="/home" className={estilo.volver}>volver</Link>
            {
                poke?
                <div className={estilo.contenedor}>
                    <div className={estilo.titulo}>
                    <h1 style={{fontSize:"2rem"}}>{poke[0].name}</h1>
                    </div>
                    <div className={estilo.imgdatos}>

                    <img src={poke[0].imga} style={{height:"14rem"}} alt="" />
                        
                    <div className={estilo.datos}>

                    <p>ataque:{poke[0].attack}</p>
                    <p>defensa:{poke[0].defense}</p>
                    <p>altura:{poke[0].height}</p>
                    <p>vida:{poke[0].hp}</p>
                    <p>velocidad:{poke[0].speed}</p>
                    </div>
                    </div>
                    <div className={estilo.tipos}>

                    {
                        poke[0].types.map((tipo,index2)=>{
                            return (
                                <div key={index2+"b"}><p>tipo{index2+1}:{tipo}</p></div>                                    
                                
                                )
                            })
                        }
                        </div>
                </div>
                :
                <div  style={{width:"100%",height:"100vh"}}>
                cargando
            </div>
            }
        </div>
    )
}
