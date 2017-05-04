import React, {Component} from 'react'
import SearchContainer from './containers/searchcontainer'
import styles from './styles/index'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 style={styles.home}>Welcome to the OMDB Movie Search</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
