import React, { Component } from 'react';
import Like from './common/like';
class Movies extends Component {
    state = { movies:[
        {
            _id:1,
            title: 'abc',
            genere: 'Thriller',
            like: true,
            ratings: '2.4'
        },
        {
            _id:2,
            title: 'asdbc',
            genere: 'Thriller',
            like: false,
            ratings: '2.4'
        },
        {
            _id:3,
            title: 'agfbc',
            genere: 'Action',
            like: true,
            ratings: '2.4'
        },{
            _id:4,
            title: 'abdgc',
            genere: 'Action',
            like: true,
            ratings: '2.4'
        },
        {
            _id:5,
            title: 'abwwec',
            genere: 'Fiction',
            like: false,
            ratings: '2.6'
        },{
            _id:6,
            title: 'rewabc',
            genere: 'Fiction',
            like: true,
            ratings: '2.4'
        },{
            _id:7,
            title: 'aewrbc',
            genere: 'Action',
            like: false,
            ratings: '8.4'
        },{
            _id:8,
            title: 'abcrew',
            genere: 'Thriller',
            like: true,
            ratings: '5.4'
        },{
            _id:9,
            title: 'sfgfsabc',
            genere: 'Thriller',
            like: true,
            ratings: '2.4'
        },{
            _id:10,
            title: 'jfig',
            genere: 'Fiction',
            like: false,
            ratings: '4.4'
        }
    
        ]
    };

    handleDelete=(movie)=>{
        const movies = this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies});
    }
    handleLike=(movie)=>{
        const movies=[...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index].like=!movies[index].like;
        this.setState(movies)
    }

    render() {
        const {title,genere,ratings}=this.state.movies;
        return (
           
                <table className="table table-stripped table-dark">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th>Like</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie=>
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genere}</td>
                                <td>{movie.ratings}</td>
                                <td><Like liked={movie.like} onClick={()=>this.handleLike(movie)}/></td>
                                <td><button onClick={()=> this.handleDelete(movie)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )}
                        
                    </tbody>

                </table>
            
        )
    }
}

export default Movies;