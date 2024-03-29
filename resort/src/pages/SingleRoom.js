import React from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { RoomContext } from '../context/context';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import StyledHero from '../components/StyledHero';
import defaultBcg from '../images/defaultBcg.jpeg';

const SingleRoom = (props) => {
  const { slug } = useParams();
  // console.log(slug);
  const { getRoom } = useContext(RoomContext);
  const selectedRooms = getRoom(slug);
  // console.log(selectedRooms);

  if (!selectedRooms) {
    return (
      <div className='error'>
        <Navbar />
        <h3>No such room could be found...</h3>
        <Link to='/rooms' className='btn-primary'>back to rooms</Link>
      </div>
    );
  }

  const { fields: { name, description, capacity, size, price, extras, breakfast, pets }, images } = selectedRooms;
  const [mainImg, ...defaultImg] = images;

  return (
    <div>
      <Navbar />
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>back to rooms</Link>
        </Banner>
      </StyledHero>
      <section className='single-room'>
        <div className='single-room-images'>
          {defaultImg.map((img, index) => {
            return <img key={index} src={img} alt='single-room-images'></img>
          })}
        </div>
      </section>
      <div className='single-room-info'>
        <article className='desc'>
          <h3>details</h3>
          <p>{description}</p>
        </article>
        <article className='info'>
          <h3>info</h3>
          <h6>Price : ${price}</h6>
          <h6>Size : ${size} SQFT</h6>
          <h6>Max Capacity: {capacity < 2 ? `${capacity} person` : `${capacity} people`}</h6>
          <h6>{pets ? `Pets allowed` : `No pets allowed`}</h6>
          <h6>{breakfast && "Free breakfast allowed"}</h6>
        </article>
      </div>
      <section className='room-extras'>
        <h6>extras</h6>
        <ul className='extras'>
          {extras.map((item, index) => {
            return <li key={index}>-{item}</li>
          })}
        </ul>
      </section>
    </div >
  );
}

export default SingleRoom;

//name, capacity, size, price, extras, breakfast, pets,
