import React, { Component, createContext } from 'react';
import items from '../data';
import Client from '../Contentful';


const RoomContext = createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      isLoading: true,
      type: 'all',
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false
    }
  }

  getData = async () => {
    try {
      const response = await Client.getEntries({
        content_type: "beachResortProject"
      });

      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.fields.featured === true);
      let maxPrice = Math.max(...rooms.map(room => room.fields.price));
      let maxSize = Math.max(...rooms.map(room => room.fields.size));
      this.setState({
        rooms,
        sortedRooms: rooms,
        featuredRooms: featuredRooms,
        isLoading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });

    } catch (error) {

    }
  }

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      return { ...item, images, id };
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    let rooms = tempRooms.find(room => room.fields.slug === slug);
    return rooms;
  }

  handleChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    }, this.filterRooms);
  }

  filterRooms = () => {
    let {
      rooms,
      featuredRooms,
      isLoading,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRoom = [...rooms];
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== 'all') {
      tempRoom = tempRoom.filter(room => room.fields.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRoom = tempRoom.filter(room => room.fields.capacity >= capacity);
    }
    // filter by price
    tempRoom = tempRoom.filter(room => room.fields.price <= price);
    // filter by size
    tempRoom = tempRoom.filter(room => room.fields.size >= minSize && room.fields.size <= maxSize);
    // filter by extras
    if (breakfast) {
      tempRoom = tempRoom.filter(room => room.fields.breakfast === true);
    }
    if (pets) {
      tempRoom = tempRoom.filter(room => room.fields.pets === true);
    }



    // change the state
    this.setState({
      sortedRooms: tempRoom
    });
  }

  render() {
    return <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
      {this.props.children}
    </RoomContext.Provider>;
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomFilter(Component) {
  return function RoomWrapperComponent(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  }
}

export { RoomContext, RoomProvider, RoomConsumer };
