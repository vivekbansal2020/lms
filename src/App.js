import React, {Component} from 'react'

import styles from './App.module.css'
import Header from './Component/Header'
import Footer from './Component/Footer'

class App extends Component{
    render(){
        return (
            <div className={styles.container}>
                <Header />
                <h3>Container</h3>
                <Footer />
            </div>
        )
    }
}

export default App;