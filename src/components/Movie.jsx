const Movie = (props) => {
    return (
        <div>
            <h3>{props.hiJay}</h3>
            <h4>{props.releaseDate}</h4>
            <h5>{props.overview}</h5>
            <h6>{props.genre}</h6>
            <img src={props.pic}></img>
        </div>
    )
}

export default Movie