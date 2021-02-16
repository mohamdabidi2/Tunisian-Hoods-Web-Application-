import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './donation.css'

import logo from "../../resourses/thLogo.png"
import Header from './Header';
import Footer from './Footer';
const DonationPage = (props) => {
    const [Products, setProducts] = useState([])
    const [Cart, setCart] = useState([])
    const [Pop, setPop] = useState(false)
    const [payment, setpayment] = useState("")
    const [Err, setErr] = useState("")
const [keyword, setkeyword] = useState("")
    const FirstName = useRef("")
    const LastName = useRef("")
    const StreetAddress = useRef("")
    const apartment = useRef("")
    const Town = useRef("")
    const State = useRef("")
    const Postcode = useRef("")
    const Phone = useRef("")
    const Email = useRef("")



    useEffect(() => {
        
     Axios.post("/dashboard/donationpacks",{},{headers:{authToken:localStorage.getItem('Token')}})
     .then(res=>setProducts(res.data))
    }, [])
    const additemtocart=(x)=>{
        
if(Cart.findIndex(el=>el._id==x._id)==-1){
        
    setCart([...Cart,{...x,qtn:1}])
        }
        else{
            alert ("item already exists in your cart ")
        }
    }
const deleteItem=(id)=>{
setCart(Cart.filter(el=>el._id!==id))
}
const Verif=()=>{
  if(FirstName.current.value.length!=""&&LastName.current.value.length!=""&&StreetAddress.current.value.length!=""&&Town.current.value.length!=""&&State.current.value.length!=""&&Postcode.current.value.length!=""&&Phone.current.value.length!=""&&Email.current.value.length!=""&&payment.length!="")
  {
  let firstName=FirstName.current.value
  let lastName=LastName.current.value
  let streetAddress=StreetAddress.current.value
  let town=Town.current.value
  let state=State.current.value
  let postcode=Postcode.current.value
  let phone=Phone.current.value
  let email=Email.current.value
Axios.post("/dashboard/donateftw",{Cart:Cart,firstName,apartment:apartment.current.value,lastName,streetAddress,town,state,postcode,phone,email,payment},{headers:{authToken:localStorage.getItem('Token')}})
.then(()=>props.history.push("/"))
    
  }
  else
  setErr("please verify the information below")
  
}


    const plusItem=(id)=>{
        let index=Cart.findIndex(el=>el._id==id)
let newTab=Cart
newTab[index]={...newTab[index],qtn:newTab[index].qtn+1,}
setCart(newTab)
setCart([...newTab])

    }
    const moinsItem=(id)=>{
        let index=Cart.findIndex(el=>el._id==id)
let newTab=Cart

if(newTab[index].qtn!=1){
    newTab[index]={...newTab[index],qtn:newTab[index].qtn-1}
    setCart(newTab)
    setCart([...newTab])
 
}

    }
    const checkout=()=>{
setPop(true)
    }
    const close=()=>{
        setPop(false)
            }
    return ( 
        <div >
            <Header/>

        <main className="main-shopdonation">
            <h1 className="donation-title numberstitel">Item Shop</h1>
            <div className="shop-category">
            <p onClick={()=>setkeyword("")} className="category-aa">All</p>
               { ["Priority Queue","Character Name Change","Custom Vehicle (upgraded)","Super Custom Vehicle (upgraded)","Any Custom Vehicule","Custom Phone number","Custom Vehicle Plat"].map((el,i)=><p onClick={()=>setkeyword(el)} className="category-aa"key={i}>{el}</p>)}
            
            </div>
           <div className="donationquet">
               <div className="donationproducts">
                   <p className="products-shop">Products</p>
                   <div className="barshop"></div>
                   <div className="productsforshopdonation">
{Products.filter(el=>el.ProductCategory.toUpperCase().includes(keyword.toUpperCase())).map(el=>
    <div className="productself" key={el._id}>
        <img src={el.ProductPhoto} alt="" className="product-photo"/>
<h3 className="productTitle">{el.ProductName}</h3>
<p className="productPrice">{el.ProductPrice} €</p>
<button className="productaddtocart" onClick={()=>additemtocart(el)}>Add to Cart</button>
    </div>
    )}
                   </div>
             
               </div>
               <div className="donationproducts">
                   <p className="products-shop">Your Cart</p>
                   <div className="barshop"></div>
<div className="titles-shop">
    <p className="titlescart">PRODUCT</p>
    <p className="titlescart">PRICE</p>
    <p className="titlescart">QUANTITY</p>
    <p className="titlescart">TOTAL</p>
    <p className="titlescart"></p>

</div>
{Cart.length==0?<div className="ffe">
<i class="fas  fa-shopping-cart fa-shopping-cart2"></i><p className="messageee">Your Cart IsCurrenty Empty!</p>
</div>:
<div>
{Cart.map(el=><div key={el._id} className="titles-shop">
<p className="titlescart">{el.ProductName}</p>
<p className="titlescart">{el.ProductPrice}</p>
    <p className="titlescart">
    <span className="qnt-145"  onClick={()=>moinsItem(el._id)}>-</span>
    <span className="qnt-1456">{el.qtn}</span>
    <span className="qnt-145" onClick={()=>plusItem(el._id)}>+</span>
    </p>
<p className="titlescart">{el.ProductPrice*el.qtn} € </p>
<p className="titlescart" onClick={()=>deleteItem(el._id)}><i class="fas fa-trash-alt"></i> </p>



</div>)}
<div className="titles-shop titles-shop2">
    <p className="titlescart titlescart-btn titlescart-btn2" onClick={checkout}>
Checkout</p>
<p className="titlescart titlescart-btn">Total : {Cart.reduce((a,b)=>a+(b.qtn*b.ProductPrice),0)} €</p>
</div></div>}
               </div>
           </div>
           <div className="dfs" style={Pop==true?{display:"flex"}:{display:"none"}}>

    
           <div class="container4">
  <div class="title">
      <h2>Donation Form</h2>
      <div className="close">
      <p className="" onClick={close}>x</p>
      </div>
    
  </div>
<div class="d-flex">
  <form action="" method="">
    <h5 className="tazer">{Err}</h5>
    <label>
      <span class="fname">First Name <span class="required">*</span></span>
      <input className="inputttt" type="text" ref={FirstName} name="fname"/>
    </label>
    <label>
      <span class="lname">Last Name <span class="required">*</span></span>
      <input className="inputttt" ref={LastName} type="text" name="lname"/>
    </label>
 

    <label>
      <span>Street Address <span class="required">*</span></span>
      <input  className="inputttt"ref={StreetAddress} type="text" name="houseadd" placeholder="House number and street name" required/>
    </label>
    <label>
      <span>&nbsp;</span>
      <input className="inputttt"  ref={apartment} type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
    </label>
    <label>
      <span>Town / City <span class="required">*</span></span>
      <input className="inputttt"  ref={Town} type="text" name="city"/> 
    </label>
    <label>
      <span>State / County <span class="required">*</span></span>
      <input className="inputttt"  ref={State} type="text" name="city"/> 
    </label>
    <label>
      <span>Postcode / ZIP <span class="required">*</span></span>
      <input className="inputttt" ref={Postcode} type="text" name="city"/> 
    </label>
    <label>
      <span>Phone <span class="required">*</span></span>
      <input className="inputttt" ref={Phone} type="tel" name="city"/> 
    </label>
    <label>
      <span>Email Address <span class="required">*</span></span>
      <input  className="inputttt" ref={Email} type="email" name="city"/> 
    </label>
   
  </form>
 
  <div class="Yorder">
    <table className="dzs">
      <tr>
        <th colspan="2">Your order</th>
      </tr>
    
      {
Cart.map(el=>  <tr>
    <td>{el.ProductName} x {el.qtn}(Qty)</td>
    <td>{el.ProductPrice*el.qtn} €</td>
  </tr>)
}
      <tr>
        <td>Subtotal</td>
        <td>{Cart.reduce((a,b)=>a+(b.qtn*b.ProductPrice),0)} €</td>
      </tr>

    </table><br/>
    <div>
      <input onClick={()=>setpayment("Bank")} type="radio" name="dbt" value="Bank" /> Direct Bank Transfer
    </div>
    <p className="p-donation">
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
    </p>

    <div>
      <input onClick={()=>setpayment("Paypal")}type="radio" name="dbt" value="Paypal"/> Paypal <span>
      <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50"/>
      </span>
    </div>
    <button className="button-donation" type="button" onClick={Verif} >Place Order</button>
  </div>
 </div>
</div>
           </div>
        </main>
  <Footer/>
        </div>
     );
}
 
export default withRouter(DonationPage) ;