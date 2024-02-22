import press from '../svg/press.svg';
import design from '../svg/design.svg';
import cancell from '../svg/cancell.svg';


function What() {
    return (
        <div className="what">
            <div className="introduce flex">
                <div className="icon">
                    <img src={press} />
                </div>
                <div className="tet">
                    <h4>언론 소개:</h4>
                    <p>Esquire, June 2021<br />
                        BluPrint, December 2021</p>
                </div>
            </div>
            <div className="design flex">
                <div className="icon">
                    <img svg={design} />
                </div>
                <div className="tet">
                    <h4>디자이너:</h4>
                    <p>Dennis Canonizado</p>
                </div>
            </div>
            <div className="cancell flex">
                <div className="icon">
                    <img src={cancell} />
                </div>
                <div className="tet">
                    <h4>6월 24일 전까지 무료로 취소하실 수 있습니다.</h4>
                </div>
            </div>
        </div>
    );
}

export default What;