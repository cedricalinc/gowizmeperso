// eslint-disable-next-line
import React,{useState} from 'react';
import '../App.css';
import Nav from './Nav'
import {connect} from 'react-redux'
import {Input,Button} from 'antd';
import fond from '../images/Flat-Mountainslog.svg'
import {Redirect} from 'react-router-dom'
  

function Connexion(props) {

  const [signUpPrenom, setSignUpPrenom] = useState('')
  const [signUpNom, setSignUpNom] = useState('')
  const [signUpVille, setSignUpVille] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [userExists, setUserExists] = useState(false)
  const [listErrorsSignin, setErrorsSignin] = useState([])
  const [listErrorsSignup, setErrorsSignup] = useState([])

  // Fonction de création de compte
  var handleSubmitSignup = async () => {
    //1. connexion back pour envoi des données vers BDD si contrôles OK
    const data = await fetch('/sign-up', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `prenomCreation=${signUpPrenom}&nomCreation=${signUpNom}&villeCreation=${signUpVille}&emailCreation=${signUpEmail}&passwordCreation=${signUpPassword}`
    })
    //2. récupération des données transmises depuis le back
    const body = await data.json()
    //3. Si l'utilisateur n'est pas déjà présent en BDD, alors on stocke son token, son id et on modifie l'état userExists à True pour plus tard
    if(body.result === true){
      setUserExists(true)
      props.addToken(body.saveUser.token)
      props.addIdUser(body.saveUser._id)
    } else {
    //4. Si le résultat n'est pas à true, alors on affiche l'erreur retournée 
      setErrorsSignup(body.error)
    }
  }

//  Fonction pour la connexion
  var handleSubmitSignin = async () => {
      //1. connexion back pour envoi des données vers BDD si contrôles OK
      const data = await fetch('/sign-in', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `emailConnexion=${signInEmail}&passwordConnexion=${signInPassword}`
    })
      //2. récupération des données transmises depuis le back
      const body = await data.json()
      //3. Si l'utilisateur est présent en BDD, alors on stocke son token, son id et on le redirige vers la page principale --> connexion OK
      if(body.result === true){
        setUserExists(true)
        props.addToken(body.user.token)
        props.addIdUser(body.user._id)
        return <Redirect to='/' />

      }  else {
        setErrorsSignin(body.error)
      }
    }

    // Si l'utilisateur est présent après création, alors direction la page principale
    if(userExists){
      return <Redirect to='/' />
    }
    
    // maping des erreurs remontées depuis le Sign-In
    var tabErrorsSignin = listErrorsSignin.map((error,i) => {
      return(<p>{error}</p>)
    })

    // maping des erreurs remontées depuis le Sign-up
    var tabErrorsSignup = listErrorsSignup.map((error,i) => {
      return(<p>{error}</p>)
    })

    return (
        <div  style={{ 
            width: "100vw",
            height: "100vh",
            marginBottom : '20px',
            backgroundImage:`url(${fond})` }}>
             
          {/* Barre de navigation */}
          <Nav/>
 
          <div className="Login-page" >

          {/* SIGN-IN / Connexion */}

          <div className="Sign">
            <div style={{marginTop : '50px'}}>
              <h1 class="titrePage">
                  Connexion
              </h1>
            </div>
                  
            <Input onChange={(e) => setSignInEmail(e.target.value)} className="Login-input" placeholder="E-mail"  />

            <Input.Password onChange={(e) => setSignInPassword(e.target.value)} className="Login-input" placeholder="Mot de passe" />
            
            {tabErrorsSignin}

            <Button onClick={() => handleSubmitSignin()}  style={{width:'130px'}} type="primary">Me connecter</Button>

          </div>

        {/* SIGN-UP / Création */}

        <div className="Sign">
          <div style={{marginTop : '50px'}}>
            <h1 class="titrePage">
              Inscription
            </h1>
          </div>
                           
          <Input onChange={(e) => setSignUpPrenom(e.target.value)} className="Login-input" placeholder="Prénom" />
          <Input onChange={(e) => setSignUpNom(e.target.value)} className="Login-input" placeholder="Nom" />
          <Input onChange={(e) => setSignUpVille(e.target.value)} className="Login-input" placeholder="Ville" />
          <Input onChange={(e) => setSignUpEmail(e.target.value)} className="Login-input" placeholder="E-mail" />
          <Input.Password onChange={(e) => setSignUpPassword(e.target.value)} className="Login-input" placeholder="Mot de passe" />

          {tabErrorsSignup}

          <Button onClick={() => handleSubmitSignup()} style={{width:'130px'}} type="primary">M'inscrire</Button>

        </div>
      </div>
    </div>
    
      )
    }

    // Stockage en redux du token et de l'id User
    function mapDispatchToProps(dispatch) {
      return {
          addToken: function (token) {
              dispatch({ type: 'saveToken', token })
          },
          addIdUser: function (idUser) {
              dispatch({ type: 'addIdUser', idUser })
          }
      }
  }

export default connect(
  null,
  mapDispatchToProps
)(Connexion);
