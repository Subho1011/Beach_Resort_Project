import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <Navbar />
      <Hero>
        <Banner title="404 Error" subtitle="Page not found">
          <Link to="/"><button className='btn-primary'>Go back to Home</button></Link>
        </Banner>
      </Hero>
    </div>
  );
}