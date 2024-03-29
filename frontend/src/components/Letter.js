import React from 'react'
import PropTypes from 'prop-types'

const Letter = (props) => {
    return(
        <div className="letterBox"
            onMouseOver={(e)=>props.triggerSound(e)}
            onMouseOut={(e)=>props.mouseLeave(e)}
            onClick={(e)=>props.triggerSound(e)}
        >{props.text}
        </div>
    )
}

export default Letter

Letter.propTypes = {
    text:PropTypes.string.isRequired,
    triggerSound:PropTypes.func.isRequired,
    mouseLeave:PropTypes.func.isRequired
}