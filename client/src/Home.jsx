import React, { useEffect, useState } from "react"
import axios from "axios"
import estilo from "./home.module.css" 
import { Link } from "react-router-dom";

export  function Home  () {
const [pokemoon, setpokemoon] = useState("");
const [pokemoon2, setpokemoon2] = useState("");
const [tipos,settipos]= useState("")
const [impu,setimpu]= useState("")
const [num1,setnum1]=useState(0)
const [num2,setnum2]=useState(20)

useEffect (() => {
const gettipos = async()=> await axios.get("http://pokemonapi2021.herokuapp.com/types").then((respuesta)=>{
    settipos(respuesta.data)
})

  const getpokemons = async()=>  await axios.get("http://pokemonapi2021.herokuapp.com/pokemons").then((responde)=>{
      setpokemoon(responde.data)
      setpokemoon2(responde.data)
  })
  getpokemons()
  gettipos()
}, []);
const buscar=(e)=>{
    setpokemoon("")
const getpokemon= async()=> await axios.get("http://pokemonapi2021.herokuapp.com/pokemons?namee="+impu).then((respuesta)=>{
    setpokemoon(respuesta.data)
})
    getpokemon()
}
const sigui=()=>{
    setnum1(num1+20)
    setnum2(num2+20)
}
const atras=()=>{
    setnum1(num1-20)
    setnum2(num2-20)
}
console.log(tipos)
console.log(pokemoon)
const filtertipo=(e)=>{
    if(e.target.value==="todo"){
        setpokemoon(pokemoon2)
    }
    if(e.target.value!=="todo"){
        
        setpokemoon(pokemoon2.filter(j=>j.types.includes(e.target.value)))
    }
}
    return (
        <>
        <div className={estilo.bodyhome}>
            <div className={estilo.header}>
            {pokemoon?<button className={estilo.butoon} onClick={()=>setpokemoon(pokemoon2)}>Todos</button>:null}
            {pokemoon?<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><input style={{padding:"0.5rem 1rem",width:"45%",background:"#9BDE7E"}} type="text" onChange={(e)=>setimpu(e.target.value)} placeholder="buscar"/><button style={{padding:"0.5rem 1rem",background:"#9BDE7E"}} onClick={buscar}>buscar</button></div>:null}
           {pokemoon? <select className={estilo.butoon} onChange={(e)=>filtertipo(e)} name="type" id="">
               <option value="todo">tipos</option>
                {
                    tipos?
                    tipos.map((tipo,index)=>{return (
                        <option className={estilo.butoon} key={index+"o"} value={tipo[0].name}>{tipo[0].name}</option>
                    )})
               :null }
            </select>:null}
            </div>
            
        <div style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
       {pokemoon?<button className={estilo.butoon}onClick={atras}>atras</button>:null}
       {pokemoon?<button className={estilo.butoon}onClick={sigui}>siguiente</button>:null}
       </div>
        <div className={estilo.bodyhome2}>
        
            {
            pokemoon?
                pokemoon.slice(num1,num2).map((data,index)=>{
                    return (
                        <Link to={"/detalle/"+data.id} className={estilo.cartas} key={index+"a"}>
                            <h1>{data.name}</h1>
                            <img style={{height:"25rem"}} src={data.imgashiny} alt="" />
                            {
                                data.types.map((tipo,index2)=>{
                                    return (
                                        <div key={index2+"b"}><p>{tipo}</p></div>                                    
                                        )
                                })
                            }
                            </Link>
                    )
                })
        
        
       :<div className={estilo.bodyhome} style={{width:"100%",height:"100vh"}}>
           cargando
       </div> }
       </div>
       <div style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
       {pokemoon?<button className={estilo.butoon}onClick={atras}>atras</button>:null}
       {pokemoon?<button className={estilo.butoon}onClick={sigui}>siguiente</button>:null}</div>
        </div>
        </>
    )
}
