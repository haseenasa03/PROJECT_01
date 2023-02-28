import React, { Component } from "react"

class Contactlist extends Component {

    contactHandler=(contact)=>{
        console.log(contact.name.first)
        this.props.selectedContact(contact)
    }

    render() {

        return <>
        <h1>Contact List</h1>
            <pre> {JSON.stringify(this.props)}</pre>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody> 
                            {
                                this.props.user_Contact.length > 0 ? <>
                                    {
                                        this.props.user_Contact.map((contact,index) => {
                                            return <tr key={index} onMouseOver= {this.contactHandler.bind(this,contact)} >
                                                <td>{contact.login.uuid.substr(32)}</td>
                                                <td>{contact.name.first}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.gender}</td>
                                            </tr>
                                        })
                                    }
                                </> : null}
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Contactlist