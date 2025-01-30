
import { create } from "zustand";
// import { CryptoCurrencyResponseSchema } from "./schema/crypto-schema";
import { CryptoCurrency, CryptoPrice, Pair } from "./Types";
import { devtools } from "zustand/middleware";
import { getCryptos, getValues } from "./services";



type CryptoStore={
    names:CryptoCurrency,
    data:CryptoPrice,
    loading:boolean,
    fetchCryptos:()=>Promise<void>,
    fetchData:(pair:Pair)=>Promise<void>   
}

export const useCryptoStore=create<CryptoStore>()(devtools((set)=>({
    names:[],
    data:{
        IMAGEURL:"",
          PRICE:"",
          HIGHDAY:"",
          LOWDAY:"",
          CHANGEPCT24HOUR:"",
          LASTUPDATE:"",
    },
    loading:false,

    fetchCryptos:async()=>{
        const cryptoMonedas=await getCryptos()
        set(()=>({
            names:cryptoMonedas
        }))
    },
    //Comienza llamado
    fetchData:async(pair)=>{
        // console.log(CryptoData)
        set(()=>({
            loading:true
        }))

        const CryptoData=await getValues(pair) //Obtengo la cotización
        
        set(()=>({
            data:CryptoData,
            loading:false
        }))
    }    
})))
