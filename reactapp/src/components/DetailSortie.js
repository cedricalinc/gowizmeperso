// eslint-disable-next-line
import React,{useState, useEffect} from 'react';
import '../App.css';
import Nav from './Nav'
import {connect} from 'react-redux'
import fond from '../images/Wavey-Fingerprint.svg'

function DetailSortie(props) {
  const [infoSortie, setInfoSortie] = useState({});
  

  useEffect(() => {
    const getSortieDetails = async () => {
      // console.log(props.idSortie);
      const data = await fetch('/pullSortieDetaillee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${props.idSortie}`
      })
      const body = await data.json()
      // console.log(body)
      setInfoSortie(body);
    }
    getSortieDetails()
     // eslint-disable-next-line 
  }, [])

  var contenu
  var affichageContenu = () => {
    if (infoSortie.sortie !== undefined) { 
      contenu = 
      <div class="orgaSortie">
      <div>
        <img style={{height: '300px', marginRight:'15px'}} src={infoSortie.sortie.image} alt='' />
      </div>


      <div>
        <h1 style={{color:'#EFB509'}}><span style={{color:'white'}}>Sortie : </span>{infoSortie.sortie.nomSortie}</h1>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Lieu de la sortie : </span>{infoSortie.sortie.adresse} </h2>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Code postal : </span>{infoSortie.sortie.cp} </h2>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Type : </span>{infoSortie.sortie.type} </h2>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Date et horaires de début : </span>{infoSortie.sortie.date_debut}</h2>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Date et horaires de fin : </span>{infoSortie.sortie.date_fin}</h2>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Durée : </span>{infoSortie.sortie.duree} minutes </h2>
      </div>
    </div>
     } else {
      contenu = 
      <div class="orgaSortie">
      <div>
        {/* <img style={{height: '300px', marginRight:'15px'}} src={infoSortie.image} /> */}
      </div>


      <div>
        <h1 style={{color:'#EFB509'}}><span style={{color:'white'}}>Sortie : </span>Aucune information</h1>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Lieu de la sortie : </span>Aucune information </h2>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Code postal : </span>Aucune information</h2>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Type : </span>Aucune information</h2>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Date et horaires de début : </span>Aucune information</h2>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Date et horaires de fin : </span>Aucune information</h2>
          <h2 style={{color:'#EFB509'}}><span style={{color:'white'}}>Durée : </span>Aucune information </h2>
      </div>
    </div>
    }
  }
  

  affichageContenu();
  
  function strUcFirst(a) { return (a + '').charAt(0).toUpperCase() + a.substr(1); }

  var amisConvies;
  var mapDemandes = () => {
    if (infoSortie.listAmisSortie === undefined) {
      amisConvies =
        <h2>BUG</h2>
    } else {
      amisConvies =infoSortie.listAmisSortie.map((ami, i) => {
        
          return (
            <div class="amisInvites">
                      <img style={{marginRight:'15px'}} src={ami.avatar} alt=''/>
                      <div class="flexcolumn" >
                      <h5>{strUcFirst(ami.prenom)} {strUcFirst(ami.nom)} </h5>
                                <h6>{strUcFirst(ami.ville)}</h6>
                      </div>
                    </div>
          )
        })
    }
  }

  mapDemandes();

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
                  
                  <h1 style={{color:'#EFB509'}}>Informations de la sortie</h1>
                 {contenu}
                </div>
               
             
                  {/* Bloc pour afficher les amis conviés */}
                  <div style={{margin : '50px'}}>
        
                  <h1 style={{color:'#EFB509'}}>Ami.e.s convié.e.s </h1>
                    
                    {/* <div class="amisInvites">
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
                    </div> */}
{amisConvies}
                  </div>

                  
                  </div>    
               
        </div>


           
    
      )
    }

    function mapStateToProps(state) {
      return {
        idUser: state.idUserReducer,
        token: state.tokenReducer,
        user: state.userReduceur,
        idSortie: state.idSortieReducer,
        currentCity: state.currentCityReducer
      }
    }
    
    export default connect(
      mapStateToProps,
      null
    )(DetailSortie);


