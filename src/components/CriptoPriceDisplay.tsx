import { useCryptoStore } from "../store"

const CriptoPriceDisplay = () => {
    const data=useCryptoStore((state)=>state.data)
    
    return (
        <div className="result-wrapper">
            <>
        <h2>Cotización</h2>
        <div className="result">
            <img src={`https://cryptocompare.com/${data.IMAGEURL}`} alt="Imagen Cryptomoneda"/>
            <div>
                <p>El precio es de: <span>{data.PRICE}</span></p>
                <p>Precio más alto del día: <span>{data.HIGHDAY}</span></p>
                <p>Precio más bajo del día: <span>{data.LOWDAY}</span></p>
                <p>Variación últimas 24 horas: <span>{data.CHANGEPCT24HOUR}</span></p>
                <p>Última actualización: <span>{data.LASTUPDATE}</span></p>

            </div>
        </div>

    </>
    </div>
  )
}

export default CriptoPriceDisplay
