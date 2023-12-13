//65130500050 Panipak Jongsirivanich

class Movies {

  constructor(){
    this.movies = []
  }

  getAllMovies(){
    return this.movies
  }

  addMovie(title, director, year, genre){

    if(!title || !director || !year|| !genre || this.movies.find((movie)=> {
      return movie.title.toLowerCase() === title.toLowerCase() && movie.director.toLowerCase() === director.toLowerCase() }
      )){
      return undefined
  }
    else{
      this.movies.push({
        title : title,
        director : director,
        year :  year  ,
        genre  : genre
    
      }) 
    }

    return  {title, director, year, genre} ; 
    
  }

  updateMovie(title, updatedDetails){
    
    if( this.movies.find((movie)=> 
    { return movie.title.toLowerCase() === title.toLowerCase()})
    ){
      const move = this.movies.findIndex((item) => { return item.title.toLowerCase() === title.toLowerCase()})
      this.movies.splice(move,1,{...this.movies[move],...updatedDetails})
      return this.movies[move]

    }
      else{
        return undefined
      }
    
  }


  deleteMovieByTitle(title){

    if( this.movies.find((movie)=> { return movie.title.toLowerCase() === title.toLowerCase()}) )
    {
      const move = this.movies.findIndex((item) => { return item.title.toLowerCase() === title.toLowerCase()})
      
      return `a movie ${this.movies.splice(move,1,)[0]} object is deleted`

      
      
    }
  else{
   return " no movie deleted"
  }


  }


 
}

module.exports = Movies

