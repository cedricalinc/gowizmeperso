import React,{useState, useEffect} from 'react';
import '../App.css';
import { List, Avatar} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'
import {Input,Button} from 'antd';
import fond from '../images/Flat-Mountainslog.svg'
import {Link, Redirect} from 'react-router-dom'
  

function Connexion(props) {


    const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignin, setErrorsSignin] = useState([])
  const [listErrorsSignup, setErrorsSignup] = useState([])

  


  var handleSubmitSignup = async () => {
    
    const data = await fetch('/sign-up', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`
    })

    const body = await data.json()
    console.log("Contenu du body",body)
    console.log("BODY TOKEN",body.saveUser.token)

    if(body.result == true){
      setUserExists(true)
      props.onAddToken(body.saveUser.token)
      console.log("BODY TOKEN",body.saveUser.token)
    } else {
      setErrorsSignup(body.error)
    }
  }



console.log("TOKEN RECU",props.token)


  var handleSubmitSignin = async () => {
 
    const data = await fetch('/sign-in', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
    })

    const body = await data.json()

    if(body.result == true){
      console.log("BODY",body)
      setUserExists(true)
      props.onAddToken(body.user.token)

    }  else {
      setErrorsSignin(body.error)
    }
  }

  if(userExists){
    return <Redirect to='/screensource' />
  }

  var tabErrorsSignin = listErrorsSignin.map((error,i) => {
    return(<p>{error}</p>)
  })

  var tabErrorsSignup = listErrorsSignup.map((error,i) => {
    return(<p>{error}</p>)
  })

    return (
        <div  style={{ 
            width: "100vw",
            height: "100vh",
            marginBottom : '20px',
            backgroundImage:`url(${fond})` }}>
             <Nav/>
 
           
                    
      
            
                    <div className="Login-page" >

{/* SIGN-IN */}

<div className="Sign">
<div style={{marginTop : '50px'}}>
                    <h1 class="titrePage">
                            Connexion
                        </h1>
                    </div>
        
  <Input onChange={(e) => setSignInEmail(e.target.value)} className="Login-input" placeholder="email" />

  <Input.Password onChange={(e) => setSignInPassword(e.target.value)} className="Login-input" placeholder="password" />
  
  {tabErrorsSignin}

  <Button onClick={() => handleSubmitSignin()}  style={{width:'130px'}} type="primary">Me connecter</Button>

</div>

{/* SIGN-UP */}

<div className="Sign">
<div style={{marginTop : '50px'}}>
                    <h1 class="titrePage">
                            Inscription
                        </h1>
                    </div>
        
        
  <Input onChange={(e) => setSignUpUsername(e.target.value)} className="Login-input" placeholder="username" />

  <Input onChange={(e) => setSignUpEmail(e.target.value)} className="Login-input" placeholder="email" />

  <Input.Password onChange={(e) => setSignUpPassword(e.target.value)} className="Login-input" placeholder="password" />

  {tabErrorsSignup}

  <Button onClick={() => handleSubmitSignup()} style={{width:'130px'}} type="primary">M'inscrire</Button>

</div>

                    
</div>
                    </div>
    
      )
    }

export default Connexion;
