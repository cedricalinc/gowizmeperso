import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css';
import { MailOutlined, AppstoreOutlined, AppstoreAddOutlined, TeamOutlined,IdcardOutlined  } from '@ant-design/icons';

function Nav() {
 // eslint-disable-next-line
  return (
    <nav >
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

        <Menu.Item key="app" icon={<IdcardOutlined/>} style={{marginRight:'5%'}}>
          <Link to="/connexion">
            {/* <Icon type="logout" /> */}
            Connexion
          </Link>
        </Menu.Item>

        <Menu.Item key="app" icon={<IdcardOutlined/>} style={{marginRight:'5%'}}>
          <Link to="/sortie">
            {/* <Icon type="logout" /> */}
            Detail sortie
          </Link>
        </Menu.Item>

        <Menu.Item key="app" icon={<IdcardOutlined/>} style={{marginRight:'5%'}}>
          <Link to="/creation">
            {/* <Icon type="logout" /> */}
            Creation sortie
          </Link>
        </Menu.Item>
        
        <Menu.Item key="app" icon={<IdcardOutlined/>} style={{marginRight:'5%'}}>
          <Link to="/evenement">
            {/* <Icon type="logout" /> */}
            Détail évènement
          </Link>
        </Menu.Item>

        
      </Menu>
    </nav>
  );
}

export default Nav;
