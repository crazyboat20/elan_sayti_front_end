"use client"
import "../main.css"
import { useEffect, useState } from "react";

const Elanlarim = () => {
    const [FormMelumati,setFormMelumati] = useState([])
    useEffect(()=>{
        setFormMelumati([JSON.parse(localStorage.getItem('FormMelumati'))])
    },[])
    
  return (
   <div className="butun-elanlar">
    {FormMelumati?.map(elan=>(
      <div key={2} className="elan-karti">
       <img src={elan.elanSekili} width={210} height={150}/>
       <div className="is-adi">{elan.elanBasligi}</div>
      </div>
    ))}
   </div>
  )
}

export default Elanlarim