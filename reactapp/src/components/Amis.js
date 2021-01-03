import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import {Input} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'
import fond from '../images/Slanted-Gradien.svg'
import { CheckCircleOutlined, CloseCircleOutlined, UserAddOutlined,UserDeleteOutlined, SmileOutlined} from '@ant-design/icons';

 


// <CheckOutlined />
//<CloseOutlined />
function Amis(props) {

        

        const [friendsRequests, setFriendsRequests] = useState([]);
        
        const [recherche, setRecherche] = useState('');
        const [resultatRecherche, setResultatRecherche] = useState('');

        
        const [friendsList, setFriendsList] = useState([]);
        useEffect(() => {
                async function findDemandes() {
                const data = await fetch('/findDemandes', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      body: `id=${props.idUser}`
                    });
                        
                    var resBD = await data.json();
                  
                    setFriendsRequests(resBD);
                }
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
       
           
        function strUcFirst(a) { return (a + '').charAt(0).toUpperCase() + a.substr(1); }

     

        var listeUtilisateurs 
        var functionTrouverAmis = () => {
        if (resultatRecherche !== '') {
        listeUtilisateurs= resultatRecherche.map((utilisateur,i) => {

                var estAmi = false
                var estUser = false
                var logo

                if (utilisateur._id === props.idUser) {
                        estUser= true
                }

                for (var rechercheId of utilisateur.amis) {
                        if (props.idUser===rechercheId) {
                                estAmi=true
                        }
                }

                if (estUser){
                        logo= <SmileOutlined style={{ margin:"10px", fontSize:'40px', color:"green"}} />
                } else if (!estAmi) {
                        logo=<UserAddOutlined  onClick={() => askToBeFriend(utilisateur._id)} style={{ margin:"10px", fontSize:'40px', color:"green"}} />
                } else {
                        logo =<UserDeleteOutlined style={{ margin:"10px", fontSize:'40px', color:"red"}} />
                }
        return (  <div key={i} class="amisInvites" style={{height:'150px'}} >
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


      async function accepteDemande(idAmis) {
            const data = await fetch('/accepteDemande', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `id=${props.idUser}&idDemandeur=${idAmis}`
          });
          await data.json();
          
        }

        async function delDemande(idAmis,idUser) {
                const data = await fetch('/delDemande', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `id=${idUser}&idDemandeur=${idAmis}`
              });
             await data.json();
              
            }
    


       const askToBeFriend = async (idAmi) => {
               const data = await fetch('/demandeFriend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `token=${props.token}&idAmi=${idAmi}`
                });
                
                await data.json()
                };


      var demandesAmis;
      var mapDemandes = () => {
        if (friendsRequests === undefined) {
          demandesAmis =
            <h2>BUG</h2>
        } else {
          demandesAmis =
            friendsRequests.map((ami, i) => {
              // console.log("AMI+>>>>>>>>>>>",ami)
   
              return (
                <div key={i} class="amisInvites" style={{height:'180px'}} >
                <Link onClick={() => props.addIdAmi(ami._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/ProfilAmi"><img style={{marginRight:'15px'}} src={ami.avatar} alt=''/></Link>

                
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

      
    
      var ListeAmis;
      if (friendsList.listAmis === undefined) {
        ListeAmis =
          <h2>En cours de chargement</h2>
      } else if (friendsList.listAmis.length > 0) {
        ListeAmis = friendsList.listAmis.map((x, i) => {
          console.log("++++++++++AMIS+++++++++++++++++", x)
          return (
                <div key={i} class="amisInvites" style={{height:'150px'}} >
                            <Link onClick={() => props.addIdAmi(x._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/ProfilAmi"><img style={{marginRight:'15px'}} src={x.avatar} alt=''/></Link>
                
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
            <Nav/>
          
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

    function mapStateToProps(state) {
        return {
          token: state.tokenReducer,
          idUser: state.idUserReducer,
          }
      }
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
      
