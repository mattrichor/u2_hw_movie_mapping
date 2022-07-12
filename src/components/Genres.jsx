const Genres = (props) => {
    let colorVar
    switch (props.genre) {
        case 'Crime':
            colorVar = 'darkgrey'
            break;
        case 'Drama':
            colorVar = 'grey'
            break;
         case 'Action':
            colorVar = 'red'
            break;
         case 'Science Fiction':
            colorVar = 'green'
            break;
        case 'Horror':
            colorVar = 'black'
            break;
        case 'Adventure':
             colorVar = 'brown'
              break;
        case 'Fantasy':
            colorVar = 'lightbrown'
            break;
        case 'Thriller':
            colorVar = 'coral'
            break;
        default:
            colorVar = 'orange'
            break;
    }
    
    return (
        <div>
            <p style={{backgroundColor: colorVar, color: 'white'}}>{props.genre}</p>
        </div>
    )
}

export default Genres