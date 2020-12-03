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

  async performSearch() {
    const q = this.state.searchValue
    let response = await axios.get(`https://api.github.com/search/users?q=${q}`)
    this.setState({ gitHubUsers: response.data.items })
  }

  render() {
    let displayUsers = this.state.gitHubUsers.map(user => {
      return (
        <li key={user.id}>{user.login}</li>
      )
    })
    return (
      <>
        <Input
          type="text"
          data-cy="search-input"
          placeholder="Input GH username"
          onChange={(e) => this.setInputValue(e)} />
        <Button
          onClick={() => this.performSearch()}
          data-cy="search-button"
        >Search
      </Button>
        <div data-cy="search-results">
          <ul>
            {displayUsers}
          </ul>
        </div>
      </>
    )
  }
}

export default GHSearch
