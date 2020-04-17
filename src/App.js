import React from 'react'


import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import coronaImage from './images/image.png'
import { Typography } from '@material-ui/core'


class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount () {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country })
    }

    render () {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <div className={styles.copy}>
                    <Typography variant="body2" color="textSecondary">
                        Created by <a href="#">Ruben Gabrielyan</a>
                    </Typography>
                </div>
            </div>
        )
    }
}

export default App;