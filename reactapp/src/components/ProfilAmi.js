// eslint-disable-next-line
import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
// import { List, Avatar} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'
import fond from '../images/Vanishing-Stripes1.svg'
  

function ProfilAmi(props) {

    const [profilAmi, setProfilAmi] = useState('');
    function strUcFirst(a) { return (a + '').charAt(0).toUpperCase() + a.substr(1); }
       
      useEffect(() => {
        const getUser = async () => {
          const data = await fetch('/pullAmi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `id=${props.idAmi}`
          })
          const body = await data.json();
          // console.log('BODY',body);
          setProfilAmi(body);
        }
        getUser()
         // eslint-disable-next-line 
      }, [])


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
            <Nav/>
          
                
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

    <div class="events">
   
   <div class="evenement cinema">
       <h2 style={{textAlign:'center'}}>Sorties prévues</h2>
       <div class="list">
           {sortiesDuUser}
           
           
          
           </div>
       </div>
   </div>

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
         idAmi: state.idAmiReducer,
      }
      }
      
      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(ProfilAmi);


