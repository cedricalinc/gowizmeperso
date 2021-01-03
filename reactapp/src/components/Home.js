// eslint-disable-next-line
import React,{useState, useEffect} from 'react';
import {Link } from 'react-router-dom'
import '../App.css';
import Nav from './Nav'
import {connect} from 'react-redux'
import fond from '../images/Cornered-Stairs.svg'
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
  


function Home(props) {
     
        const [eventsList, setEventsList] = useState([]);
        const [refresh,setRefresh] = useState(false)

        //UseEffect pour récupérer l'ensemble des évènements existants
        useEffect(() => {
                const getEvents = async () => {
                        const data = await fetch('/pullEvents')
                        const body = await data.json()
                        setEventsList(body)
                }
                getEvents()
        }, [])

        // Fonction pour liker un évènement en transmettant l'ID USER et L'ID de l'évènement
        var likeEvent = async (idEvent) => { 
                const data = await fetch('/likeEvent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `idUser=${props.idUser}&idEvent=${idEvent}`
              });
              await data.json();
        }

        // Fonction pour unliker un évènement en transmettant l'ID USER et L'ID de l'évènement
        var unlikeEvent = async (idEvent) => { 
                const data = await fetch('/unlikeEvent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `idUser=${props.idUser}&idEvent=${idEvent}`
                });
                await data.json();
                
        }
       
    
        // Mapping des évènements dont le type est film pour afficher les évènements passant au cinéma avec une condition sur la longueur du film
        // eslint-disable-next-line
        var cine = eventsList.map((x,i) => {
                if (x.type === 'film') {
                        var titre
                        if (x.nom.length > 20) {
                                titre = <p style={{textAlign:"center"}}>{x.nom.substr(0,20)}...</p>
                        } else {
                                titre = <p style={{textAlign:"center"}}>{x.nom}</p> 
                        }
                // Selon que le film est aimé ou non, un coeur différent s'affichera, l'un vide pour liké, l'autre rempli pour unliker
                var estAime=false
                for (var likeTransit of x.popularite) {
                        if (likeTransit === props.idUser) {
                                estAime=true
                        }
                } 
                var coeur= <HeartOutlined onClick={() => likeEvent(x._id)} style={{ paddingLeft:"55px", marginLeft: '10px', fontSize: '18px', color: 'black'}} />
                if (estAime===true){
                        coeur= <HeartFilled onClick={() => unlikeEvent(x._id)} style={{ paddingLeft:"55px", marginLeft: '10px', fontSize: '18px', color: '#EFB509'}} />
                }

                return (       
                        <div key={i} class='carte' style={{ alignContent: 'center', padding:'15px'}}>
                                <Link 
                                        onClick={() => props.onAddIdEvent(x._id)}  
                                        style={{
                                                textAlign:"center", 
                                                color:"white", 
                                                fontSize:"16px"}} 
                                                to="/evenement"
                                >
                                        <img src={x.image} alt={x.nom}/>
                                </Link>
                                        
                                <Link 
                                        onClick={() => props.onAddIdEvent(x._id)}  
                                        style={{
                                                textAlign:"center", 
                                                color:"white", 
                                                fontSize:"16px"}} 
                                                to="/evenement"
                                >
                                        {titre}
                                </Link>

                                <p 
                                        style={{
                                                textAlign:"center", 
                                                color:"white", 
                                                fontSize:"16px"}}
                                >
                                        {x.categories[0]}
                                </p>

                                {coeur}
                            
                                
                        </div>)}})


        // Le code est semblable entre films, théatre, concert et exposition sur son découpage.
        // eslint-disable-next-line
        var theatre = eventsList.map((w, i) => {
        if (w.type === 'théâtre') {
                var titre
                if (w.nom.length > 20) {
                        titre = <p style={{textAlign:"center"}}>{w.nom.substr(0,20)}...</p>
                } else {
                        titre = <p style={{textAlign:"center"}}>{w.nom}</p> 
                }
                var estAime=false
                for (var likeTransit of w.popularite) {
                        if (likeTransit === props.idUser) {
                                estAime=true
                        }
                } 
                var coeur= <HeartOutlined onClick={() => likeEvent(w._id)} style={{ paddingLeft:"55px", marginLeft: '10px', fontSize: '18px', color: 'black'}} />
                if (estAime===true){
                        coeur= <HeartFilled onClick={() => unlikeEvent(w._id)} style={{ paddingLeft:"55px", marginLeft: '10px', fontSize: '18px', color: '#EFB509'}} />
                }
        return (       
                <div key={i} class='carte' style={{ alignContent: 'center', padding:'15px'}}>
                        <Link onClick={() => props.onAddIdEvent(w._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement"><img src={w.image} alt={w.nom}/></Link>
                                <Link onClick={() => props.onAddIdEvent(w._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement">{titre}</Link>
                                <p style={{textAlign:"center", color:"white", fontSize:"16px"}}>{w.categories[0]}</p>
                        {coeur}
                </div>)}})


        // Le code est semblable entre films, théatre, concert et exposition sur son découpage.
        // eslint-disable-next-line
        var expos = eventsList.map((y, i) => {
        if (y.type === 'exposition') {
                var titre
                if (y.nom.length > 20) {
                        titre = <p style={{textAlign:"center"}}>{y.nom.substr(0,20)}...</p>
                } else {
                        titre = <p style={{textAlign:"center"}}>{y.nom}</p> 
                }
                var estAime=false
                for (var likeTransit of y.popularite) {
                        if (likeTransit === props.idUser) {
                                estAime=true
                        }
                } 
                var coeur= <HeartOutlined onClick={() => likeEvent(y._id)} style={{ paddingLeft:"55px", marginLeft: '10px', fontSize: '18px', color: 'black'}} />
                if (estAime===true){
                        coeur= <HeartFilled onClick={() => unlikeEvent(y._id)} style={{ paddingLeft:"55px", marginLeft: '10px', fontSize: '18px', color: '#EFB509'}} />
                }
        return (       
                <div key={i} class='carte' style={{ alignContent: 'center', padding:'15px'}}>
                                <Link onClick={() => props.onAddIdEvent(y._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement"><img src={y.image} alt={y.nom}/></Link>
                                
                                <Link onClick={() => props.onAddIdEvent(y._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement">{titre}</Link>
                                <p style={{textAlign:"center", color:"white", fontSize:"16px"}}>{y.categories[0]}</p>
                        {coeur}
                </div>)}})
        // eslint-disable-next-line


        // Le code est semblable entre films, théatre, concert et exposition sur son découpage.
        var concert = eventsList.map((z, i) => {
        if (z.type === 'concert') {
        var titre
                if (z.nom.length > 20) {
                        titre = <p style={{textAlign:"center"}}>{z.nom.substr(0,20)}...</p>
                } else {
                        titre = <p style={{textAlign:"center"}}>{z.nom}</p> 
                }
                var estAime=false
                for (var likeTransit of z.popularite) {
                        if (likeTransit === props.idUser) {
                                estAime=true
                        }
                } 
                var coeur= <HeartOutlined onClick={() => likeEvent(z._id)} style={{ paddingLeft:"55px", marginLeft: '10px', fontSize: '18px', color: 'black'}} />
                if (estAime===true){
                        coeur= <HeartFilled onClick={() => unlikeEvent(z._id)} style={{ paddingLeft:"55px", marginLeft: '10px', fontSize: '18px', color: 'red'}} />
                }
        return (       
                <div key={i} class='carte' style={{ alignContent: 'center', padding:'15px'}}>
                        <Link onClick={() => props.onAddIdEvent(z._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement"><img src={z.image} alt={z.nom}/></Link>
                                
                                <Link onClick={() => props.onAddIdEvent(z._id)}  style={{textAlign:"center", color:"black", fontSize:"16px"}} to="/evenement">{titre}</Link>
                                <p style={{textAlign:"center", color:"black", fontSize:"16px"}}>{z.categories[0]}</p>
                        {coeur}
                </div>)}})

    return (
        <div  style={{ 
            width: "100%",
            height: "100%",
            marginBottom : '20px',
            backgroundImage:`url(${fond})` }}>
 
                {/* Barre de navigation */}
                <Nav/>
 
                <div>
                        <div style={{marginTop : '50px'}}>
                                <h1 class="titrePage">
                                Evènements à l'affiche 
                                </h1>
                        </div>

                        {/* Scroll latéral des évènements au cinéma */}
                        <div class="events">
                                <div class="evenement cinema">
                                        <h2 style={{textAlign:'center'}}>Cinéma</h2>
                                        <div class="list">
                                                {cine}
                                        </div>
                                </div>
                        </div>


                        {/* Scroll latéral des évènements au théâtre */}
                        <div class="events">
        
                                <div class="evenement theatre">
                                        <h2 style={{textAlign:'center'}}>Théâtre</h2>
                                        <div class="list">
                                                {theatre} 
                                        </div>
                                </div>
                        </div>


                        {/* Scroll latéral des évènements en concert */}
                        <div class="events">

                                <div class="evenement concert">
                                        <h2 style={{textAlign:'center', color:'black'}}>Concerts</h2>
                                        <div class="list">
                                                {concert}
                                        </div>
                                </div>
                        </div>


                        {/* Scroll latéral des évènements expo */}
                        <div class="events">
                                <div class="evenement exposition">
                                        <h2 style={{textAlign:'center'}}>Expositions</h2>
                                        <div class="list">
                                                {expos}        
                                        </div>
                                </div>
                        </div>
                        
               
                </div>

        </div>
    
      )
    }

    // Envoi en REDUX de l'ID Event pour afficher la page détaillée
    function mapDispatchToProps(dispatch) {
        return {
          onAddIdEvent: function (idEvent) {
            dispatch({ type: 'addIdEvent', idEvent: idEvent });
          },
        }
      }
      
      // Récupéation de l'ID User pour la gestion des likes
      function mapStateToProps(state) {
        return {
                idUser: state.idUserReducer
        }
      }
      
      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(Home);


