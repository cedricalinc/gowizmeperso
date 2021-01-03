// eslint-disable-next-line
import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
// import { List, Avatar} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'

import fond from '../images/Vanishing-Stripes1.svg'
import ced from '../images/avatar.svg'
  

function Profil(props) {
        const [profil, setProfil] = useState('');
      
       
        useEffect(() => {
          const getUser = async () => {
            const data = await fetch('/profil', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: `id=${props.idUser}`
            })
            const body = await data.json();
            // console.log('BODY',body);
            setProfil(body);
          }
          getUser()
           // eslint-disable-next-line 
        }, [])
      
        var confid = 'publique'
        if (profil.confidentialite) {
                confid = 'privée'
        }



    return (
        <div  style={{ 
            width: "100%",
            height: "100vh",
            marginBottom : '20px',
            backgroundImage:`url(${fond})` }}>
            <Nav/>
          
                
        <div >
                <div style={{marginTop : '50px'}}>
                        <h1 class="titrePage">
                          <span style={{color:"white "}} > Prénom : </span> {profil.prenom}
                        </h1>
                        <h1 class="titrePage">
                          <span style={{color:"white "}} > Nom : </span> {profil.nom}
                        </h1>
                        <h1 class="titrePage">
                          <span style={{color:"white "}} > Ville : </span> {profil.ville}
                        </h1>
                </div>
                <div  class='center-image' style={{marginBottom : '30px'}}>
                    <img src={profil.avatar} alt='' />
                </div>
                <div style={{marginTop : '50px'}}>
                        <h1 class="titrePage">
                        <span style={{color:"white "}} >  Confidentialité du profil : </span>  {confid} 
                        </h1>
                       
                </div>
                <div style={{marginTop : '50px'}}>
                        <h1 class="titrePage">
                           {/* Préférences :  {profil.preferences.concert}  */}
                        </h1>
                        </div>  
                

                <Link to="/"
                            style={{
                              width: '100%',
                              height: 40,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: "#D70026" 
                            }}
                            onClick={() => props.addIdUser('')}
                                                 >
      <h2 style={{ width: "300px",textAlign:"center", backgroundColor:"red", color: 'white', borderRadius: "10px", padding: "15px", fontWeight: 'bold', marginLeft:'43%' }}>Me déconnecter</h2>
    </Link>
          
        </div>

    
</div>



    
      )
    }

    function mapDispatchToProps(dispatch) {
        return {
                       addIdUser: function (idUser) {
                dispatch({ type: 'addIdUser', idUser })
            }
        }
    }
    function mapStateToProps(state) {
        return {
         idUser: state.idUserReducer,
        }
      }
      
      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(Profil);

     
  

