import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import { List, Avatar} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'

import fond from '../images/Vanishing-Stripes1.svg'
import ced from '../images/avatar.svg'
  

function Profil() {

    return (
        <div  style={{ 
            width: "100%",
            height: "100%",
            marginBottom : '20px',
            backgroundImage:`url(${fond})` }}>
            <Nav/>
          
                
              <div >
                <div style={{marginTop : '50px'}}>
                    <h1 class="titrePage">
                        Cédric ALINC
                    </h1>
                    <h4 class="titrePage">
                        Asnières-sur-Seine
                    </h4>
                </div>
                <div  class='center-image' style={{marginBottom : '30px'}}>
                    <img src={ced}  />
                </div>
                </div>

    <div class="events">
   
   <div class="evenement cinema">
       <h2 style={{textAlign:'center'}}>Sorties prévues</h2>
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
   <h2 style={{textAlign:'center'}}>Favoris</h2>
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

export default Profil;
