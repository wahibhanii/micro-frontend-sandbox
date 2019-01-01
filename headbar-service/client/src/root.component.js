import React from 'react'
import { navigateToUrl } from 'single-spa'

import Logo from './components/Logo'
import Header from './components/header'

const styles = {}

styles.fill = {
    minHeight: '50px',
    display: 'flex',
}

const Headerbar = () => (
  <div style={styles.fill}>
    <Logo />
    <Header />
  </div>
)

export default Headerbar