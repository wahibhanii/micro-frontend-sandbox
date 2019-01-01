import React, { Component } from 'react'

const styles = {}

styles.fill = {
    width: '85%',
    borderBottom: 'solid 1px #efefef',
}

class Header extends Component {
    render() {
        return (
            <div style={styles.fill}>
                Header
            </div>
        )
    }
}

export default Header