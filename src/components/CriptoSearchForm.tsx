import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../Types"
import ErrorMessage from "./ErrorMessage"

const CriptoSearchForm = () => {
    const {names, fetchData}=useCryptoStore()
    
    const[pair, setPair]=useState<Pair>({
        currency:"",
        cripto:""
    })
    
    const[error, setError]=useState({
        currency:"",
        cripto:""
        
    })

    useEffect(()=>{
        setError({currency:"", cripto:""})
    },[pair.currency, pair.cripto])

    const handleChange=(e:ChangeEvent<HTMLSelectElement>)=>{

        const{name,value}=e.target

        setPair({
            ...pair, [name]:value
        })
    }  
    
    const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(pair.cripto===""||pair.currency===""){
            setError({cripto:pair.cripto===""?"Campo obligatorio":"", currency:pair.currency===""?"Campo Obligatorio":""})
            return 
        }
        // setError({currency:"",cripto:""})
    
        fetchData(pair)
    
    
    }
    
    return (
    <form className="form" onSubmit={onSubmit}>
        <div className="field">
            <label htmlFor="currency">Moneda: </label>
            <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
            <option value="">-- Seleccione --</option>    
            {currencies.map(currency=>(
                <option value={currency.code} key={currency.code}>{currency.name}</option>
            ))}
            </select>
        </div>
            {error.currency&&<ErrorMessage>{error.currency}</ErrorMessage>}    
        <div className="field">
            <label htmlFor="cripto">Criptomoneda: </label>
            <select name="cripto" id="cripto" onChange={handleChange} value={pair.cripto}>
                <option value="">-- Seleccione --</option>
                {names.map(name=>(
                    <option value={name.CoinInfo.Name} key={name.CoinInfo.Name}>{name.CoinInfo.FullName}</option>
                ))}
            </select>
        </div>
                {error.cripto&&<ErrorMessage>{error.cripto}</ErrorMessage>}    
        <input type="submit" value='Cotizar' />
    </form>
    
      
  )
}

export default CriptoSearchForm
