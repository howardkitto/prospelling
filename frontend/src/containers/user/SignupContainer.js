import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createUser} from '../../redux/actionCreators'
import SignupForm from '../../components/SignupForm'

class SignupContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            user:{
            email:'',
            password:'',
            displayName:''}
        }
    this.saveUser = this.saveUser.bind(this);
    }

    onChange(e){
        let user = this.state.user
        user[e.target.name] = e.target.value
        this.setState({user:user})
    }

    saveUser(){
        this.props.createUser(this.state.user)
    }

    render(){
    
    const{serviceMessage}=this.props

        return(<div className="adminContainer">
                <div className="userForm">
                <SignupForm
                    onChange={(e)=>this.onChange(e)}
                    saveUser={this.saveUser}
                    serviceMessage={serviceMessage}/>
                </div>
                </div>
        ) 
    }
}

const mapStateToProps = state => {
    return {
        serviceMessage: state.serviceMessage.message
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
           createUser: (user)=>dispatch(createUser(user))
          }
  }

  SignupContainer.PropTypes = {
    serviceMessage :PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)