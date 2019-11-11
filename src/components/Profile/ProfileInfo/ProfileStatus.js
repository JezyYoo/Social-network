import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    statusClicked= () =>{
        this.setState({
            editMode:true
        })
    }

    statusChanged= () =>{
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChanging = (e) =>{
        this.setState({
            status:e.currentTarget.value
        })
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div>
                <span onClick={this.statusClicked}>{this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            < input autoFocus={true} onBlur={this.statusChanged} value={this.state.status}
                    onChange={this.onStatusChanging} type="text"/>
            }
        </div>

    }
}

export default ProfileStatus;