import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import { List, Avatar} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'

import fond from '../images/Slanted-Gradien.svg'
  
 

// <CheckOutlined />
//<CloseOutlined />
function Amis() {

    

    return (
        <div  style={{ 
            width: "100%",
            height: "100%",
            marginBottom : '20px',
            backgroundImage:`url(${fond})` }}>
            <Nav/>
          
                
               
{/*                    
                <div style={{marginTop : '50px'}}>
                    <h1 class="titrePage">
                        Mes ami.e.s 
                    </h1>
                </div>  */}

                <div style={{marginTop : '50px'}}>
                    <h1 class="titrePage">
                        Rechercher des amis 
                    </h1>
                </div> 

                <div class="events">
   
                        <div class="evenement cinema">
                           
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
                        <div style={{marginTop : '50px'}}>
                    <h1 class="titrePage">
                        Demandes d'ami.e.s 
                    </h1>
                </div> 

                <div class="events">
   
                        <div class="evenement cinema">
                          
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

                    <div style={{marginTop : '50px'}}>
                    <h1 class="titrePage">
                        Mes ami.e.s 
                    </h1>
                </div> 

                <div class="events">
   
                        <div class="evenement cinema">
                            
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

export default Amis;
