import right from './svg/right.svg';
import left from './svg/left.svg';

function Button() {
    return (
        <div className="button" >
            <div className="left flex" >
                <button>
                    <img src={left} />
                </button>
            </div >
            <div className="right flex" >
                <button>
                    <img src={right} />
                </button>
            </div >
        </div >
    )
}

export default Button;