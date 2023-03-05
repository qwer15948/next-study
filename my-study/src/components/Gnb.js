import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function Gnb() {
    const activeItem = "home";
  return (
    <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
        //   onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
        //   onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
        //   onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
  )
}
