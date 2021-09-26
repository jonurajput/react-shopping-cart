import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
function Footer() {
    return (
        <div className="footer">
            <h2>Social</h2>
            <div className="footer_component">
                <h3><YouTubeIcon/> Youtube</h3>
                <h3><InstagramIcon/> Instagram</h3>
                <h3><TwitterIcon/> Twitter</h3>
                <h3><FacebookIcon/> Facebook</h3>
            </div>
        </div>
    )
}

export default Footer
