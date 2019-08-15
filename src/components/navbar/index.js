import React from 'react';
import styled from 'styled-components';

const NavUi = styled.ul`
  display: none;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    &.is-open {
      display:block; 
    }
  }
  
  @media (min-width: 768px) {
    display:flex;
  }
`;

const SmallNav = styled.div`
  
  @media (min-width: 768px) {
    display:none;
  }
`;

const SmallBandLabel = styled.a`
  padding-top:10px;
  padding-bottom:10px;
  text-align:right;
  text-decoration: none;
  font-family: 'Rye', cursive;
  font-size:2rem;
  color:white !important;
  display:inline-block;
  padding-left:10px;
  
`;

const MenuToggle = styled.div`
  padding-top:10px;
  padding-bottom:10px;
  padding-right:10px;
  text-align:right;
  text-decoration: none;
  font-family: 'Rye', cursive;
  font-size:2rem;
  color:white;
  display:inline-block;
  float:right;
`;

const NavLi = styled.li`
  display: block;
  list-style-type: none;
  width:100%;
  
  &.hide-on-small {
    @media (max-width: 768px) {
      display:none;
    }
  }
`;

const NavLink = styled.a`
  display:inline-block;
  width:100%;
  padding-top:20px;
  padding-bottom:20px;

  text-align:center;
  text-decoration: none;
  font-family: 'Rye', cursive;
  font-size:1rem;
  color:white;
  
  
  &:hover {
    background-color: rgba(255,255,255,.4);
    color: black;
    text-decoration: none;
  }
`;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <SmallNav>
          <SmallBandLabel href="/">Liquid Fun Band</SmallBandLabel>
          <MenuToggle onClick={() => this.toggle()}>Menu</MenuToggle>
        </SmallNav>
        <NavUi className={this.state.isOpen ? "is-open" : ""}>
          <NavLi className="hide-on-small">
            <NavLink href="/">Liquid Fun Band</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="/music">Music</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="/the_band">The Band</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="/acoustic">Acoustic</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="/events">Events</NavLink>
          </NavLi>
        </NavUi>
      </div>
    );
  }
}