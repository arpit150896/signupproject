import React from 'react';



export default class Signup extends React.Component {
    usersObj = 'users';
    state = {
        username: '',
        email: '',
        password: ''
    };


    
    handleChange = (event) => {
        const input = event.target;
        const value = input.value;
        this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
        const { username, email, password } = this.state;

        console.log('New User: '+ username);

        //get existing users data if available 
        var users = JSON.parse(this.getRecord(this.usersObj));

        //create users item in storage if not available.
        if (!users){
            users = [];
        }

        //check if user already exist in local storage
        var userFound = users.find(record => record.email === email);

        //user found, then return with error msg
        if(userFound){
            alert("Email already exists !!\n Please try to login")
            this.props.history.push('/login');
            return;
        }

        //create new user object
        var userNew = {username: username, email:email, password: password};

        // add new user to exiting users data
        users.push(userNew);

        //save updated users data to local storage 
        this.setRecord(this.usersObj, JSON.stringify(users))

        alert('User with ' + email + " registered successfully");
        
        //redirect to login page
        this.props.history.push('/login');
    };

    // get item from local storage
    getRecord(name){
        return localStorage.getItem(name);
    }

    //save item to local storage
    setRecord(name, value){
        localStorage.setItem(name, value);
    }

    render() {
        return (
            <>
                <h1>SIGNUP</h1>
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" name="username" placeholder="Full Name" value={this.state.username} onChange={this.handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="abc@xyz.xx" value={this.state.email} onChange={this.handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>

            </>
        );
    }

}