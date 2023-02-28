import React, { Component } from 'react'

class Contactdetails extends Component {
    render() {
        return (
            <div>
                <h1>Contact Details</h1>

                <pre>{JSON.stringify(this.props)}</pre>
                <div className="container">
                    <div className='row'>
                        <div className="col">
                            <div classNamw="card">
                                <div className="card-header">
                                    <img src={this.props.userContact_details.picture.large} alt=""/>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                    <li className="list-group-item">{this.props.userContact_details.gender}</li>
                                        <li className="list-group-item">{this.props.userContact_details.name.first}</li>
                                        <li className="list-group-item">{this.props.userContact_details.name.last}</li>
                                        <li className="list-group-item">{this.props.userContact_details.dob.age}</li>
                                        <li className="list-group-item">{this.props.userContact_details.location.city}</li>
                                        <li className="list-group-item">{this.props.userContact_details.location.street.name}</li>
                                        <li className="list-group-item">{this.props.userContact_details.location.state}</li>
                                        <li className="list-group-item">{this.props.userContact_details.location.country}</li>
                            
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Contactdetails