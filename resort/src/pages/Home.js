import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context/context';
import { useContext } from 'react';
import FeaturedRoom from '../components/FeaturedRoom';

const Home = () => {

  return (
    <div>
      <Hero>
        <Banner title="Luxurious Rooms" subtitle="Delux rooms starting at Rs7999">
          <Link to="/rooms"> <button className='btn-primary'>Our Rooms</button></Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRoom/>
    </div >
  );
}

export default Home;