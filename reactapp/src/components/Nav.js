import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import {Menu} from 'antd'
import 'antd/dist/antd.css';
import { AppstoreOutlined, AppstoreAddOutlined, TeamOutlined,IdcardOutlined  } from '@ant-design/icons';
import {connect} from 'react-redux'



function Nav(props) {

  // Création d'une formule selon que l'Id User soit stocké ou non dans le REDUX
  // Si non stocké, alors tout clic sur un menu autre que "Evenements" amènera à l'écran de connexion 
  // Si stocké, alors on peut envoyer vers les composants
  var navig;
  if (props.idUser ==='') {
    navig = <Menu style={{textAlign: 'center', backgroundColor:'#16253D', activeHover:'red'}} mode="horizontal" theme="dark">


    <Menu.Item key="home" icon={<AppstoreOutlined/>} style={{marginRight:'5%'}}>
      <Link to="/">
        {/* <Icon type="home" /> */}
        Evenements
      </Link>
    </Menu.Item>


    <Menu.Item key="test" icon={<AppstoreAddOutlined/>} style={{marginRight:'5%'}}>
      <Link to="/connexion">
        {/* <Icon type="read" /> */}
        Planifier
      </Link>
    </Menu.Item>

    <Menu.Item key="app" icon={<TeamOutlined/>} style={{marginRight:'5%'}}>
      <Link to="/connexion">
        {/* <Icon type="amis" /> */}
        Ami.e.s
      </Link>
    </Menu.Item>

    <Menu.Item key="app" icon={<IdcardOutlined/>} style={{marginRight:'5%'}}>
      <Link to="/connexion">
        {/* <Icon type="logout" /> */}
        Profil
      </Link>
    </Menu.Item>

    
  </Menu>} else {
    navig=
    <Menu style={{textAlign: 'center', backgroundColor:'#16253D', activeHover:'red'}} mode="horizontal" theme="dark">


    <Menu.Item key="home" icon={<AppstoreOutlined/>} style={{marginRight:'5%'}}>
      <Link to="/">
        {/* <Icon type="home" /> */}
        Evenements
      </Link>
    </Menu.Item>


    <Menu.Item key="test" icon={<AppstoreAddOutlined/>} style={{marginRight:'5%'}}>
      <Link to="/planifier">
        {/* <Icon type="read" /> */}
        Planifier
      </Link>
    </Menu.Item>

    <Menu.Item key="app" icon={<TeamOutlined/>} style={{marginRight:'5%'}}>
      <Link to="/amis">
        {/* <Icon type="amis" /> */}
        Ami.e.s
      </Link>
    </Menu.Item>

    <Menu.Item key="app" icon={<IdcardOutlined/>} style={{marginRight:'5%'}}>
      <Link to="/profil">
        {/* <Icon type="logout" /> */}
        Profil
      </Link>
    </Menu.Item>
  </Menu>
  }
    
  

 // eslint-disable-next-line
  return (
    <nav >
     {navig}
    </nav>
  );
}

// Récupération de l'ID user pour vérifier les liens à transmettre
function mapStateToProps(state) {
  return {
      idUser: state.idUserReducer,
    }
}


export default connect(
  mapStateToProps,
  null
)(Nav);

