import React from 'react'

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