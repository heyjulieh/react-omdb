import React, {Component} from 'react'
import {queryOmdb} from '../services/utilities'
import Search from '../components/search'
import Results from '../components/results'
import styles from '../styles/index'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
      movies: [],
      hasSearched: false,
      query: ''
    }
  }

  onSearchInput(event) {
    this.setState({
      query: event.target.value
    })
  }

  handleToggleSearch (event) {
    let hasSearched = !this.state.hasSearched
    this.setState(Object.assign(this.state, {hasSearched, }))
  }

  onSubmitQuery(event) {
    event.preventDefault()
    console.log('searched!')
    let component = this
    queryOmdb(this.state.query).then( data => {
      component.setState({
        query: '',
        hasSearched: !component.state.hasSearched,
        movies: data
      })
    })
    console.log(this.state.movies)
    // return the received movies to this.state
    // somehow pass this.state up to search container, to be used in MovieList
  }

  render(){
    if (this.state.hasSearched){
      return(
        <div style={styles.colCentered}>
          <button
            onClick={ event => this.handleToggleSearch(event) }
            style={styles.spaceB}
            className="btn btn-primary">
            Search Again</button>
          <Results movies={this.state.movies} />
        </div>
      )
    } else {
        return (
          <Search
            handleSubmitQuery={(event) => this.onSubmitQuery(event)}
            handleSearchInput={(event) => this.onSearchInput(event)}
            query={this.state.query} />
        )
      }
    }
}

export default SearchContainer
