import star from '../svg/star.svg';
import share from '../svg/share.svg';
import save from '../svg/save.svg';

import dummy from '../data.json'

function Con1() {
    return (
        <div className="content con1">
            <section>
                <h2>Cabin 1 - Mountainside luxury cabin w Batulao view</h2>
                <div className="grade flex">
                    <div className="flex">
                        <span>
                            <span className="star">
                                <img src={star} />
                            </span>
                            <span>
                                4.91 ·
                            </span>
                            <span>
                                <button>후기 103개</button>
                            </span>
                        </span>
                        <span>·</span>
                        <span>
                            <span>
                                󰀃
                            </span>
                            <span>
                                슈퍼호스트
                            </span>
                        </span>
                        <span>·</span>
                        <span>
                            <button>
                                Calaca, Calabarzon, 필리핀
                            </button>
                        </span>
                    </div>
                    <div className="SS flex">
                        <div className="share">
                            <button>
                                <div>
                                    <span>
                                        <img src={share} />
                                    </span>
                                    공유하기
                                </div>
                            </button>
                        </div>
                        <div className="save">
                            <button>
                                <div>
                                    <span>
                                        <img src={save} />
                                    </span>
                                    저장
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="preView">
                <div className="imgGroup flex">
                    <div className="preImg1">
                        <img src="https://a0.muscache.com/im/pictures/13ee20e4-8255-4e9b-9252-cf5146fc4599.jpg?im_w=720" alt="" />
                    </div>
                    <div className="preImg2 flex">
                        <img src="https://a0.muscache.com/im/pictures/29a0069a-28d9-4fa9-914c-0cffa6bca754.jpg?im_w=720" alt="" />
                        <img src="https://a0.muscache.com/im/pictures/0a6ed1ce-83ba-4ab2-bf94-70e911373ab8.jpg?im_w=720" alt="" />
                    </div>
                    <div className="preImg2 flex">
                        <img src="https://a0.muscache.com/im/pictures/6c49f73e-284c-4e69-8012-9870e122f086.jpg?im_w=720" alt="" />
                        <img src="https://a0.muscache.com/im/pictures/b2298cc1-2df3-4d26-ac9c-15391b17e5a1.jpg?im_w=720" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Con1;