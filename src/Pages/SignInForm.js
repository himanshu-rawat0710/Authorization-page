import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    
    constructor(props) {
        super(props);
            this.state = {
                email : '',
                password : ''
            };  
        

            this.handleOnChange = (e) => {
                let target = e.target
                let value = target.type === 'checkbox' ? target.checked : target.value;
                let name = target.name;


                this.setState({
                    [name] : value
                })

            }



            this.handleOnSubmit = (e) => {
                e.preventDefault();

                console.log(this.state)
            }
    
    }

    

    render(){
        return(
            <div className="form-center">
                <form onSubmit= {this.handleOnSubmit} className="form-fields" action="" >
                    
                    <div className="single-form-field">
                        <label className="form-label" htmlFor="email">E-Mail</label>
                        <input type="email" id="email" className="form-label-input" placeholder="you@somewhere.com" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                    </div>


                    <div className="single-form-field">
                        <label className="form-label" htmlFor="password"> Password </label>
                        <input type="password" name="password" id="password" className="form-label-input"   minLength="8" placeholder="Password"  value={this.state.password} onChange={this.handleOnChange}/>
                    </div> 


                    <div>
                        <input type="submit" className ="submit-button" value="submit"/>
                        <Link to="/Authorization" className="form-link">Create an account</Link>

                    </div>
                    

                    <div>
                        <input type="reset"></input>
                    </div>
                    


                </form>
            </div>
        )
        }
    }

export default SignInForm;