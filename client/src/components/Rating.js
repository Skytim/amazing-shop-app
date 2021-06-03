function Rating({ rating, numReviews }) {
    const ratings = [1, 2, 3, 4, 5];
    return (
        <div className="rating">
            {
                ratings.map((val) => {
                    return (
                        <span><i className={
                            rating >= val
                                ? 'fa fa-star'
                                : rating >= val - 0.5
                                    ? 'fa fa-star-half-o'
                                    : 'fa fa-star-o'}></i>
                        </span>
                    );
                })
            }
            <span>
                {numReviews} Reviews
            </span>
        </div>
    )
}
export default Rating;