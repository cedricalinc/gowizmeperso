import React,{useState, useEffect,Component} from 'react';

import {Link} from 'react-router-dom'
import '../App.css';
import { List, Avatar} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'

import fond from '../images/Wavey-Fingerprint.svg'
  

function Planifier() {

    return (
        <div  style={{ 
            width: "100%",
            height: "100%",
            marginBottom : '20px',
            backgroundImage:`url(${fond})` }}>
            <Nav/>
          
                
               
                   
                <div style={{marginTop : '50px'}}>
                <h1 class="titrePage">
                            Planifier mes sorties 
                        </h1>
                    </div>

                   
                    <div class="events">
   
                        <div class="evenement cinema">
                            <h2 style={{textAlign:'center'}}>Mes sorties</h2>
                            <div class="list">
                                <div class='carte' style={{ alignContent: 'center', padding:'0px'}}>
                                    <img src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                    <p>TENET</p>
                                    <p>Science-Fiction</p>
                                </div>
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                      
                            </div>
                        </div>

                        
                    </div>

                    <div class="events">
   
                        <div class="evenement theatre">
                        <h2 style={{textAlign:'center'}}>Mes favoris</h2>
                            <div class="list">
                                <div class='carte' style={{ alignContent: 'center', padding:'0px'}}>
                                    <img src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                    <p>TENET</p>
                                    <p>Science-Fiction</p>
                                </div>
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                        </div> 
                                </div>
                            </div>
                        </div>

                        <div class="events">
   
                            <div class="evenement concert">
                            <h2 style={{textAlign:'center', color:'black'}}>Sorties de mes ami.e.s</h2>
                                <div class="list">
                                    <div class='carte' style={{ alignContent: 'center', padding:'0px'}}>
                                        <img src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                    </div>
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                    <div class='carte'>
                                            <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                            <p>TENET</p>
                                            <p>Science-Fiction</p>
                                    </div> 
                                </div>
                            </div>
                        </div>

                        <div class="events">
   
                        <div class="evenement exposition">
                        <h2 style={{textAlign:'center'}}>Favoris de mes ami.e.s</h2>
                            <div class="list">
                                <div class='carte' style={{ alignContent: 'center', padding:'0px'}}>
                                    <img src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                    <p>TENET</p>
                                    <p>Science-Fiction</p>
                                </div>
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                </div> 
                                <div class='carte'>
                                        <img style={{height:'200px'}} src="https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" alt="tenet"/>
                                        <p>TENET</p>
                                        <p>Science-Fiction</p>
                                        </div> 
                                </div>
                            </div>
                        </div>




            </div>


    
      )
    }

    function mapDispatchToProps(dispatch) {
        return {
          onAddIdEvent: function (idEvent) {
            dispatch({ type: 'addIdEvent', idEvent: idEvent });
          },
          onAddIdSortie: function (idSortie) {
            dispatch({ type: 'addIdSortie', idSortie: idSortie });
          }
        }
      }
      
      function mapStateToProps(state) {
        return {
          idUser: state.idUserReducer,
          token: state.tokenReducer,
          user: state.userReduceur,
          currentCity: state.currentCityReducer
        }
      }
      
      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(Planifier);