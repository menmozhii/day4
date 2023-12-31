import React,{useState} from 'react'

function Shop({Cart,setCart,product}) {
    let[toggle,setToggle] = useState(true)
   
  return <>
  
<div className="col mb-5">
<div className="card h-100">

<div className="badge bg-dark text-white position-absolute" style={{top:" 0.5rem", right: "0.5rem"}}>Sale</div>

<img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

<div className="card-body p-4">
<div className="text-center">

<h5 className="fw-bolder">{product.name}</h5>

<span className="text-muted text-decoration-line-through">${product.price}</span>
${product.price}
</div>
</div>

<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
<div className="text-center">
                        { toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                            setCart(Cart+1);
                            setToggle(prev=>!prev)
                        }}>Add to cart</button> :
                         <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                            setCart(Cart-1);setToggle(prev=>!prev)
                        }}>Remove from cart</button>
                                            }
                                            </div>


</div>
</div>
</div>
</>
}

export default Shop