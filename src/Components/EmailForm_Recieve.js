import React, { useState } from 'react'
import './CSS_Files/Bday.css';
import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from "react-hook-form"
import swal from 'sweetalert2';

export default function EmailForm() {
  
   const [email,setEmail]=useState('');
   const name='Aayush Dogra'
   const message='Hello there';
   const to_name='Ayushi Sharma';
 

   const handleSubmit=(e)=>{

    e.preventDefault();
    const serviceId='service_hh0wfhi'
    const templateId='template_ru1v6ma'
    const publicKey='qLo7vRxzTAVmgxx5k'

    const templateParams={
      from_name:name,
      to_email:email,
      to_name:to_name,
      message:message

    }


    //  emailjs.send(serviceId,templateId,templateParams,publicKey)
    //  .then((response)=>{
      
    //      console.log("email send success");

    //  })
    //  .catch((error)=>{

    //   console.log('error sending mail',error);
    //  })
   } 

   if(true){

      return (
        <div style={{border:'1px  solid black'}} className='emailpage'>
          <div style={{marginTop:'20px',border:'1px  solid black',width:'80vh'}}>

          <form onSubmit={handleSubmit}
           style={{display: 'flex', gap: '10px',flexDirection: 'column'}}>
            <div style={{flexDirection:'column',display:'flex',border:'1px solid green'}}>
              <span>Enter Your Email</span>
            <input type='email'  style={{ maxWidth: '100%',height:'30px' }} value={email} onChange={(e)=>setEmail(e.target.value)} 
            placeholder='Your email'></input>
            </div> 
             
             <div style={{display:'flex',flexDirection:'column'}}>
              <span>What's your favorite line from a romantic movie?</span>
              <textarea placeholder='Enter your answer'></textarea>
             </div>

            <button className='form-button' type='submit'>Submit</button>
          </form>
          </div>
          
        </div>
      )
    }
    else
    {

      return(

        <></>
      );
    }
}
