import Who from './Who';
import What from './What';
import Aircover from './Aircover';
import Explan from './Explan';
import Where from './Where';
import Convenience from './Convenience';
import When from './When';
import SideBar from './SideBar';

function Con2() {
    return (
        <div className="content con2 flex">
            <div className="hostel">
                <Who></Who>
                <What></What>
                <Aircover></Aircover>
                <Explan></Explan>
                <Where></Where>
                <Convenience></Convenience>
                {/* <When></When> */}
            </div>
            <SideBar></SideBar>
        </div>
    );
}

export default Con2;