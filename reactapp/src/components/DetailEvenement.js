// eslint-disable-next-line
import React,{useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import Nav from './Nav'
import {connect} from 'react-redux'
import fond from '../images/Endless-Constellation2.svg'

function DetailEvenement(props) {

  const [evenement, setEvenement] = useState({})
  const [lieuEvenementSansDoublons, setLieuEvenementSansDoublons] = useState([]);
  const [selectLieuEvenement, setSelectLieuEvenement] = useState('');
  const [dateEvenement, setDateEvenement] = useState([]);
  const [selectDateEvenement, setSelectDateEvenement] = useState('');

  var lieuTransit = [];
  var uniqueset;
  var backarray;
  var horaireTransit = [];
  var dates;

  // Use Effect pour récupérer les données de l'évènement sélectionné via la transmission depuis le REDUX de l'Id evènement
  useEffect(() => {
    const findEvent = async () => {
        const data = await fetch('/pullEventDetaille', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: 'id=' + props.idEvent
      });
      const body = await data.json()
      setEvenement(body);
      // eslint-disable-next-line 
      // récupération des lieux et dédoublonnage
      backarray = recupLieu(body);
      setLieuEvenementSansDoublons(backarray);
      setSelectLieuEvenement(backarray[0])
    };
    findEvent();
  }, [])

  // UseEffect qui, à la modification du lieu sélectionné par l'utilisateur, vide l'état d'horaire sélectionné et met à jour les horaires proposés selon le lieu sélectionné
  useEffect(() => {
    async function horairesEvent() {
      setSelectDateEvenement('');
      horaires()
    };
    horairesEvent();
     // eslint-disable-next-line 
  }, [selectLieuEvenement])

  // Fonction utilisée dans le UseEFfect pour récupérer les lieux de l'évènement et dédoublonner ces lieux
  function recupLieu(event) {
    var backy = [];
    if (event.lieux_dates) {
      for (var i = 0; i < event.lieux_dates.length; i++) {
        lieuTransit.push(event.lieux_dates[i].salle)
      }
      // dédoublonnage 
      uniqueset = new Set(lieuTransit)
      backy = [...uniqueset];
    }
    return backy;
  }

  // mapping de la liste des lieux 
  var lieux=lieuEvenementSansDoublons.map((lieu,i) => {
    return (<option  key={i} value={lieu}>{lieu}</option>)
  })

  // Fonction pour afficher les horaires à proposer selon le lieu choisi par l'utilisateur avec mise en forme des horaires
  var horaires = () => {
    // MISE EN FORME
    var dateFormat = function (date) {
      var newDate = new Date(date);
      if (newDate.getMinutes()<10) {
        var format = newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear() + ' - ' + newDate.getHours() + 'h0' + newDate.getMinutes();
      } else {
        format = newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear() + ' - ' + newDate.getHours() + 'h' + newDate.getMinutes();
      }
      return format;
    }
    // Si le lieu de la boucle correspond au lieu sélectionné, alors push de l'horaire de début
    if (evenement.lieux_dates) {
      for (var i = 0; i < evenement.lieux_dates.length; i++) {
        if (selectLieuEvenement === evenement.lieux_dates[i].salle) {
          horaireTransit.push(dateFormat(evenement.lieux_dates[i].date_debut));
        }
      }
    }
    setDateEvenement(horaireTransit);
  }

  // mapping des horaires poussés dans la fonction précédente
  if (dateEvenement.length > 0) {
    dates = dateEvenement.map((date, i) => {
      return (<option key={i} value={date}>{date}</option>)
     
    });
  }

  // Fonction pour afficher un bouton de création si les lieux et dates sont choisis
  var boutonCreer;
  var afficherBouton = () => {
    if (selectLieuEvenement !== '' && selectDateEvenement !== '') {
      boutonCreer= 
        <Link to="/creation"
        style={{
          width: '100%',
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: (selectLieuEvenement !== '' && selectDateEvenement !== '') ? "#D70026" : "#16253D",
        }}
        onClick={() => {
          if (selectLieuEvenement !== '' && selectDateEvenement !== '') {
            props.newSortie({
              evenementLie: props.idEvent,
              organisateur: props.idUser,
              nomSortie: evenement.nom,
              image: evenement.image,
              adresse: selectLieuEvenement,
              date_debut: selectDateEvenement,
              duree: evenement.lieux_dates[0].duree
            });
          
          }
        }}
      >
        <h2 style={{ width: "300px",textAlign:"center", backgroundColor:"red", color: 'white', borderRadius: "10px", padding: "15px", fontWeight: 'bold' }}>Créer une sortie</h2>
      </Link>
      
    }
  }
 
  afficherBouton();
  
  // fonction pour afficher un titre s'il n'y a qu'un lieu proposé (permet d'éviter un effet de bord de la liste déroulante) 
  var lieuxaffiches
  var afficherlieux = ()=> {
    if (lieuEvenementSansDoublons.length > 1) {
      lieuxaffiches = 
      <option selected value="titre">Choix du lieu :</option>
  }} 
  afficherlieux()

    return (
      <div  style={{ 
        width: "100vw",
        height: "100vh",
        marginBottom : '20px',
        backgroundImage:`url(${fond})` }}>
        
        {/* Barre de navigation */}
        <Nav/>

        <div class="orgaSortie">
          
              {/* Bloc pour la photo avec les infos de la sortie */}
                <div style={{margin: '50px', marginRight:'100px'}}>
                             
                  <div class="orgaSortie">
                    {/* affichage de l'affiche */}
                    <div>
                      <img style={{height: '500px', marginRight:'15px'}} src={evenement.image} alt='' />
                    </div>
                    
                    {/* affichage des informations de l'évènement */}
                    <div>
                        <h1 style={{color:'#EFB509'}}><span style={{color:'white'}}>Titre : </span>{evenement.nom} </h1>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Description : </span>{evenement.description} </h2>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Type : </span>{evenement.type} </h2>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Catégorie : </span>{evenement.categories}</h2>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Durée : </span>{(evenement && evenement.lieux_dates && evenement.lieux_dates.length > 0) ? evenement.lieux_dates[0].duree : ''} minutes </h2>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Lieu : </span> </h2>
                      
                      {/* Liste déroulante des lieux */}
                          <select style={{ marginBottom: "15px",width: "500px", fontSize: "25px",textAlign:"center"}} value={lieuEvenementSansDoublons} onChange={e => setSelectLieuEvenement(e.currentTarget.value)}
                              >
                              {lieuxaffiches}
                              {lieux}
                              </select>
                      
                      {/* Liste déroulante des horaires */}
                       <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Date début : </span></h2>
                        <select  style={{ marginBottom: "15px", width: "500px", fontSize: "25px",textAlign:"center"}} value={dates} onChange={e => setSelectDateEvenement(e.currentTarget.value)}
                              >
                                 <option selected  value="titre">Choix de la date :</option>
                              {dates}
                              </select>

                      {/* Affichage des choix effectués par l'utilisateur */}
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Votre choix de lieu : </span>{selectLieuEvenement} </h2>
                        <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Votre choix de date : </span>{selectDateEvenement} </h2>
                      {/* Bouton pour créer la sortie */}
                        {boutonCreer}
                    </div>
                    
                  </div>
                </div>
               
             

                  
                  </div>    
               
        </div>


           
    
      )
    }

    // Récupération depuis le redux de l'id USER et de l'ID Event pour stockage par la suite dans le reducer NewSortie
    function mapStateToProps(state) {
      return {
        idUser: state.idUserReducer,
        idEvent: state.idEventReducer,
      }
    }
    
    // Transmission de l'ensemble des informations pour que lu'tilisateur, lors de la création de la sortie, possède des champs présaisis
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

