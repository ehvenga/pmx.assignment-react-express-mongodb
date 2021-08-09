import { useSelector } from 'react-redux'
import { groupBy } from 'lodash'
import './Home.scss'

const Home = () => {

    let movies = useSelector(state => state.data)
    const reversedMovies = movies.map(item => item).reverse()
    const groupedMovies = groupBy(movies, 'category')
    let categories = []

    for (let category in groupedMovies) {
        categories.push(category)
        console.log(category)
    }

    return(
        <div className="container">
            <h2>Trending Now</h2>
            <div className="d-flex mb-3">
                {
                    movies.length === 0 ? 
                    <div>No Movie Available: Upload Movies</div> :
                    reversedMovies.map((item, idx) => {
                        return (
                            <div className="picture-card card col-3 me-1" key={idx}>
                                <img className="image" src={`${item.photoUrl}`} alt={item.name}></img>
                                <div className="details">
                                    <div className="words fs-3">{item.name}</div>
                                    <div className="words">{item.category}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                categories.map(item => {
                    return(
                        <div>
                            <h2>{item}</h2>
                            <div className="d-flex">
                                {
                                    groupedMovies[item].map((movie, idx) => {
                                        return(
                                            <div className="picture-card card col-3 me-1" key={idx}>
                                                <img className="image" src={`${movie.photoUrl}`} alt={item.name}></img>
                                                <div className="details">
                                                    <div className="words fs-3">{movie.name}</div>
                                                    <div className="words">{movie.category}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home