import React, { Component } from 'react';
import { RoomContext } from '../context/context';
import Room from './Room';
import Loading from './Loading';
import Title from './Title';

export default class FeaturedRoom extends Component {
  static contextType = RoomContext;
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoading, featuredRooms: rooms } = this.context;
    return <section className='featured-rooms'>
      <Title title='featured rooms' />
      <div className='featured-rooms-center'>
        {isLoading ? <Loading /> : rooms.map(room => (
          <Room key={room.id} room={room}></Room>
        ))}
      </div>
    </section>
  }
}

