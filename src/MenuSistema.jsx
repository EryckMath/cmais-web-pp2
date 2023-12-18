import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Icon, Menu, Sidebar } from "semantic-ui-react";

const MenuSistema = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleSidebarClose = () => {
        setSidebarVisible(false);
    };

    return (
        <>
            <Menu inverted style={{ backgroundColor: '#4755f5', color: 'white' }}>
                <Menu.Item onClick={handleSidebarToggle} style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon name={sidebarVisible ? 'close' : 'bars'} size='large' />
                    <span style={{ marginLeft: '5px' }}>{sidebarVisible ? 'Fechar' : 'Menu'}</span>
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
                style={{ backgroundColor: '#4755f5', color: 'white', paddingTop: '30px', height: '100vh' }}
                className="sidebar-wrapper"
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div>
                        <Menu.Item
                            name='home'
                            as={Link}
                            to='/'
                            onClick={() => setSidebarVisible(false)}
                            style={{ borderBottom: '2px solid white', fontWeight: 'bold', marginBottom: '10px' }}
                        >
                            Página Inicial
                        </Menu.Item>
                        <Divider inverted style={{ borderTop: '2px solid white', margin: '5px 0' }} />
                        <Menu.Item
                            name='instituicao'
                            as={Link}
                            to='/list-instituicao'
                            onClick={() => setSidebarVisible(false)}
                            style={{ borderBottom: '2px solid white', fontWeight: 'bold', marginBottom: '10px' }}
                        >
                            Instituição
                        </Menu.Item>
                        <Divider inverted style={{ borderTop: '', margin: '5px 0' }} />
                        <Menu.Item
                            name='mercado'
                            as={Link}
                            to='/list-mercado'
                            onClick={() => setSidebarVisible(false)}
                            style={{ borderBottom: '2px solid white', fontWeight: 'bold', marginBottom: '10px' }}
                        >
                            Mercado
                        </Menu.Item>
                        <Divider inverted style={{ borderTop: '', margin: '5px 0' }} />
                        <Menu.Item
                            name='produto'
                            as={Link}
                            to='/list-produto'
                            onClick={() => setSidebarVisible(false)}
                            style={{ borderBottom: '2px solid white', fontWeight: 'bold', marginBottom: '10px' }}
                        >
                            Produto
                        </Menu.Item>
                        <Menu.Item
                            name='login'
                            as={Link}
                            to='/form-login'
                            onClick={() => setSidebarVisible(false)}
                            style={{ borderBottom: '2px solid white', fontWeight: 'bold', marginBottom: '10px' }}
                        >
                            Login
                        </Menu.Item>
                    </div>
                    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                        <Menu.Item
                            onClick={handleSidebarClose}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Icon name='close' />
                            <span style={{ marginLeft: '5px' }}>Fechar</span>
                        </Menu.Item>
                    </div>
                </div>
            </Sidebar>
        </>
    );
};

export default MenuSistema;
