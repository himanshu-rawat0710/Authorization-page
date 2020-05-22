import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            password: '',
            mobile: '',
            identity: '',
            registrationtype: '',
            tickets: '',
            hasAgreed: false
            
        };

        
    

    this.handleOnChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    this.handleOnSubmit = (e) => {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    }



    render(){
        return(
            <div className="form-center">
                <form className="form-fields" action="" onSubmit={this.handleOnSubmit}>
                    <div className="single-form-field">
                        <label className="form-label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="form-label-input" placeholder="Your Full Name" name="name" value={this.state.name} onChange={this.handleOnChange}/>
                    </div>

                    <div className="single-form-field">
                        <label className="form-label" htmlFor="password"> Password </label>
                        <input type="password" name="password" id="password" className="form-label-input"   minLength="8" placeholder="Password" value={this.state.password} onChange={this.handleOnChange} />
                    </div>

                    <div className="single-form-field">
                        <label className="form-label" htmlFor="mobile">Mobile Number</label>
                        <input type="tel" id="mobile" className="form-label-input" placeholder="Mobile number" pattern="[\d]{10}" name="mobile" value={this.state.mobile} onChange={this.handleOnChange}/>
                    </div>

                    <div className="single-form-field">
                        <label className="form-label" htmlFor="mail">E-Mail</label>
                        <input type="email" id="email" className="form-label-input" placeholder="you@somewhere.com" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                    </div>

                    <div className="single-form-field">
                        <label className="form-label" htmlFor="identity">Upload Id</label>
                        <input type="file" id="identity" className="form-label-input" name="identity" value={this.state.identity} onChange={this.handleOnChange}/>
                    </div>

                    <div className="single-form-field">
                        <label className="form-label" htmlFor="registrationtype">Registration type</label>
                        <select id="registrationtype" placeholder="Select one" name= "registrationtype" value={this.state.registrationtype} onChange={this.handleOnChange}>
                            <option value = "self">Self</option>
                            <option value = "group">Group</option>
                            <option value = "corporate">Corporate</option>
                            <option value = "others">Others</option>
                        </select>
                    </div>

                    <div className="single-form-field">
                        <label className="form-label" htmlFor="tickets">No of Tickets</label>
                        <input type="number" id="tickets" className="form-label-input" min="1" placeholder="1" name="tickets" value={this.state.tickets} onChange={this.handleOnChange}/>
                    </div>

                    <div className="single-form-field">
                        <label className="form-checkbox">
                            <input className="form-checkbox-1" type="checkbox" value={this.state.hasAgreed} onChange={this.handleOnChange} name="hasAgreed"  /> I agree all statements in <a href="#" className="form-terms">terms of service</a>
                        </label>
                    </div>


                    <div className="single-form-field">
                        <input type="submit" className = "submit-button" value="signup"/>
                        <Link to="/Authorization/sign-in" className="form-link">I'm already member</Link>
                    </div>

                    <div>
                        <input type="reset"></input>
                    </div>
                    


                </form>
            </div>
        
    )}
}

export default SignUpForm;
