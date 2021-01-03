// eslint-disable-next-line
import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import {Input,} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'
import fond from '../images/Wavey-Fingerprint.svg'
import { UserAddOutlined,LikeOutlined} from '@ant-design/icons';


function CreaSortie(props) {

  // Pour certains états, les données initiales sont celles en Redux
  const [titre, setTitre] = useState(props.newSortie.nomSortie)
  const [adresse, setAdresse] = useState(props.newSortie.adresse)
  const [dateEvent, setDateEvent] = useState(props.newSortie.date_debut)
  const [dateFin, setDateFin] = useState('')
  const [duree, setDuree] = useState(props.newSortie.duree)
  const [cp, setCp] = useState('')
  const [type, setType] = useState('amis')
  const [listeInvites, setListeInvites] = useState([])
  const [friendsList, setFriendsList] = useState([]);

  // Fonction pour mise en forme de données avec une majuscule en premiere lettre
  function strUcFirst(a) { return (a + '').charAt(0).toUpperCase() + a.substr(1); }

  // Use Effect en fournissant l'id User du redux pour récupérer la liste des amis afin de les afficher dans les amis à inviter
  useEffect(() => {
    const getFriendsList = async () => {
            const dataFriends = await fetch('/pullFriendsList', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: `id=${props.idUser}`
            })
            const bodyFriends = await dataFriends.json()
            setFriendsList(bodyFriends)
          }
      getFriendsList();
        // eslint-disable-next-line 
        }, [])

  // Fonction pour ajouter l'id AMI à l'état listInvites                      
  var inviteFriends = (idAmi) => {
    setListeInvites([...listeInvites, idAmi])
  }

  // Mapping avec gestion de l'erreur pour afficher la liste des amis et statut de l'invitation 
 
  var ListeAmis;
  if (friendsList.listAmis === undefined) {
    ListeAmis =
      <h2>En cours de chargement</h2>
  } else if (friendsList.listAmis.length > 0) {
    ListeAmis = friendsList.listAmis.map((x, i) => {
       // si non invité, icône d'ajout, si invité, icône de pouce 
      var logo= <UserAddOutlined  onClick={() => inviteFriends(x._id)} style={{ margin:"10px", fontSize:'40px', color:"green"}} />
      if (listeInvites.length>0){
        for (var dejaInvite of listeInvites) {
          if (dejaInvite === x._id) {
            logo = <LikeOutlined   style={{ margin:"10px", fontSize:'40px', color:"green"}} />
          } 
        }
      }
      return (
        <div key={i} class="amisInvites">
          {logo}
          <img style={{marginRight:'15px'}} src={x.avatar} alt='' />
          <div class="flexcolumn" >
            <h5>{strUcFirst(x.prenom)} {strUcFirst(x.nom)} </h5>
            <h6>{strUcFirst(x.ville)}</h6>
          </div>
        </div>
      )
    })
  } else {
    <h2>Pas encore d'amis enregistrés</h2>
  }

  // Fonction pour créer la sortie en envoyant au Back les éléments nécessaires à la création d'une sortie, selon le modèle
  var createSortie = async () => {
    const data = await fetch('/addSortie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `evenementLie=${props.idEvent}&organisateur=${props.idUser}&image=${props.newSortie.image}&nomSortie=${titre}&adresse=${adresse}&date_debut=${dateEvent}&date_fin=${dateFin}&cp=${cp}&type=${type}&duree=${duree}&part=${listeInvites}`
    })
    const body = await data.json();
    console.log(body)
    props.onAddIdSortie(body._id)
     }


    return (
        <div  style={{ 
            width: "100vw",
            height: "100vh",
            marginBottom : '20px',
            backgroundImage:`url(${fond})` }}>
          
          {/* Barre de navigation */}
          <Nav/>
    

              
          <div className="orgaSortie">
        
            {/* Bloc pour la photo avec les infos de la sortie */}
            <div style={{margin: '50px', marginRight:'100px'}}>
              <h1 style={{color:'#EFB509'}}>Informations de la sortie</h1>
              <div class="orgaSortie">
                {/* Image de la sortie */}
                <div>
                  <img style={{height: '300px', marginRight:'15px'}} src={props.newSortie.image} alt=''/>
                </div>
                {/* Informations de la sortie */}
                <div>
                  <h2 style={{color:'#EFB509'}}>Nom de la sortie : </h2>
                  <Input onChange={(e) => setTitre(e.target.value)} className="Login-input" placeholder="Titre de la sortie" value={titre}/>
                  <h2 style={{color:'#EFB509'}}>Lieu de la sortie : </h2>
                  <Input onChange={(e) => setAdresse(e.target.value)} className="Login-input" placeholder="Adresse" value={adresse} />
                  <h2 style={{color:'#EFB509'}}>Code postal : </h2>
                  <Input onChange={(e) => setCp(e.target.value)} className="Login-input" placeholder="92600" value={cp}/>
                  <h2 style={{color:'#EFB509'}}>Date et horaires de début : </h2>
                  <Input onChange={(e) => setDateEvent(e.target.value)} className="Login-input" placeholder="date début" value={dateEvent} />
                  <h2 style={{color:'#EFB509'}}>Durée en minutes : </h2>
                  <Input onChange={(e) => setDuree(e.target.value)} className="Login-input" placeholder="durée" value={duree}/>
                  <h2 style={{color:'#EFB509'}}>Date et horaires de fin : </h2>
                  <Input onChange={(e) => setDateFin(e.target.value)} className="Login-input" placeholder='19/12/2020 - 19h00' value={dateFin}/>
                  <h2 style={{color:'#EFB509'}}>Type de sortie (publique, amis, privée): </h2>
                  <Input onChange={(e) => setType(e.target.value)} className="Login-input" placeholder="durée" value={type}/>
                  {/* Bouton de la création de la sortie */}
                  <Link to="/sortie"
                    style={{
                      width: '100%',
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: "#D70026" 
                    }}
                    onClick={() => createSortie()}
                  >
                    <h2 style={{ width: "300px",textAlign:"center", backgroundColor:"red", color: 'white', borderRadius: "10px", padding: "15px", fontWeight: 'bold' }}>Créer la sortie</h2>
                  </Link>
                </div>
              </div>
            </div>
                   
            {/* Bloc pour afficher les amis conviés */}
            <div style={{margin : '50px'}}>
              <h1 style={{color:'#EFB509'}}>Ami.e.s à convier </h1>
              {ListeAmis}
            </div>
          </div>    
        </div>
      )
    }

    // Récupération du REDUX des données de la future sortie pour préremplir les données de la création et idEvent et IdUser pour remplir la sortie en BDD
    function mapStateToProps(state) {
      return {
        idEvent: state.idEventReducer,
        idUser: state.idUserReducer,
        newSortie: state.newSortieReducer,
      }
    }
    
    // Ajout de l'id Sortie nouvellement créée afin de se rendre directement sur la sortie concernée
    function mapDispatchToProps(dispatch) {
      return {
        onAddIdSortie: function (idSortie) {
          dispatch({ type: 'addIdSortie', idSortie: idSortie });
        }
      }
    }
    
    export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(CreaSortie);

