import React, { Component } from 'react';
class Add  extends Component {
    constructor () {
        super()
    

    }



       


           


      
    render(props) { 
        return (
            
          <div
          style={{ display: this.props.show ? "block" : "none" }}
          className="modal"
        >
        <div className="modal-form">
                 
                 <input type="text" value={this.props.giveName} placeholder="Enter films name" id="name" onChange={this.props.hundleChange}></input>
                 <input type="text" value={this.props.giveLink}  placeholder="Enter URL" id="link" onChange={this.props.hundleChange}></input>
                 <input type="text" value={this.props.giveNote} placeholder="Rating" id="note" onChange={this.props.hundleChange}></input>

                <button onClick={this.props.addObj}>Add</button>
                </div>
                </div>

         );
    }
}
 
export default Add;