import React, { Component } from 'react'

const styles = {}

styles.fill = {
    background: '#848484',
    width: '15%',
    textAlign: 'center',
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.fill}>
                LOGO
            </div>
        )
    }
}

export default Logo