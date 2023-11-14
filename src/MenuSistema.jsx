import React from "react";
import { Link } from "react-router-dom";
import { Divider, Icon, Menu, Sidebar } from "semantic-ui-react";

const MenuSistema = () => {
    const [sidebarVisible, setSidebarVisible] = React.useState(false);

    const handleSidebarToggle = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            <Menu inverted style={{ backgroundColor: '#4755f5', color: 'white' }}>
                <Menu.Item onClick={handleSidebarToggle} style={{ marginBottom: '0px' }}>
                    <Icon name='bars' size='large' />
                </Menu.Item>
            </Menu>

            <Sidebar
                as={Menu}
                animation='overlay'
                direction='left'
                inverted
                vertical
                visible={sidebarVisible}
                width='wide'
                style={{ backgroundColor: '#4755f5', color: 'white', paddingTop: '30px' }}
                className="sidebar-wrapper" 
            >
                <Menu.Item
                    name='home'
                    as={Link}
                    to='/'
                    onClick={() => setSidebarVisible(false)}
                    style={{ fontWeight: 'bold', marginBottom: '10px' }}
                >
                    Página Inicial
                </Menu.Item>
                <Divider inverted style={{ borderTop: '2px solid white', margin: '5px 0' }} />
                <Menu.Item
                    name='instituicao'
                    as={Link}
                    to='/form-instituicao'
                    onClick={() => setSidebarVisible(false)}
                    style={{ fontWeight: 'bold', marginBottom: '10px' }}
                >
                    Instituição
                </Menu.Item>
                <Divider inverted style={{ borderTop: '2px solid white', margin: '5px 0' }}  />
                <Menu.Item
                    name='mercado'
                    as={Link}
                    to='/form-mercado'
                    onClick={() => setSidebarVisible(false)}
                    style={{ fontWeight: 'bold', marginBottom: '10px' }}
                >
                    Mercado
                </Menu.Item>
                <Divider inverted style={{ borderTop: '2px solid white', margin: '5px 0' }} />
                <Menu.Item
                    name='produto'
                    as={Link}
                    to='/form-produto'
                    onClick={() => setSidebarVisible(false)}
                    style={{ fontWeight: 'bold', marginBottom: '10px' }}
                >
                    Produto
                </Menu.Item>
            </Sidebar>
        </>
    );
};

export default MenuSistema;
