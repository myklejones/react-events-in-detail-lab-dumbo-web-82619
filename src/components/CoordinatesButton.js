import React, {Component} from 'react'

export default class CoordinatesButton extends Component{

constructor(props){
super()

this.state = {
}

}

ao = (evt) => {

    const p = [evt.screenX,evt.screenY]
    this.props.onReceiveCoordinates(p)
}

render(){
    console.log(this.props.onReceiveCoordinates )
    return(
        <button onClick={this.ao} >


        </button>
    )
}

}
