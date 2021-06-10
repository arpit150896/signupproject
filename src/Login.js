import React from 'react';


export default class Signup extends React.Component {
    usersObj = 'users';
    state = {
        email: '',
        password: ''
    };

    handleChange = (event) => {
        const input = event.target;
        const value = input.value;
        this.setState({ [input.name]: value });
    };
    handleFormSubmit = () => {
        const {email, password } = this.state;

        var users = JSON.parse(this.getRecord(this.usersObj));

        var userFound = users.find(record => record.email === email && record.password === password);

        if (userFound) {
            this.setRecord('currentUser', userFound.username);
            this.props.history.push('/welcome'); 
        } else {
            alert("user is not found !!")
            this.props.history.push('/login'); 
        }
    };

    // get item from local storage
    getRecord(name){
        return localStorage.getItem(name);
    }
    setRecord(name, value){
        localStorage.setItem(name, value);
    }
    render() {
        return (
            <>
                <h1>LOGIN</h1>
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </form>
                </div>

            </>

        );
    }
}