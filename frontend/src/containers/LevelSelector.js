import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'

import {levelSelected} from '../redux/actionCreators'

class LevelSelector extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            levels : [  { number:1,
                        description:"I'm a beginner"},
                        { number:2,
                        description:"I'm struggling"},
                        { number:1,
                        description:"I want to improve"},
                        { number:1,
                        description:"I'm pretty good"}
                        ],
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });

      }

    render(){
        return(
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="info">
                    Choose Level
                </DropdownToggle>
                <DropdownMenu>
                    {this.state.levels.map((level, index)=>
                        <DropdownItem key={index} onClick={(e)=>this.props.levelSelected(level.number)}>
                        {level.description}</DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
        )
    }

}

const mapStateToProps = state => {
    return {
      level: state.assessment.level
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        levelSelected : (level) => dispatch(levelSelected(level))
          }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelector)