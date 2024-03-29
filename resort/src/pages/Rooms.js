import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

const Rooms = () => {
  return (
    <div>
      <Navbar />
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/"><button className="btn-primary">Return Home</button></Link>
        </Banner>
      </Hero>
      <RoomContainer/>
    </div>
  );
};

export default Rooms;