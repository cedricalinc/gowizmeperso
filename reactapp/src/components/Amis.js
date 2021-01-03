import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import {Input} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'
import fond from '../images/Slanted-Gradien.svg'
import { CheckCircleOutlined, CloseCircleOutlined, UserAddOutlined,UserDeleteOutlined, SmileOutlined} from '@ant-design/icons';

function Amis(props) {

        const [friendsRequests, setFriendsRequests] = useState([]);
        const [recherche, setRecherche] = useState('');
        const [resultatRecherche, setResultatRecherche] = useState('');
        const [friendsList, setFriendsList] = useState([]);

        // Use Effect pour plusieurs fonctions à l'ouverture du composant
        useEffect(() => {
                // Trouver les demandes d'amis en fournissant l'ID user présent en REDUX
                async function findDemandes() {
                        const data = await fetch('/findDemandes', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                body: `id=${props.idUser}`
                                });
                                
                                var resBD = await data.json();
                                
                                setFriendsRequests(resBD);
                }
                //trouver les amis en fournissant l'ID user présent en REDUX
                const getFriendsList = async () => {
                        const dataFriends = await fetch('/pullFriendsList', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                body: `id=${props.idUser}`
                        })
                        const bodyFriends = await dataFriends.json()
                        setFriendsList(bodyFriends)
                }
                findDemandes();
                getFriendsList();
                // eslint-disable-next-line 
                }, [])
                
        // Use Effect qui se déclenche à la modification de l'état Recherche pour la recherche d'amis, en fournissant la valeur de l'état Recherche
        useEffect(() => {
        async function rechercher() {
                const dataFriends = await fetch('/searchFriends', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                // eslint-disable-next-line 
                        body: `nom=${recherche}`
                        })
                        const bodyFriends = await dataFriends.json()
                        setResultatRecherche(bodyFriends)
        }
        rechercher();
        }, [recherche])

        // Fonction pour mise en forme de données avec une majuscule en première lettre
        function strUcFirst(a) { return (a + '').charAt(0).toUpperCase() + a.substr(1); }

        // Mapping des amis trouvés selon la recherche
        var listeUtilisateurs 
        var functionTrouverAmis = () => {
                if (resultatRecherche !== '') {
                        listeUtilisateurs= resultatRecherche.map((utilisateur,i) => {
                                var estAmi = false
                                var estUser = false
                                var logo

                                // Vérification dans le mapping de l'utlisateur remonté VS l'utilisateur connecté pour lui affecter une icône spécifique
                                if (utilisateur._id === props.idUser) {
                                        estUser= true
                                }

                                // Vérification dans le mapping si l'ID USer est présent dans la liste d'amis de l'ami pour affecter une icône spécifique déjà amis
                                for (var rechercheId of utilisateur.amis) {
                                        if (props.idUser===rechercheId) {
                                                estAmi=true
                                        }
                                }
                                
                                // Si l'utilisateur remonté est l'utilisateur connecté, alors icône smiley, 
                                // sinon si l'utilisateur n'est pas un ami, alors icône d'ajout avec onclick pour demander à devenir amis
                                // sinon icône montrant qu'ils sont déjà amis 
                                if (estUser){
                                        logo= <SmileOutlined style={{ margin:"10px", fontSize:'40px', color:"green"}} />
                                } else if (!estAmi) {
                                        logo=<UserAddOutlined  onClick={() => askToBeFriend(utilisateur._id)} style={{ margin:"10px", fontSize:'40px', color:"green"}} />
                                } else {
                                        logo =<UserDeleteOutlined style={{ margin:"10px", fontSize:'40px', color:"red"}} />
                                }
                                
                        return (  
                                <div key={i} class="amisInvites" style={{height:'150px'}} >
                                        <Link onClick={() => props.addIdAmi(utilisateur.id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/ProfilAmi"><img style={{marginRight:'15px'}} src={utilisateur.avatar} alt=''/></Link>
                                        <div class="flexcolumn" >
                                                <h5>{strUcFirst(utilisateur.prenom)} {strUcFirst(utilisateur.nom)} </h5>
                                                <h6>{strUcFirst(utilisateur.ville)}</h6>
                                                <div className="orgaSortie" >
                                                        {logo}
                                                </div>
                                        </div>
                                </div>)
                 })} else {
                        listeUtilisateurs = <h2 style={{color:"black", margin:'10px'}}>Trouvez vos ami.e.s</h2>     
      }}

      functionTrouverAmis();

        // Fonction pour accepter une demande en transmettant l'ID User du REDUX et l'ID AMIS transmis via le click
        async function accepteDemande(idAmis) {
            const data = await fetch('/accepteDemande', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `id=${props.idUser}&idDemandeur=${idAmis}`
                });
          await data.json();
        }

        // Fonction pour refuser une demande en transmettant l'ID User du REDUX et l'ID AMIS transmis via le click
        async function delDemande(idAmis,idUser) {
                const data = await fetch('/delDemande', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `id=${idUser}&idDemandeur=${idAmis}`
              });
             await data.json();
        }
    
        // Fonction pour demander à devenir ami en transmettant le token du REDUX et l'id AMIS transmis via le click
        const askToBeFriend = async (idAmi) => {
               const data = await fetch('/demandeFriend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `token=${props.token}&idAmi=${idAmi}`
                });
                
                await data.json()
                };

        // Mapping pour les différentes demandes d'amis
        var demandesAmis;
        var mapDemandes = () => {
                if (friendsRequests === undefined) {
                        demandesAmis = <h2>Erreur de chargement</h2>
                } else {
                        demandesAmis =
                        friendsRequests.map((ami, i) => {
                                return (
                                        <div key={i} class="amisInvites" style={{height:'180px'}} >
                                               {/* Accès au profil de l'ami via click sur l'image de l'ami */}
                                                <Link 
                                                        onClick={() => props.addIdAmi(ami._id)}  
                                                        style={{
                                                                textAlign:"center", 
                                                                color:"white", 
                                                                fontSize:"16px"}} 
                                                                to="/ProfilAmi"
                                                >
                                                        <img style={{marginRight:'15px'}} src={ami.avatar} alt=''/>
                                                </Link>

                                                {/* présentation des informations nominatives et icônes d'acceptation / refus */}
                                                <div class="flexcolumn" >
                                                        <h5>{strUcFirst(ami.prenom)} {strUcFirst(ami.nom)} </h5>
                                                        <h6>{strUcFirst(ami.ville)}</h6>
                                                        <div className="orgaSortie" >
                                                                <CheckCircleOutlined onClick={() => accepteDemande(ami._id)} style={{ margin:"10px", fontSize:'40px', color:"green"}} />
                                                                <CloseCircleOutlined onClick={() => delDemande(ami._id,props.idUser)} style={{margin:"10px", fontSize:'40px', color:"red"}}/>
                                                        </div>
                                                </div>
                                        </div>
                                )
                        })
                }
      }
    
      mapDemandes();

      
      // Mapping sur la liste des amis avec gestion de l'erreur
      var ListeAmis;
      if (friendsList.listAmis === undefined) {
        ListeAmis =
          <h2>En cours de chargement</h2>
      } else if (friendsList.listAmis.length > 0) {
        ListeAmis = friendsList.listAmis.map((x, i) => {
                return (
                        <div key={i} class="amisInvites" style={{height:'150px'}} >
                                {/* Accès au profil de l'ami via click sur l'image de l'ami */}
                                <Link onClick={() => props.addIdAmi(x._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/ProfilAmi"><img style={{marginRight:'15px'}} src={x.avatar} alt=''/></Link>
                                {/* Informations nominatives */}
                                <div class="flexcolumn" >
                                        <h5>{strUcFirst(x.prenom)} {strUcFirst(x.nom)} </h5>
                                        <h6>{strUcFirst(x.ville)}</h6>
                                        <div className="orgaSortie" >
                                                <UserDeleteOutlined style={{ margin:"10px", fontSize:'40px', color:"red"}} />
                                        </div>
                                </div>
                        </div>
                )
                })
      } else {
        <h2>Pas encore d'amis enregistrés</h2>
      }



    return (
        <div  style={{ 
            width: "100%",
            height: "100%",
            marginBottom : '20px',
            backgroundImage:`url(${fond})` }}>

                {/* Barre de navigation */}
                <Nav/>
                
                {/* Partie d'affichage des demandes d'amis (titre + mapping) */}
                <div class="events">        
                        <div style={{marginTop : '50px'}}>
                                <h1 class="titrePage">
                                        Demandes d'ami.e.s 
                                </h1>
                        </div> 
                </div>

                <div class="events">
                        <div class="evenement cinema">
                                <div class="list">
                                       {demandesAmis}
                                </div>
                        </div>
                </div>
        
                {/* Partie pour affiche la liste des amis (titre + mapping) */}
                <div style={{marginTop : '50px'}}>
                        <h1 class="titrePage">
                                Mes ami.e.s 
                        </h1>
                </div> 

                <div class="events">
                        <div class="evenement theatre">
                                <div class="list">
                                        {ListeAmis}
                                </div>
                        </div>
                </div>

                {/* Partie pour rechercher des utilisateurs et demander à devenir amis (titre + mapping) */}
                <div style={{marginTop : '50px'}}>
                        <h1 class="titrePage">
                                Rechercher des amis par nom de famille : 
                                <Input style={{ width: '400px', marginLeft:"15px", paddingTop:"10px"}} onChange={(e) => setRecherche(e.target.value)} className="Login-input" placeholder="Nom " value={recherche}/>
                        </h1>
                </div> 

                <div class="events">
                        <div class="evenement concert">
                                <div class="list">
                                        {listeUtilisateurs}
                                </div>
                        </div>
                </div>
        </div>
    
      )
    }

        // Récupération du token et de l'id User depuis le REDUX pour les différentes requêtes    
        function mapStateToProps(state) {
                return {
                        token: state.tokenReducer,
                        idUser: state.idUserReducer,
                }
        }

        // transmission en REDUX de l'ID AMI pour l'envoi sur le bon profil
        function mapDispatchToProps(dispatch) {
                return {
                        addIdAmi: function (idAmi) {
                                dispatch({ type: 'addIdAmi', idAmi })
                        }
                }
        }
      
      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(Amis);
      
