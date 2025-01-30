import { useEffect, useMemo } from 'react'
import CriptoSearchForm from './components/CriptoSearchForm'
import { useCryptoStore } from './store'
import CriptoPriceDisplay from './components/CriptoPriceDisplay'
import Spinner from './components/Spinner'

function App() {
  const {fetchCryptos,loading,data}=useCryptoStore()
  const hasData=useMemo(()=>!Object.values(data).includes(''),[data])

  useEffect(()=>{
    fetchCryptos()
  },[])

  return (
    <>
    <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>
   
   <div className="content">
    
      <CriptoSearchForm/>
      {loading?<Spinner/>:hasData&&<CriptoPriceDisplay/>}
   </div>
   
    </>
  )
}

export default App
