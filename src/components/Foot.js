import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Foot() {
    return (
      <div  className="foot">
      <Box>
          <Container>
          <div className="socialmedia">
        
             <Link href="https://www.facebook.com/bugatti/" color="#FFFFFF"> <FacebookOutlinedIcon  fontSize="large"/> </Link>
             <Link href="https://twitter.com/Bugatti" color="#FFFFFF"> <TwitterIcon  fontSize="large"/> </Link>
             <Link href="https://www.instagram.com/bugatti/" color="#FFFFFF"> <InstagramIcon  fontSize="large"/> </Link>
             <Link href="https://www.pinterest.de/bugatti/" color="#FFFFFF"> <PinterestIcon  fontSize="large"/> </Link>
             <Link href="https://www.youtube.com/c/bugatti" color="#FFFFFF"> <YouTubeIcon  fontSize="large"/> </Link>
             <Link href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHV6LQMJRlQ7wAAAX4lLmqQ-oMw6V15PhzVI7M45Lfp1lQ9UumIGssKI49NXxkDJjtlsjgqewtTW1ir1mBJkqYrgl6jv0d8a16hbcIA4Sard-6DsLW3c2Rvsw_rBMDQkuSXeRg=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fbugatti-automobiles-s-a-s-" color="#FFFFFF"> <LinkedInIcon  fontSize="large"/> </Link>
           
           <br/>
           </div>
           <br/>
           <br/>
           <div className="copy">
           <Link href="#" className="copy" color="#FFFFFF" underline="none"> &copy; 2022 BUGATTI AUTOMOBILES S.A.S </Link>
           <br/>
           </div>
           <br/>
           <br/>
           <div className="link">
		
			<Link href="#" className="contact" color="#FFFFFF" underline="hover">CONTACT</Link>
			<Link href="#"className="career" color="#FFFFFF" underline="hover">CAREER</Link>
			<Link href="#"className="media" color="#FFFFFF" underline="hover">MEDIA</Link>
			<Link href="#"className="legal" color="#FFFFFF" underline="hover">LEGAL NOTICE</Link>
			<Link href="#"className="uk" color="#FFFFFF" underline="hover">UK MODERN SLAVERY ACT</Link>
			<Link href="#"className="code" color="#FFFFFF" underline="hover">CODE OF CONDUCT</Link>
			<Link href="#"className="data" color="#FFFFFF" underline="hover">DATA PROTECTION NOTICE</Link>
			<Link href="#"className="cookies" color="#FFFFFF" underline="hover">COOKIES SETTINGS</Link>
            <br/>
           <br/> <br/>
           <br/>
        </div>
        <br/>
          </Container>
      </Box>
      </div>
    );
  }
  export default Foot;
  