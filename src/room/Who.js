import brand from '../svg/brand.svg';

function Who() {
    return (
        <div className="who flex">
            <div className="title">
                <h3>Camper And Cabin 님이 호스팅하는 통나무집 전체</h3>
                <ol>
                    <li>
                        <span>최대 인원 8명</span>
                        <span> · </span>
                    </li>
                    <li>
                        <span>침실 2개</span>
                        <span> · </span>
                    </li>
                    <li>
                        <span>침대 3개</span>
                        <span> · </span>
                    </li>
                    <li>
                        <span>욕실 2개</span>
                    </li>
                </ol>
            </div>
            <div className="brand">
                <div>
                    <button>
                        <img src="https://a0.muscache.com/im/pictures/user/84d63cb0-42a9-4e68-a7d9-10d2b29f95ee.jpg?im_w=240"
                            alt="Camper And Cabin님은 슈퍼호스트입니다. Camper And Cabin님에 대해 자세히 알아보세요." />
                    </button>
                    <span>
                        <img src={brand} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Who;