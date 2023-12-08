import './App.css'
import React ,{useState} from 'react'
import Shop from './components/Shop'
import Header from './components/header'
import Nav from './components/nav'
Shop
Header

function App() {
  const product = [
    { 
      name:"cycle",
      price:2 },
      {
        name:"ligth",
        price:50
      },
      {
        name:"books",
        price:20
      },
      {
        name:"keyboard",
        price:10
      }
]
  let  [ Cart,setCart] = useState(0) 
  return <>
 <Nav Cart = {Cart} setCart={setCart}/> 
 <Header />
 
<section className="py-5">
<div className="container px-4 px-lg-5 mt-5">
<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
{
  product.map((e,i)=>{
    return < Shop Cart = {Cart} setCart={setCart} product ={e} key ={i} />
  })
}

</div>
</div>
</section>
    </>
  
}

export default App
