// eslint-disable-next-line
import React,{useState, useEffect,Component} from 'react';

import {Link} from 'react-router-dom'
import '../App.css';
import Nav from './Nav'
import {connect} from 'react-redux'

import fond from '../images/Wavey-Fingerprint.svg'
  

function Planifier(props) {

        const [planInfo, setPlanInfo] = useState({});

        useEffect(() => {
                const getIdUser = async () => {
                  const data = await fetch('/pullUser', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `id=${props.idUser}`
                  })
                  const body = await data.json();
                  // console.log('BODY',body);
                  setPlanInfo(body);
                }
                getIdUser()
                 // eslint-disable-next-line 
              }, [])


              var SortiesDuUser
              var functionSortiesDuUser = () => {
                if (planInfo.mesSorties === null || planInfo.mesSorties === '') {
                        SortiesDuUser = <h2>Aucune sortie prévue</h2>
                      } else if (planInfo.mesSorties !== undefined) {
                  SortiesDuUser = planInfo.mesSorties.map((w, i) => {
                        var titre
                        if (w.nomSortie.length > 20) {
                                titre = <p style={{textAlign:"center"}}>{w.nomSortie.substr(0,20)}...</p>
                        } else {
                                titre = <p style={{textAlign:"center"}}>{w.nomSortie}</p> 
                        }
                    return (          
                        <div key={i} class='carte' style={{ alignContent: 'center', padding:'15px'}}>

                                <Link key={i} onClick={() => props.onAddIdSortie(w._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/sortie"><img src={w.image} alt={w.nomSortie}/></Link>
                                                        
                                <Link onClick={() => props.onAddIdSortie(w._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/sortie">{titre}</Link>
                        </div>
                        )
                        })
                  } else {
                  SortiesDuUser = <h2>Aucune sortie planifiée</h2>
                }
              }
              functionSortiesDuUser();
            
              var FavorisDuUser
              var functionFavorisDuUser = () => {
                if (planInfo.mesLikes === null  || planInfo.mesLikes === '') {
                        FavorisDuUser = <h2>Aucun évènement liké </h2>
                      } else if (planInfo.mesLikes !== undefined) {
                  FavorisDuUser = planInfo.mesLikes.map((x, i) => {
                        var titre
                        if (x.nom.length > 20) {
                                titre = <p style={{textAlign:"center"}}>{x.nom.substr(0,20)}...</p>
                        } else {
                                titre = <p style={{textAlign:"center"}}>{x.nom}</p> 
                        }
                    return (
                        <div key={i} class='carte' style={{ alignContent: 'center', padding:'15px'}}>

                        <Link key={i} onClick={() => props.onAddIdSortie(x._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement"><img src={x.image} alt={x.nomSortie}/></Link>
                                                
                        <Link onClick={() => props.onAddIdEvent(x._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement">{titre}</Link>
                </div>
                    )
                  })
                } else {
                  FavorisDuUser = <h2>Aucun événement liké</h2>
                }
              }
              functionFavorisDuUser();
            
              var FavorisDesAmis
              var functionFavorisDesAmis = () => {
                if (planInfo.LikesDesAmis === null || planInfo.LikesDesAmis === '') {
                        FavorisDesAmis = <h2 >Aucun évènement liké par mes ami.e.s</h2>
                      } else if (planInfo.LikesDesAmis !== undefined) {
                  FavorisDesAmis = planInfo.LikesDesAmis.map((y, i) => {
                        var titre
                        if (y.nom.length > 20) {
                                titre = <p style={{textAlign:"center"}}>{y.nom.substr(0,20)}...</p>
                        } else {
                                titre = <p style={{textAlign:"center"}}>{y.nom}</p> 
                        }
                    return (
                        <div key={i} class='carte' style={{ alignContent: 'center', padding:'15px'}}>

                        <Link key={i} onClick={() => props.onAddIdSortie(y._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement"><img src={y.image} alt={y.nomSortie}/></Link>
                                                
                        <Link onClick={() => props.onAddIdEvent(y._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement">{titre}</Link>
                </div>
                    )
                  })
                } else {
                  FavorisDesAmis = <h2>Aucun événement liké par mes amis</h2>
                }
              }
              functionFavorisDesAmis();
            
              var SortiesDesAmis
              var functionSortieDesAmis = () => {
                console.log("planinfo sorties Amis", planInfo.sortiesAffichees)
            
                if (planInfo.sortiesAffichees === null || planInfo.sortiesAffichees === '') {
                  SortiesDesAmis = <h2 style={{color:"black"}}>Aucune sortie planifiée par mes amis</h2>
                } else if (planInfo.sortiesAffichees !== undefined) {
                  SortiesDesAmis = planInfo.sortiesAffichees.map((z, i) => {
                        var titre
                        if (z.nomSortie.length > 20) {
                                titre = <p style={{textAlign:"center", color:"black"}}>{z.nomSortie.substr(0,20)}...</p>
                        } else {
                                titre = <p style={{textAlign:"center", color:"black"}}>{z.nomSortie}</p> 
                        }
                    return (
                        <div key={i} class='carte' style={{ alignContent: 'center', padding:'15px'}}>

                        <Link key={i} onClick={() => props.onAddIdSortie(z._id)}  style={{height:'200px'}} to="/sortie"><img src={z.image} alt={z.nomSortie}/></Link>
                                                
                        <Link onClick={() => props.onAddIdSortie(z._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/sortie">{titre}</Link>
                </div>
                    )
                  })
                } else {
                  SortiesDesAmis = <h2>Aucune sortie planifiée par mes amis</h2>
                }
              }
              functionSortieDesAmis();

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
                                
                            {SortiesDuUser}
                      
                            </div>
                        </div>

                        
                    </div>

                    <div class="events">
   
                        <div class="evenement theatre">
                        <h2 style={{textAlign:'center'}}>Mes favoris</h2>
                            <div class="list">
                               {FavorisDuUser}
                                </div>
                            </div>
                        </div>

                        <div class="events">
   
                            <div class="evenement concert">
                            <h2 style={{textAlign:'center', color:'black'}}>Sorties de mes ami.e.s</h2>
                                <div class="list">
                                   {SortiesDesAmis}
                                </div>
                            </div>
                        </div>

                        <div class="events">
   
                        <div class="evenement exposition">
                        <h2 style={{textAlign:'center'}}>Favoris de mes ami.e.s</h2>
                            <div class="list">
                                {FavorisDesAmis}
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