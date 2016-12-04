/**
 * Created by swati on 4/8/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Modal,Button} from "react-bootstrap";
import {Link} from "react-router";


class modalInstance extends React.Component{
    constructor(props){
        super(props);
        this.divStyle = {
            backgroundColor:'grey',
            zIndex :5
        };
        this.state = {
            username :'',
            password :''
        };
        this.updateUserName = this.updateUserName.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submit = this.submit.bind(this);
    };
    updateUserName(event){
            this.setState({username:event.target.value});
    };
    updatePassword(event){
            this.setState({password:event.target.value});
    };
    submit(){
            console.log(">>>>>>>>>",this.state.username,this.state.password);
        $.ajax({
            url: "../api/",
            dataType: 'json',
            cache: false,
            type:"POST",
            data:this.state,
            success: function(data) {
                this.setState({data: this.state});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    };
    render() {
        return (
            <div className="static-modal">
                {/*<Modal.Dialog style={this.divStyle}>*/}
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            <label>Username:</label>
                            <input type="text" value={this.state.username} className="form form-control"
                                   onChange={this.updateUserName}/>
                            <label>Password:</label>
                            <input type="password" value={this.state.password} className="form form-control"
                                   onChange={this.updatePassword}/>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Link to="/home" className="btn btn-default">Close</Link>
                        <Link to="/home"><Button bsStyle="primary" onClick={this.submit}>Save</Button></Link>

                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        )
    }
};

export default modalInstance;