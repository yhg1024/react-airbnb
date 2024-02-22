import mountainView from '../svg/mountainView.svg';
import kitchen from '../svg/kitchen.svg';
import workOnly from '../svg/workOnly.svg';
import freeParking from '../svg/freeParking.svg';
import swimmingPool from '../svg/swimmingPool.svg';
import TV from '../svg/TV.svg';
import airConditioner from '../svg/airConditioner.svg';
import carbonMonoxide from '../svg/carbonMonoxide.svg';
import fireAlarm from '../svg/fireAlarm.svg';
import securityCamera from '../svg/securityCamera.svg';
import keyboard from '../svg/keyboard.svg';

function Convenience() {
    return (
        <div className="convenience">
            <h3>숙소 편의시설</h3>
            <div className="tableWrap flex">
                <div className="table flex">
                    <div className="icon">
                        <img src={mountainView} />
                    </div>
                    <div className="tet">
                        산 전망
                    </div>
                </div>
                <div className="table flex">
                    <div className="icon">
                        <img src={kitchen} />
                    </div>
                    <div className="tet">
                        주방
                    </div>
                </div>
                <div className="table flex">
                    <div className="icon">
                        <img src={workOnly} />
                    </div>
                    <div className="tet">
                        업무 전용 공간
                    </div>
                </div>
                <div className="table flex">
                    <div className="icon">
                        <img src={freeParking} />
                    </div>
                    <div className="tet">
                        건물 내 무료 주차
                    </div>
                </div>
                <div className="table flex">
                    <div className="icon">
                        <img src={swimmingPool} />
                    </div>
                    <div className="tet">
                        수영장
                    </div>
                </div>
                <div className="table flex">
                    <div className="icon">
                        <img src={TV} />
                    </div>
                    <div className="tet">
                        TV
                    </div>
                </div>
                <div className="table flex">
                    <div className="icon">
                        <img src={airConditioner} />
                    </div>
                    <div className="tet">
                        에어컨
                    </div>
                </div>
                <div className="table flex">
                    <div className="icon">
                        <img src={securityCamera} />
                    </div>
                    <div className="tet">
                        숙소 내 보안 카메라
                    </div>
                </div>
                <div className="table flex">
                    <div className="icon">
                        <img src={carbonMonoxide} />
                    </div>
                    <div className="tet lineTh">
                        일산화탄소 경보기
                    </div>
                </div>
                <div className="table flex">
                    <div className="icon">
                        <img src={fireAlarm} />
                    </div>
                    <div className="tet lineTh">
                        화재경보기
                    </div>
                </div>
            </div>
            <button className="all">
                편의시설 50개 모두 보기
            </button>
        </div>
    );
}

export default Convenience;