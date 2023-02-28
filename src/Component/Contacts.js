import React, { Component } from 'react'

import Axios from "axios"
import Contactlist from './Contactlist'
import Contactdetails from './Contactdetails'

class Contacts extends Component {

    constructor(props) {
        super(props)
        this.state = { contacts: [], sel_contact: {} }
    }

    componentDidMount() {

        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                this.setState({ contacts: response.data })
            })
            .catch()

    }

    user_Selected_Contact = (contact) => {
       console.log(contact.name.first)
        this.setState({ sel_contact: contact })
    }

    render() {

        return (<>

            <pre> {JSON.stringify(this.state.contacts)}</pre>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        {this.state.contacts.length > 0 ? <> <Contactlist user_Contact={this.state.contacts} selectedContact={this.user_Selected_Contact} /></> : null}


                    </div>
                    <div className="col-md-4">
                    {Object.keys(this.state.sel_contact).length > 0 ? <><Contactdetails userContact_details={this.state.sel_contact}/> </> : null}
                    </div>
                </div>
            </div>


        </>
        )
    }
}

export default Contacts 
