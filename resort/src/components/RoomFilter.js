import { useContext } from "react";
import { RoomContext } from "../context/context";
import Title from '../components/Title';

const RoomFilter = (props) => {

  const getUnique = (item, property) => {
    return [...new Set(item.map(i => i.fields[property]))];
  }
  const context = useContext(RoomContext);
  const {
    handleChange,
    rooms,
    sortedRooms,
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
  } = context;
  // get unique types
  let types = getUnique(rooms, 'type');
  // add all
  types = ["all", ...types];
  // convert it into JSX
  types = types.map((item, index) => (
    <option value={item} key={index}>{item}</option>
  ));

  //get unique capacity
  let capacities = getUnique(rooms, 'capacity');
  // convert it into JSX
  capacities = capacities.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  return (
    <section className="filter-container">
      <Title title="search rooms"></Title>
      <form className="filter-form">
        {/**select type*/}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {types}
          </select>
        </div>
        {/**end of select type*/}
        {/**select capacity*/}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
            {capacities}
          </select>
        </div>
        {/**end of select capacity*/}
        {/**select price*/}
        <div className="form-group">
          <label htmlFor="price">
            Room Price ${price}
          </label>
          <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} className="form-control"></input>
        </div>
        {/**end of select price*/}
        {/**select size*/}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
          </div>
        </div>
        {/**end of select size*/}
        {/**select extras*/}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
            <label>breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
            <label>pets</label>
          </div>
        </div>
        {/**end of select extras*/}
      </form>
    </section>
  );
}

export default RoomFilter;