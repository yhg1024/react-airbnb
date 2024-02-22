import Header from '../Header';
import Footer from '../Footer';
import Room from './Room';

function Detail() {
    return (
        <div className='room'>
            <Header></Header>
            <Room></Room>
            <Footer></Footer>
        </div>
    );
}

export default Detail;
