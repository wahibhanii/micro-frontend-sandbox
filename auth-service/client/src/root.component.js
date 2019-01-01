import React from 'react'
import { navigateToUrl } from 'single-spa'

import LoginForm from './components/LoginForm'

const styles = {}

styles.fill = {
    minHeight: '50px',
    display: 'flex',
}

const Headerbar = () => (
  <div style={styles.fill}>
    <LoginForm />
  </div>
)

export default Headerbar