import React, {Component} from 'react'

export default class DelayedButton extends Component{
    constructor(props){
        super()
    }

ao = (event) => {
    event.persist()
    // this.props.onDelayedClick(event)
    setTimeout(() => {
      this.props.onDelayedClick(event)

    }
    , this.props.delay )

}

render(){
    return(
        <button onClick={this.ao} ></button>
    )
}

}
