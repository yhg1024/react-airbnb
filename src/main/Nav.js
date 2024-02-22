import dummy from '../data.json';
import Button from '../Button';

import fillter from '../svg/fillter.svg';




function Nav() {
    return (
        <div className="Swrap">
            <div className="style flex" >
                <Button></Button>
                <nav className="flex">
                    {dummy.navItem.map(navItem => (
                        //반복 구문 넣기
                        <button>
                            <img src={navItem.image} />
                            <div>{navItem.name}</div>
                        </button>
                    ))}
                    {/* {dummy.navItem.map(item => <NavList key={item.id} name={item.name} picture={item.image} />)} */}
                </nav>
            </div>
            <div class="fillter flex">
                <img src={fillter} />
                <div>필터</div>
            </div>
        </div >
    );
}

export default Nav;