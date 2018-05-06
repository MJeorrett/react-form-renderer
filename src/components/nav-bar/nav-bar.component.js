import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export class AppNavBar extends Component {
    render() {
        return (
            <Menu color='blue' inverted fluid>
                <Menu.Item header>Form Builder</Menu.Item>
                <Menu.Item>
                    <Link to="/home">Home</Link>
                </Menu.Item>
            </Menu>
        );
    }
}