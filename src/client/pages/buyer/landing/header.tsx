import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';
// import { Router   } from 'next/router';
export default class Header extends React.Component {
  
  state = { 
    activeItem: 'home' ,
    homelistrefLink: '/buyer/checkout/homelist',
    homerefLink: '/buyer/checkout/checkout',
    inforefLink: '/buyer/checkout/info'
};
  //router = useRouter();
  handleItemClick = (e, { name ,href}) => {
    //const { router } = Router;
    this.setState({ activeItem: name })
    this.setState({ refLink: href });
    //router.push('/pescon/list');
};

  render() {
    const { activeItem,homelistrefLink,homerefLink,inforefLink } = this.state;

    return (
      <Menu inverted seconday pointing size="mini" color="blue">
        <Menu.Item
          name="Home"
          active={activeItem === 'home'}
          href={homerefLink}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="List"
          active={activeItem === 'equipments'}
          href={homelistrefLink}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="CustoMer Detail"
          href={inforefLink}
          active={activeItem === 'plants'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
        {/* <Menu.Menu position="right">
          <Menu.Item
            name="Register"
            active={activeItem === 'Register'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu> */}
      </Menu>
    );
  }
}
