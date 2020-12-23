import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import {Input,Button,DatePicker, Space} from 'antd';
import moment from 'moment';
import Nav from './Nav'
import {connect} from 'react-redux'
import fond from '../images/Wavey-Fingerprint.svg'
import image from '../images/tenet.jpg'

function CreaSortie() {

  const [titre, setTitre] = useState('')
  const [adresse, setAdresse] = useState('')
  const [date, setDate] = useState('')


// GESTION DU DATEPICKER D'ANTD 
const { RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}






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
                 
                    
                <div className="orgaSortie">
              
                  {/* Bloc pour la photo avec les infos de la sortie */}
                    <div style={{margin: '50px', marginRight:'100px'}}>
                      
                      <h1 style={{color:'#EFB509'}}>Informations de la sortie</h1>
                      <div class="orgaSortie">
                        <div>
                          <img style={{height: '300px', marginRight:'15px'}} src={image} />
                        </div>
    
                        <div>
                        <Input onChange={(e) => setTitre(e.target.value)} className="Login-input" placeholder="Titre de la sortie" />
                          {/* <h2 style={{color:'white'}}>Type : </h2> */}
                          <Input onChange={(e) => setAdresse(e.target.value)} className="Login-input" placeholder="Adresse" />
                          {/* <h2 style={{color:'white'}}>Code postal : </h2> */}
                          <Space direction="vertical" size={12}>
                            <DatePicker
                              format="YYYY-MM-DD HH:mm:ss"
                              disabledDate={disabledDate}
                              disabledTime={disabledDateTime}
                              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                            />
                          
                          </Space> 
                        </div>
                      </div>
                    </div>
                   
                 
                      {/* Bloc pour afficher les amis conviés */}
                      <div style={{margin : '50px'}}>
            
                      <h1 style={{color:'#EFB509'}}>Ami.e.s à convier </h1>
                      
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

export default CreaSortie;
