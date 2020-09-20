import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  state = { 
      reviews : '' ,
      
  };
  
  _fetchDate  = async () => {
    await fetch(NYT_API_KEY)
    .then(response => response.json())
    .then( data => {
      // this.setState({reviews : data})
    })
  }
  componentDidMount (){
    _fetchDate();
            
    }
    render() {
        return (
            <div className='latest-movie-reviews'>
                
            </div>
        )
    }
}
