// eslint-disable-next-line
import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import Nav from './Nav'
import {connect} from 'react-redux'
import fond from '../images/Vanishing-Stripes1.svg'
  

function ProfilAmi(props) {

    const [profilAmi, setProfilAmi] = useState('');

    // Fonction pour mettre une majuscule en début de prénom/nom/ville  
    function strUcFirst(a) { return (a + '').charAt(0).toUpperCase() + a.substr(1); }
       
    // Va récupérer les informations du profil Ami transmis via son id stocké en reducer
    useEffect(() => {
      const getUser = async () => {
        const data = await fetch('/pullAmi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `id=${props.idAmi}`
        })
        const body = await data.json();
        setProfilAmi(body);
      }
      getUser()
        // eslint-disable-next-line 
    }, [])

    // Fonction pour maper les sorties prévues de l'ami avec mise en forme du titre selon nb caractères du titre
      var sortiesDuUser
      var functionSortiesDuUser = () => {
        if (profilAmi.sorties === null  || profilAmi.sorties === '') {
          sortiesDuUser = <h2>Aucune sortie prévue </h2>
        } else if (profilAmi.sorties !== undefined) {
            sortiesDuUser = profilAmi.sorties.map((x, i) => {
              var titre
              if (x.nomSortie.length > 20) {
                      titre = <p style={{textAlign:"center"}}>{x.nomSortie.substr(0,20)}...</p>
              } else {
                      titre = <p style={{textAlign:"center"}}>{x.nomSortie}</p> 
              }
                return (
                    <div key={i} class='carte' style={{ alignContent: 'center', padding:'15px'}}>
                      <Link key={i} onClick={() => props.onAddIdSortie(x._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement"><img src={x.image} alt={x.nomSortie}/></Link>
                      <Link onClick={() => props.onAddIdEvent(x._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement">{titre}</Link>
                    </div>
                )
            })
        } else {
          sortiesDuUser = <h2>Aucune sortie prévue</h2>
        }
      }
      functionSortiesDuUser(); 


     // Fonction pour maper les sorties prévues de l'ami avec mise en forme du titre selon nb caractères du titre
      var favorisDuUser
      var functionFavorisDuUser = () => {
        if (profilAmi.likes === null  || profilAmi.likes === '') {
          favorisDuUser = <h2>Aucun évènement liké </h2>
        } else if (profilAmi.likes !== undefined) {
            favorisDuUser = profilAmi.likes.map((x, i) => {
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
          favorisDuUser = <h2>Aucun événement liké</h2>
        }
      }
      functionFavorisDuUser(); 


    return (
      <div  style={{ 
          width: "100%",
          height: "100%",
          marginBottom : '20px',
          backgroundImage:`url(${fond})` }}>

      {/* Barre de navigation */}
      <Nav/>
    
      {/* Informations nominatives de l'ami  */}
      <div >
        <div style={{marginTop : '50px'}}>
            <h1 class="titrePage">
              {(profilAmi && profilAmi.user && profilAmi.user.prenom) ? strUcFirst(profilAmi.user.prenom) : ''} {(profilAmi && profilAmi.user && profilAmi.user.nom) ? strUcFirst(profilAmi.user.nom) : ''}
            </h1>
            <h4 class="titrePage">
              {(profilAmi && profilAmi.user && profilAmi.user.ville) ? strUcFirst(profilAmi.user.ville) : ''}
            </h4>
        </div>
        <div  class='center-image' style={{marginBottom : '30px'}}>
            <img src={(profilAmi && profilAmi.user && profilAmi.user.avatar) ? profilAmi.user.avatar : ''} alt='' />
        </div>
      </div>

      {/* Liste des sorties prévues en scroll latéral */}
      <div class="events">
        <div class="evenement cinema">
            <h2 style={{textAlign:'center'}}>Sorties prévues</h2>
            <div class="list">
                {sortiesDuUser}
            </div>
        </div>
      </div>

      {/* Liste des likes en scroll latéral */}

      <div class="events">
          <div class="evenement theatre">
            <h2 style={{textAlign:'center'}}>Favoris</h2>
            <div class="list">
              {favorisDuUser}
            </div>
          </div>
        </div>

    </div>
    
      )
    }

    // Envoi des ID evenement et sortie en Redux pour faire le lien vers les pages détaillées

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
    
    // Récupération de l'id Ami dans le Redux pour afficher les informations de l'ami à afficher
    
    function mapStateToProps(state) {
        return {
         idAmi: state.idAmiReducer,
      }
      }
      
      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(ProfilAmi);


