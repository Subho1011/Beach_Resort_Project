import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: 'Free cocktail',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.'
        },
        {
          icon: <FaHiking />,
          title: 'Endless hicking',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.'
        },
        {
          icon: <FaShuttleVan />,
          title: 'Free shuttle',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.'
        },
        {
          icon: <FaBeer />,
          title: 'Strongest beer',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.'
        }
      ]
    }
  }

  render() {
    return (
      <section className='services'>
        <Title />
        <div className='services-center'>
          {
            this.state.services.map(item => {
              return (
                <div className='service'>
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              )
            })
          }
        </div>
      </section>
    );
  }
}

export default Services;