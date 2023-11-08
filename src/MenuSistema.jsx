import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class MenuSistema extends React.Component {

    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <>
                <Menu inverted>

                    <Menu.Item
                        name='home'
                        active={this.state.activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/'
                    />
                    <Menu.Item
                        name='instituicao'
                        active={this.state.activeItem === 'instituição'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-instituicao'
                    />

                    <Menu.Item
                        name='mercado'
                        active={this.state.activeItem === 'mercado'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-mercado'
                    />

                    <Menu.Item
                        name='produto'
                        active={this.state.activeItem === 'produto'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-produto'
                    />

                </Menu>
            </>
        )
    }
}

export default MenuSistema;
