"use client"
import { useState } from "react"
import "./form-elemanlari.css"
import { useRouter } from "next/navigation"

const page = () => {
  const [formInfo,setFormInfo]=useState({elanBasligi:"",elanHaqqinda:"",elanSekili:""})
  const router=useRouter()

  function elanYerlesdir(){
        localStorage.setItem('FormMelumati', JSON.stringify(formInfo))
        router.push("/")
  }

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormInfo({...formInfo, elanSekili:reader.result})
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-elemanlari">
      <h4 className="form-basligi">Elan Yerləşdir</h4>

      <input type="text" placeholder="Elan başlığı" className="elan-basligi"
       onChange={e=>setFormInfo({...formInfo, elanBasligi:e.target.value})}
      />

      <textarea placeholder="Elan haqqında" className="elan-haqqinda"
       onChange={e=>setFormInfo({...formInfo, elanHaqqinda:e.target.value})}
      ></textarea>

      {imagePreview && (
        <div>
          <h2>Elan Şəkili:</h2>
          <img src={imagePreview} className="yuklenen-sekil"/>
        </div>
      )}

     <div className="sekil-yukleme-parent">
       <input type="file" onChange={handleImageChange} className="sekil-yukleme-butonu"/>
     </div>

      <button className="yerlesdir-butonu" onClick={elanYerlesdir}>Yerləşdir</button>
    </div>
  )
}

export default page