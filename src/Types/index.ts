import { CryptoPriceSchema, Currency, CurrencyValue, Pair } from "../schema/crypto-schema";
import {z} from 'zod';

export type CurrencyType=z.infer<typeof Currency>;



export type CryptoCurrency=z.infer<typeof CurrencyValue>

export type Pair=z.infer<typeof Pair>

export type CryptoPrice=z.infer<typeof CryptoPriceSchema>