import { Link } from 'react-router-dom';

import logo from './svg/logo.svg';
import slogo from './svg/slogo.svg';
import glass from './svg/glass.svg';
import earth from './svg/earth.svg';
import Hbar from './svg/Hbar.svg';
import man from './svg/man.svg';

function Header() {
    return (
        <div className="headerWrap">
            <header className="flex">
                <h1>
                    <Link to="/">
                        <img className="logo" src={logo} />
                        <img className="Slogo" src={slogo} />
                    </Link>
                </h1>
                <div className="Bwrap">
                    <form className="SearchBar flex">
                        <button>어디든지</button>
                        <span></span>
                        <button>언제든 일주일</button>
                        <span></span>
                        <button>게스트추가</button>
                        <button>검색 시작하기</button>
                        <button className="glass">
                            <img src={glass} />
                        </button>
                    </form>
                </div>
                <div className="user flex">
                    <button className="host">호스트 되기</button>
                    <button className="earth">
                        <img src={earth} />
                    </button>
                    <div className="login flex">
                        <button>
                            <img src={Hbar} />
                        </button>
                        <button>
                            <img src={man} />
                        </button>
                    </div>
                </div>
            </header>
            <div className="hidden">

            </div>
        </div>
    );
}

export default Header;