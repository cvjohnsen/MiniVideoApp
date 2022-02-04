
// http://www.omdbapi.com/?i=tt3896198&apikey=4582b002

class App extends React.Component {
    state ={
        baseURL: 'http://www.omdbapi.com/?',
        apiKey: 'apikey=4582b002',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
    }

    handleChange = (e) => {
        console.log(e.target.value);
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
        .then( response => response.json()) // parse to json format
        .then( movies => console.log(movies)) //Whatever comes back from above
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
            </div>
        )
    }
} 











ReactDOM.render(<App/>, document.getElementById('root'))