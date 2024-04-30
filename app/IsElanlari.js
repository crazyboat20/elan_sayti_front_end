async function cek(){
  const veri=await fetch("http://localhost:3000/isler.json")
  return await veri.json()
}

const IsElanlari = async () => {
    const veriler=await cek()
  return (
    <div className="butun-elanlar">
      {veriler.isler?.map(elan=>(
        <div key={elan.id} className="elan-karti">
         <img src={elan.sekil} width={210} height={150}/>
         <div className="is-adi">{elan.is}</div>
        </div>
      ))}
    </div>
  )
}

export default IsElanlari