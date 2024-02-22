

import earth from './svg/earth.svg'
import upArrow from './svg/upArrow.svg'

function Footer() {
    return (
        <footer>
            <div class="footerWrap">
                <div class="ftTop flex">
                    <div class="ftLeft">
                        <span>© 2022 Airbnb, Inc.</span>
                        <span>·</span>
                        <span>
                            <button>개인정보 처리방침</button>
                        </span>
                        <span>·</span>
                        <span>
                            <button>이용약관</button>
                        </span>
                        <span>·</span>
                        <span>
                            <button>사이트맵</button>
                        </span>
                        <span>·</span>
                        <span>
                            <button>한국의 변경된 환불 정책</button>
                        </span>
                        <span>·</span>
                        <span>
                            <button>회사 세부정보</button>
                        </span>
                    </div>
                    <div class="ftRight flex">
                        <span>
                            <button class=" earth flex">
                                <img src={earth} />
                                <span>한국어 (KR)</span>
                            </button>
                        </span>
                        <span>
                            <button>
                                ₩ KRW
                            </button>
                        </span>
                        <span>
                            <button class="container flex">
                                <span>지원 및 참고 자료</span>
                                <img src={upArrow} />
                            </button>
                        </span>
                    </div>
                </div>
                <div class="ftBottom">
                    웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사:
                    Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처:
                    terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트
                    사이에
                    이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
                </div>
            </div>
        </footer>
    );
}

export default Footer;