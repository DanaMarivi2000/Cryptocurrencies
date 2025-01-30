import { CryptoPriceSchema, CurrencyValue } from "../schema/crypto-schema"
import axios from "axios";
import { Pair } from "../Types";

export async function getCryptos(){
    const {data:{Data}}=await axios(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD`)
    // console.log(Data[0].CoinInfo.Name)
    // const names=Data
    console.log(Data)
    const result=CurrencyValue.safeParse(Data)
    console.log(result)
    if(result.success){
        const criptoData=result.data
        console.log(criptoData)
        return criptoData         
    }
}

export async function getValues(pair:Pair){
    const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cripto}&tsyms=${pair.currency}`
    const {data:{DISPLAY}} = await axios(url)
    console.log(DISPLAY)
    console.log(DISPLAY[pair.cripto][pair.currency])
    const data=DISPLAY[pair.cripto][pair.currency]
    const result=CryptoPriceSchema.safeParse(data)
    console.log(result)
    if(result.success){
        const values=result.data
        return values
    }
}