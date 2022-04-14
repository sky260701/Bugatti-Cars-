import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import Icon from '@mui/material/Icon';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
return (
    <div>
	<Box>
	
	<Container>
        <div className="socialmedia">
        <Row  className="socialmedia">
             <FooterLink href="https://www.facebook.com/bugatti/"> <FacebookOutlinedIcon  fontSize="large"/> </FooterLink>
             <FooterLink href="https://twitter.com/Bugatti"> <TwitterIcon  fontSize="large"/> </FooterLink>
             <FooterLink href="https://www.instagram.com/bugatti/"> <InstagramIcon  fontSize="large"/> </FooterLink>
             <FooterLink href="https://www.pinterest.de/bugatti/"> <PinterestIcon  fontSize="large"/> </FooterLink>
             <FooterLink href="https://www.youtube.com/c/bugatti"> <YouTubeIcon  fontSize="large"/> </FooterLink>
             <FooterLink href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHV6LQMJRlQ7wAAAX4lLmqQ-oMw6V15PhzVI7M45Lfp1lQ9UumIGssKI49NXxkDJjtlsjgqewtTW1ir1mBJkqYrgl6jv0d8a16hbcIA4Sard-6DsLW3c2Rvsw_rBMDQkuSXeRg=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fbugatti-automobiles-s-a-s-"> <LinkedInIcon  fontSize="large"/> </FooterLink>
        </Row>
        </div>
        <br/>
       
        <br/> <div className="copy">
        <FooterLink href="#" className="copy"> &copy; 2022 BUGATTI AUTOMOBILES S.A.S </FooterLink> </div>
        <br/>
        <br/>
        <br/>
        <div className="link">
		<Row>
			<FooterLink href="#" className="contact">CONTACT</FooterLink>
			<FooterLink href="#"className="career">CAREER</FooterLink>
			<FooterLink href="#"className="media">MEDIA</FooterLink>
			<FooterLink href="#"className="legal">LEGAL NOTICE</FooterLink>
			<FooterLink href="#"className="uk">UK MODERN SLAVERY ACT</FooterLink>
			<FooterLink href="#"className="code">CODE OF CONDUCT</FooterLink>
			<FooterLink href="#"className="data">DATA PROTECTION NOTICE</FooterLink>
			<FooterLink href="#"className="cookies">COOKIES SETTINGS</FooterLink>
		</Row>
        </div>
	</Container>
	</Box>
    </div>
);
};
export default Footer;
