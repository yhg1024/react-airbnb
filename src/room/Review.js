import star from '../svg/star.svg'

function Review() {
    return (
        <h2>
            <span className="star">
                <img src={star} />
            </span>
            <span>
                4.91 ·
            </span>
            <span>
                <button>후기 103개</button>
            </span>
        </h2>
    )
}

export default Review;