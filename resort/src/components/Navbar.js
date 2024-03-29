import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleToggle.bind(this);
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to="/">
              <img src={logo} alt="Nav Logo" className='nav-icon'></img>
            </Link>
            <button className='nav-btn' onClick={this.handleToggle}>
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;