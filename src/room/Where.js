import bed from '../svg/bed.svg';
import bedding from '../svg/bedding.svg';

function Where() {
    return (
        <div className="where">
            <h3>숙박 장소</h3>
            <div className="room flex">
                <div className="type">
                    <div className="icon flex">
                        <span>
                            <img src={bed} />
                        </span>
                        <span>
                            <img src={bedding} />
                        </span>
                    </div>
                    <h4>침실 1</h4>
                    <p>킹사이즈 침대 1개, 요와 이불 1개</p>
                </div>
                <div className="type">
                    <div className="icon flex">
                        <span>
                            <img src={bed} />
                        </span>
                        <span>
                            <img src={bed} />
                        </span>
                        <span>
                            <img src={bedding} />
                        </span>
                    </div>
                    <h4>침실 2</h4>
                    <p>더블 침대 2개, 요와 이불 1개</p>
                </div>
            </div>
        </div>
    );
}

export default Where;