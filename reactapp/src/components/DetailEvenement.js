import React,{useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import { List, Avatar} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'
import Picker from 'react-picker'
import fond from '../images/Endless-Constellation2.svg'
import image from '../images/tenet.jpg'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function DetailEvenement(props) {



  
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
                  
           
                  <div class="orgaSortie">
                    <div>
                      <img style={{height: '300px', marginRight:'15px'}} src={image} />
                    </div>

                    <div>
                        <h1 style={{color:'#EFB509'}}><span style={{color:'white'}}>Titre : </span>Il était une fois dans l'ouest </h1>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Description : </span>Muni d'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l'univers crépusculaire de l'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s'agit pas d'un voyage dans le temps, mais d'un renversement temporel…</h2>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Catégorie : </span>film</h2>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Type : </span>Science-Fiction </h2>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Durée : </span>120 minutes </h2>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Lieu : </span> </h2>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>UGC CHATELET LES HALLES</option>
                            <option>UGC BERCY</option>
                            <option>UGC BORDEAUX</option>
                            <option>UGC LILLE</option>
                            
                        </Input>
                        {/* <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Code postal : </span>75001 </h2> */}
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Date début : </span></h2>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
               
                        {/* <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Date fin : </span></h2>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input> */}
                    </div>
                  </div>
                </div>
               
             

                  
                  </div>    
               
        </div>


           
    
      )
    }

    function mapStateToProps(state) {
      return {
        token: state.tokenReducer,
        idUser: state.idUserReducer,
        idEvent: state.idEventReducer,
      }
    }
    
    function mapDispatchToProps(dispatch) {
      return {
        newSortie: function (obj) {
          dispatch({ type: 'newSortie', newSortie: obj })
        },
      }
    }
    
    export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(DetailEvenement);

