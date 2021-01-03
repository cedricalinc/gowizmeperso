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
     
        useEffect(() => {
                const getEvents = async () => {
                  const data = await fetch('/pullEvents')
                  const body = await data.json()
                  setEventsList(body)
                }
                getEvents()
              }, [])

        useEffect(() => {
        console.log("REFRESH")
                }, [refresh])


        var likeEvent = async (idEvent) => { 
                setRefresh(!refresh)
                const data = await fetch('/likeEvent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `idUser=${props.idUser}&idEvent=${idEvent}`
              });
              await data.json();
             
            }

        var unlikeEvent = async (idEvent) => { 
                setRefresh(!refresh)
                const data = await fetch('/unlikeEvent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `idUser=${props.idUser}&idEvent=${idEvent}`
                });
                await data.json();
                
        }
       
    

        // eslint-disable-next-line
                var cine = eventsList.map((x,i) => {
                        if (x.type === 'film') {
                                var titre
                                if (x.nom.length > 20) {
                                        titre = <p style={{textAlign:"center"}}>{x.nom.substr(0,20)}...</p>
                                } else {
                                        titre = <p style={{textAlign:"center"}}>{x.nom}</p> 
                                }
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
                                        <Link onClick={() => props.onAddIdEvent(x._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement"><img src={x.image} alt={x.nom}/></Link>
                                         
                                        <Link onClick={() => props.onAddIdEvent(x._id)}  style={{textAlign:"center", color:"white", fontSize:"16px"}} to="/evenement">{titre}</Link>
                                        <p style={{textAlign:"center", color:"white", fontSize:"16px"}}>{x.categories[0]}</p>
                                        {coeur}
                                        {/* <HeartFilled style={{ paddingLeft:"55px", marginLeft: '10px', fontSize: '18px', color: '#EFB509'}} /> */}
                                        {/* <Icon type="message" style={{ fontSize: '16px', color: '#08c' }} theme="outlined" /> */}
                                        
                                </div>)}})
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
             <Nav/>
 
            <div>
                    <div style={{marginTop : '50px'}}>
                    <h1 class="titrePage">
                            Evènements à l'affiche 
                        </h1>
                    </div>

                   
                    <div class="events">
   
                        <div class="evenement cinema">
                            <h2 style={{textAlign:'center'}}>Cinéma</h2>
                            <div class="list">
                            {cine}
                            </div>
                        </div>

                        
                    </div>

                    <div class="events">
   
                        <div class="evenement theatre">
                        <h2 style={{textAlign:'center'}}>Théâtre</h2>
                                <div class="list">
                                        {theatre} 
                                </div>
                        </div>
                </div>

                        <div class="events">
   
                            <div class="evenement concert">
                            <h2 style={{textAlign:'center', color:'black'}}>Concerts</h2>
                                <div class="list">
                                        {concert}
                                </div>
                            </div>
                        </div>

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

    function mapDispatchToProps(dispatch) {
        return {
          addToken: function (token) {
            dispatch({ type: 'saveToken', token });
          },
          onAddIdEvent: function (idEvent) {
            dispatch({ type: 'addIdEvent', idEvent: idEvent });
          },
          onAddIdUser: function (idUser) {
            dispatch({ type: 'addIdUser', idUser: idUser });
          },
        }
      }
      
      function mapStateToProps(state) {
        return {
          token: state.tokenReducer,
          idUser: state.idUserReducer,
          currentCity: state.currentCityReducer
        }
      }
      
      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(Home);


