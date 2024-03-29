import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

const Room = ({ room }) => {
  const { name, slug, price } = room.fields;
  const { images } = room;
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='single-room'></img>
        <div className='price-top'>
          <h6>Rs{price * 8}</h6>
          <p>per night</p>
        </div>
        <Link to={{ pathname:`/rooms/${slug}` , state:{slug: slug}}} className='btn-primary room-link'>Features</Link>
      </div>
      <p className='room-info'>{name}</p>
    </article>
  );
}

export default Room;

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  })
}