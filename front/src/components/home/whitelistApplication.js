import axios from 'axios';
import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import logo from "../../resourses/thLogo.png"
import Footer from './Footer';
import Header from "./Header"
import Form from './multiForm';


const WhitelistApplication = (props) => {
    useEffect(() => {
        axios.post("/dashboard/isLoged",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>
            {      if(res.data.IsLoged==true){
          
                  }
              else{
                  props.history.push('/log')
              }}
          
                  )

    }, [])
    return (<div>


<Header/>
        <main className="main-whitlist">

            <div className="container">

                <Form />
            </div>


        </main>



       <Footer/>
    </div>);
}

export default withRouter(WhitelistApplication);