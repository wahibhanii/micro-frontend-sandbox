import React, { Component } from 'react'
import axios from 'axios'
import styles from 'style-loader!../style/LoginForm.css'


class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isLoading: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        const { email, password } = this.state
        console.log('Submit')
        axios.post('http://localhost:3000/user/login!', {
            email: email,
            password: password
          })
          .then(function (response) {
            console.log(response);
            window.sessionStorage.setItem('sessionToken', response.data.token)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <div className={styles.loginForm}>
                Login Form
                <form>
                    <input 
                        className={styles.loginForm}
                        type="text" placeholder="email"
                        id="login-email"
                        value={this.state.email}
                        onChange={(evt) => this.setState({email: evt.target.value})}
                    ></input>
                    <input 
                        className={styles.loginForm}
                        type="text" placeholder="password"
                        id="login-password"
                        value={this.state.password}
                        onChange={(evt) => this.setState({password: evt.target.value})}
                    ></input>
                    <button 
                        type="button"
                        onClick={this.handleSubmit}
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        )
    }
}

export default LoginForm