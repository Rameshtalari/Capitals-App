import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeTabId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeTabId: event.target.value})
  }

  getCountry = () => {
    const {activeTabId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeTabId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeTabId} = this.state
    const country = this.getCountry(activeTabId)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="input-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeTabId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="option"
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
