import React, { useState } from 'react'
import './CSS_Files/Bday.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


export default function EmailForm() {
   const [email,setEmail]=useState('');
   const [isSend,setIsSend]=useState(false);
   const [textareaValues, setTextareaValues] = useState({});


   const questions=["How would you like to spend your birthday someday?",
    "Which thing gives you the maximum adrenaline rush?",
    "What thing gives you butterflies in stomach? "+"🤭",
    "What is your love language?",
    "What is your dream destination?",
    "When were you happiest?",
    "What's your ideal date night?",
    "If you get a chance to make a wish which certain become true, what would it be?",
    "If you can do anything you want for one day, what would you do?",
    "Last question, how do u feel about our Friendship?",
];

   const name='Aayush Dogra'
   const message='First of all happy birthday '+"🤩🤩"+" .I am great to have a friend like you.";
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
     emailjs.send(serviceId,templateId,templateParams,publicKey)
     .then((response)=>{
      
         console.log("email send success");
         Swal.fire({
          title: "Aa gya email?",
          showDenyButton: true,
          // showCancelButton: true,
          confirmButtonText: "Haa aa gya "+"😍",
          denyButtonText: `Aby nhi aya yaar `+ '😔',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Bdia! "+"😄", "Aage badhte hai", "success");
            setIsSend(true);
          } else if (result.isDenied) {
            Swal.fire("Tune email Id galat daali hai "+"🙄", "Id dhang se daal", "info");
          }
        });

     })
     .catch((error)=>{

      console.log('error sending mail',error);
     })

        
        //  Swal.fire({
        //   title: "Email aa gya check kar ek baar?",
        //   showDenyButton: true,
        //   // showCancelButton: true,
        //   confirmButtonText: "Haa aa gya "+"😍",
        //   denyButtonText: `Aby nhi aya yaar `+ '😔',
        // }).then((result) => {
        //   /* Read more about isConfirmed, isDenied below */
        //   if (result.isConfirmed) {
        //     Swal.fire("Bdia! "+"😄", "Aage badhte hai", "success");
        //     setIsSend(true);
        //   } else if (result.isDenied) {
        //     Swal.fire("Tune email Id galat daali hai "+"🙄", "Id dhang se daal", "info");
        //   }
        // });
    
   } 

  //  const handleTextareaChange = (index, value) => {
  //   const newTextareas = [...textareas];
  //   newTextareas[index] = value;
  //   setTextareas(newTextareas);
  // };

  const handleTextareaChange = (question, value) => {
    setTextareaValues(prevValues => ({
      ...prevValues,
      [question]: value
    }));
  };


const handleNextSubmit=(e)=>{


  e.preventDefault();


  const serviceId='service_hh0wfhi'
    const templateId='template_zbkk0ls'
    const publicKey='qLo7vRxzTAVmgxx5k'
    let recieveMsg='';
    let feedbackMsg='';
    

 Object.keys(textareaValues).forEach((key) => {
  // recieveMsg += `Question ${parseInt(key) + 1}:-\n${textareaValues[key]}\n\n`;

  if(key=='Feedback' && (textareaValues[key]!='' || textareaValues[key]!=undefined || textareaValues[key]!=null))
  {
       feedbackMsg='and for your feedback also' +"😙";
  }
  recieveMsg += `Ques:${key}\nans:-${textareaValues[key]}\n\n`;

});
console.log('email is: '+email);
const templateParams={
  from_email:email,
  message:recieveMsg

}
console.log('Message is: '+ recieveMsg);

emailjs.send(serviceId,templateId,templateParams,publicKey)
     .then((response)=>{
      console.log("email recieved");
      Swal.fire("Thanks for your response"+"😃", feedbackMsg, "success");
     })
     .catch((error)=>{

      console.log('error sending mail',error);
     })

};
  

if(!isSend){
      return (
        <div style={{flexDirection:'column',display:'flex'}}>
          <h1 style={{ color: 'white' }}>Happy Birthday Ayushi Ji 😍</h1>
          <form onSubmit={handleSubmit}
           style={{display: 'flex', alignItems: 'center', gap: '10px',flexDirection: 'column'}}>
            <input type='email' className='form-fields' value={email} onChange={(e)=>setEmail(e.target.value)} 
            placeholder='Type your email here to get a special e-mail' required></input>
            <button className='form-button' type='submit'>Submit</button>
          </form>
        </div>
      )
    }

    else{
return(<div style={{background:'wheat',width:'2100px',height:'100vh',border:'1px solid green'}}>
  <div  className='emailpage'>
          <div style={{marginTop:'20px',width:'80vh'}}>
<h1>Here are some questions for you</h1>
          <form onSubmit={handleNextSubmit}
           style={{display: 'flex', gap: '20px',flexDirection: 'column'}}>
            {/* <div style={{flexDirection:'column',display:'flex',gap:'10px'}}>
              <span style={{color:'white'}}>Enter Your Email</span>
            <input type='email'  style={{ maxWidth: '100%',height:'30px' }} value={email} onChange={(e)=>setEmail(e.target.value)} 
            placeholder='Your email'></input>
            </div>  */}
             
             {/* <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <span style={{color:'white'}}>How will you like to spend your birthday someday?</span>
              <textarea style={{height:'100px'}} placeholder='Enter your answer'></textarea>
             </div> */}


{questions.map((question, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column' ,gap:'10px'}}>
                <span >{question}</span>
                <textarea
                style={{height:'100px',fontSize:'15px'}}
                  placeholder='Enter your answer'
                  onChange={(e) => handleTextareaChange(question, e.target.value)}
                  required
                />
              </div>
            ))}

<div  style={{ display: 'flex', flexDirection: 'column' ,gap:'10px'}}>
                <span >Any feedback for my litte surprise? (its optional)</span>
                <textarea
                style={{height:'100px',fontSize:'15px'}}
                  placeholder='Enter your feedback(optional)'
                  onChange={(e) => handleTextareaChange("Feedback", e.target.value)}
                />
              </div>


            <button className='form-button' type='submit'>Submit</button>
          </form>
          </div>
          
        </div>
        </div>
);
    }
}
