const Rating = (props: { rating: number, numReviews: number }) => {
    const ratings = [1, 2, 3, 4, 5];
    return (
        <div className="rating">
            {
                ratings.map((val) => {
                    return (
                        <span key={val}><i className={
                            props.rating >= val
                                ? 'fa fa-star'
                                : props.rating >= val - 0.5
                                    ? 'fa fa-star-half-o'
                                    : 'fa fa-star-o'}></i>
                        </span>
                    );
                })
            }
            <span>
                {props.numReviews} Reviews
            </span>
        </div>
    )
}
export default Rating;