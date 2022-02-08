
// http://www.omdbapi.com/?i=tt3896198&apikey=4582b002

class App extends React.Component {
    state ={
        baseURL: 'http://www.omdbapi.com/?',
        apiKey: 'apikey=4582b002',
        query: '&t=',
        movieTitle: '',
        searchURL: '',
        movie: null , //Use null instead of {} so it wont't show objs/text
    }

    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            movieTitle: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
       this.setState({
           searchURL: `${this.state.baseURL}${this.state.apiKey}${this.state.query}${this.state.movieTitle}`
        //    Create Callback Function!
       }, () => {
        //    Fetch returns a promise
        fetch(this.state.searchURL)
        .then((response) => response.json()) // parse to json format
        .then((movie) => {
            this.setState({movie: movie, movieTitle: ''}); // set movie in the state
            }) //Whatever comes back from above
        .catch(error => console.error(error)) //handle any errors
       })
    }

    render(){
        return(
            <div>
                <h1>Mini Video App</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='movieTitle'>Movie Title</label> 
                    <input type='text' id='movieTitle' value={this.state.movieTitle} onChange={this.handleChange}/>

                    <input type='submit'/>
                </form>

                {/* Conditional for Null above, <Movie/> pass some data */}
                {this.state.movie && <MovieInfo movie={this.state.movie}/>}
                {/* or ternary operator*/}
                {/* {this.state.movie ? <MovieInfo movie={this.state.movie}/> : <h2>Search Again</h2>} */}
            </div>
        )
    }
} 

//Function Component (When there's no STATE but can use 'props' in both!)
//Change {} to NUll in state to hide info/title/plot etc
const MovieInfo = (props) => { 
    return (
    <div>
     <h1>Movie Title:{props.movie.Title}</h1>
     <h2>Year:{props.movie.Year}</h2>
     <img src={props.movie.Poster}/>
     <h3>Genre:{props.movie.Genre}</h3>
     <p>{props.movie.Plot}</p>
     </div>
    )
}










ReactDOM.render(<App/>, document.getElementById('root'))