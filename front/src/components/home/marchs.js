import axios from 'axios';
import React ,{useEffect, useState}from 'react'
import { withRouter } from 'react-router-dom';

import logo from "../../resourses/thLogo.png"
import Footer from './Footer';
import Header from './Header';
const Merchs = () => {
const [Pop, setPop] = useState(false)
const [Phone, SetPhone] = useState("")
const [ProductName, setProductName] = useState("")
const [Products, setProducts] = useState([])
const [Fullname, setFullName] = useState("")
const [Email, setEmail] = useState("")
useEffect(() => {
    axios.post('/dashboard/Marchs').then(res=>setProducts(res.data))
}, [])
    const verfy=(e)=>{
        e.preventDefault()
        if(Phone.length>7&&Fullname!=""&&/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email)){
            axios.post("/dashboard/buy/item",{Phone:Phone,FullName:Fullname,Email:Email,ProductName:ProductName})
        setPop(!Pop)
        }
        else{
            alert('Missing required fields')
        }
    }
    return ( 
        <div>
            <Header/>
            <main className="merchs">
<div className="banner1">

</div>
<h1 className="Merchs-title numberstitel sdaee h1ll ">TH MERCHS</h1>
<div className="merchs-store">
{Products.map(el=>
        <div className="item-merchs">
        <img src={el.ProductPhoto} alt="" className="merchimg"/>
        <p className="merchs-para">{el.ProductName}</p>
        <p className="dsid">
       {el.ProductDescription}
        </p>
     
        <button className="btn btn-danger btn-merch"onClick={()=>{
            setProductName(el.ProductName)
            setPop(!Pop)}}>Open Ticket To buy</button>
    
    
        </div>)}
</div>
            </main>
            <Footer/>
            <div className="poppApplication" style={Pop==true?{display:"flex"}:{display:"none"}} >



                
	<div class="container1 ertyhgf">
		<form name="abonnement" novalidate>

      <h1>Open Ticket To buy</h1>
      <p>
				<label for="email">Full Name : <abbr title="champs requis">* </abbr></label>
				<input className="input-ticket" type="text" id="fullname" name="Full Name" maxlength="125" onChange={(e)=>setFullName(e.target.value)} required/>

			</p>
			<p>
				<label for="email">Email : <abbr title="champs requis">* </abbr></label>
				<input className="input-ticket" type="email" id="email" name="email" maxlength="125" onChange={(e)=>setEmail(e.target.value)} required/>

			</p>

			<p>
				<label for="phone">Phone : <abbr title="champs requis">* </abbr></label>
				<input className="input-ticket" type="number" id="phone" name="phone" maxlength="50" onChange={(e)=>SetPhone(e.target.value)} required/>
		
			</p>




			<p class="center">
				<input type="submit" id="submit" name="submit" value="Send" onClick={(e)=>verfy(e)} />
			</p>
		</form>
    <p className="closeticket" onClick={()=>setPop(!Pop)}>X</p>
	</div>
<div>

</div>
            </div>
        </div>
     );
}
 
export default Merchs;