import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class GHSearch extends Component {
  state = {
    searchValue: '',
    gitHubUsers: []
  }

  setInputValue(e) {
    this.setState({ searchValue: e.target.value })
  }

  async performSearch(e) {
    const q = this.state.searachValue
    let response = await axios.get(`https://api.github.com/search/users?q=${q}`)
    this.setState({ gitHubUsers: response.data.items })
  }

  render() {
    return (
      <>
        <Input
          type="text"
          data-cy="search-input"
          placeholder="Input GH username"
          onChange={(e) => this.setInputValue(e)} />
        <Button
          onClick={(e) => this.performSearch(e)}
          data-cy="search-button"
        >Search
      </Button>
        <div data-cy="search-results">

        </div>
      </>
    )
  }
}

export default GHSearch
