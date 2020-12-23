import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import { List, Avatar} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'
import { Row, Col } from 'reactstrap';
import fond from '../images/Wavey-Fingerprint.svg'
import image from '../images/tenet.jpg'

function DetailSortie() {


    return (
      <div  style={{ 
        width: "100vw",
        height: "100vh",
        marginBottom : '20px',
        backgroundImage:`url(${fond})` }}>
         <Nav/>

       
                {/* <div style={{marginTop : '50px'}}>
                <h1 class="titrePage">
                        Détail de la sortie 
                    </h1>
                </div> */}
             
                
            <div class="orgaSortie">
          
              {/* Bloc pour la photo avec les infos de la sortie */}
                <div style={{margin: '50px', marginRight:'100px'}}>
                  
                  <h1 style={{color:'#EFB509'}}>Informations de la sortie</h1>
                  <div class="orgaSortie">
                    <div>
                      <img style={{height: '300px', marginRight:'15px'}} src={image} />
                    </div>

                    <div>
                      <h1 style={{color:'white'}}>Il était une fois dans l'ouest </h1>
                      {/* <h2 style={{color:'white'}}>Type : </h2> */}
                      <h2 style={{color:'white'}}>UGC CHATELET LES HALLES </h2>
                      {/* <h2 style={{color:'white'}}>Code postal : </h2> */}
                      <h2 style={{color:'white'}}>Le 18/12/2020 - 19h00</h2>
                      {/* <h2 style={{color:'white'}}>Fin :</h2> */}
                    </div>
                  </div>
                </div>
               
             
                  {/* Bloc pour afficher les amis conviés */}
                  <div style={{margin : '50px'}}>
        
                  <h1 style={{color:'#EFB509'}}>Ami.e.s convié.e.s </h1>
                    <div class="amisInvites">
                      <img style={{marginRight:'15px'}} src={image} />
                      <div class="flexcolumn" >
                        <h5>Lydie PERRON </h5>
                        <h6>Asnières-Sur-Seine</h6>
                      </div>
                    </div>
                    <div class="amisInvites">
                      <img style={{marginRight:'15px'}} src={image} />
                      <div class="flexcolumn" >
                        <h5>Lydie PERRON </h5>
                        <h6>Asnières-Sur-Seine</h6>
                      </div>
                    </div>
                    <div class="amisInvites">
                      <img style={{marginRight:'15px'}} src={image} />
                      <div class="flexcolumn" >
                        <h5>Lydie PERRON </h5>
                        <h6>Asnières-Sur-Seine</h6>
                      </div>
                    </div>
                    <div class="amisInvites">
                      <img style={{marginRight:'15px'}} src={image} />
                      <div class="flexcolumn" >
                        <h5>Lydie PERRON </h5>
                        <h6>Asnières-Sur-Seine</h6>
                      </div>
                    </div>

                  </div>

                  
                  </div>    
               
        </div>


           
    
      )
    }

    function mapStateToProps(state) {
      return {
        idUser: state.idUserReducer,
        token: state.tokenReducer,
        user: state.userReduceur,
        idSortie: state.idSortieReducer,
        currentCity: state.currentCityReducer
      }
    }
    
    export default connect(
      mapStateToProps,
      null
    )(DetailSortie);


