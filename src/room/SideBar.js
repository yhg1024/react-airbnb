import star from '../svg/star.svg'
import downArrow from '../svg/downArrow.svg'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sideBox">
                <div className="flex">
                    <div className="price">₩598,460<span>/박</span></div>
                    <div className="grade">
                        <span className="star">
                            <img src={star} />
                        </span>
                        <span>
                            4.91 ·
                        </span>
                        <span>
                            <button>후기 103개</button>
                        </span>
                    </div>
                </div>
                <div className="checkBox">
                    <div className="check flex">
                        <div className="checkIn">
                            <div className="tet">체크인</div>
                            <span>2023. 7. 24.</span>
                        </div>
                        <div className="checkOut">
                            <div className="tet">체크아웃</div>
                            <span>2023. 7. 29.</span>
                        </div>
                    </div>
                    <div className="personnel">
                        <div className="tet">인원</div>
                        <span>게스트 1명</span>
                        <span className="down">
                            <img src={downArrow} />
                        </span>
                    </div>
                </div>
                <div className="book">
                    예약하기
                </div>
                <div>예약 확정 전에는 요금이 청구되지 않습니다.</div>
                <div className="money">
                    <div>
                        <span>₩611,620 x 5박</span>
                        <span>₩3,058,101</span>
                    </div>
                    <div>
                        <span>서비스 수수료</span>
                        <span>₩431,734</span>
                    </div>
                </div>
                <div className="total">
                    <span>총 합계</span>
                    <span>₩3,489,835</span>
                </div>
            </div>
        </div>
    );
}

export default SideBar;