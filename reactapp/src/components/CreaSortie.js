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

  const [titre, setTitre] = useState(props.newSortie.nomSortie)
  const [adresse, setAdresse] = useState(props.newSortie.adresse)
  const [dateEvent, setDateEvent] = useState(props.newSortie.date_debut)
  const [dateFin, setDateFin] = useState('')
  const [duree, setDuree] = useState(props.newSortie.duree)
  const [cp, setCp] = useState('')
  const [type, setType] = useState('amis')
  const [listeInvites, setListeInvites] = useState([])

  const [friendsList, setFriendsList] = useState([]);

  function strUcFirst(a) { return (a + '').charAt(0).toUpperCase() + a.substr(1); }

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

                                    
                    var inviteFriends = (idAmi) => {
                      setListeInvites([...listeInvites, idAmi])
                    }

                    var ListeAmis;
                    if (friendsList.listAmis === undefined) {
                      ListeAmis =
                        <h2>En cours de chargement</h2>
                    } else if (friendsList.listAmis.length > 0) {
                      ListeAmis = friendsList.listAmis.map((x, i) => {
                        var logo= <UserAddOutlined  onClick={() => inviteFriends(x._id)} style={{ margin:"10px", fontSize:'40px', color:"green"}} />
                        if (listeInvites.length>0){
                        for (var dejaInvite of listeInvites) {
                          if (dejaInvite === x._id) {
                            logo = <LikeOutlined   style={{ margin:"10px", fontSize:'40px', color:"green"}} />

                          } }
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

             
              
              

  var createSortie = async () => {
    const data = await fetch('/addSortie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `evenementLie=${props.idEvent}&organisateur=${props.idUser}&image=${props.newSortie.image}&nomSortie=${titre}&adresse=${adresse}&date_debut=${dateEvent}&date_fin=${dateFin}&cp=${cp}&type=${type}&duree=${duree}&part=${listeInvites}`
    })
    const body = await data.json();
    console.log(body)
    // console.log(body.sortie)
    props.onAddIdSortie(body._id)
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
                          <img style={{height: '300px', marginRight:'15px'}} src={props.newSortie.image} alt=''/>
                        </div>
    
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

    function mapStateToProps(state) {
      return {
        token: state.tokenReducer,
        user: state.userReduceur,
        idEvent: state.idEventReducer,
        idUser: state.idUserReducer,
        newSortie: state.newSortieReducer,
      }
    }
    
    
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

