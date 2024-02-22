import { Link } from "react-router-dom"

import dummy from '../data.json';
import Nav from './Nav';
import Detail from '../room/Detail';
import hart from '../svg/hart.svg';
import star from '../svg/star.svg';
import Button from '../Button';
import './main.css';

function Content() {
    return (
        <main>
            <Nav></Nav>
            <div className="content Home">
                {dummy.BoxItem.map(BoxItem => (
                    //반복 구문 넣기
                    <Link to={`/Detail/${BoxItem.room}`}>
                        <button className="box">
                            <div className="picture">
                                <div className="Pbox flex">
                                    <div className="hart">
                                        <img src={hart} />
                                    </div>
                                    <Button></Button>
                                    <div className="dot flex">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <img src={BoxItem.image} />
                            </div>
                            <article>
                                <div className="textBox">
                                    <span className="title">{BoxItem.title}</span>
                                    <div>{BoxItem.introduce}</div>
                                    <div>{BoxItem.date}</div>
                                    <div className="price">
                                        <span>{BoxItem.price}</span>/박
                                    </div>
                                </div>
                                <div className="star flex">
                                    <img src={star} />
                                    <span className="score">{BoxItem.score}</span>
                                </div>
                            </article>
                        </button>
                    </Link>
                ))
                }

            </div>
        </main >
    );
}

export default Content;