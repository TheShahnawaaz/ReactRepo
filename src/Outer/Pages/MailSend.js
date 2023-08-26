import React from 'react'
import OuterTemplate from '../Utils/OuterTemplate'
import OuterButton from '../Utils/OuterButton'
import email_gif from '../Images/email.gif'
import { Link } from 'react-router-dom'

export default function MailSend() {
    return (
        <OuterTemplate image2={email_gif} title="MAIL SEND">
            <h3> WE HAVE SENT A PASSWORD RESET LINK TO YOUR REGISTERED EMAIL ADDRESS. PLEASE CHECK YOUR EMAIL. </h3>
            <Link to="/changepassword" style={{ textDecoration: 'none', width: '100%' ,alignSelf:'center',justifyContent:'center',display:'flex'}}>

            <OuterButton label="(To be removed)" />
            </Link>
        </OuterTemplate>

    )
}
