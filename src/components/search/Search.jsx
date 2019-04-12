import React from 'react'
import SearchForm from '../forms/SearchForm'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: {
        searchName: '',
        minPrice: 0,
        maxPrice: 9999
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  onChange (event) {
    let name = event.target.name
    let value = event.target.value
    let search = this.state.search
    search[name] = value
    this.setState({ search })
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSearch(this.state.search)
  }

  onReset (event) {
    this.setState({
      search: {
        searchName: '',
        minPrice: 0,
        maxPrice: 9999
      }
    })
  }

  render () {
    return (
      <SearchForm search={this.state.search} onChange={this.onChange} onSubmit={this.onSubmit} onReset={this.props.onReset} />
    )
  }
}

export default Search
