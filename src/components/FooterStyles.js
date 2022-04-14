import styled from 'styled-components';

export const Box = styled.div`

background: black;





`;

export const Container = styled.div`
	display: flex;
 
	justify-content: center;
	
	
	/* background: red; */
`
export const Row = styled.div`
display: flex;
flex-template-columns: repeat(auto-fill,
						minmax(110px, 1fr));


`;


export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
text-decoration: none;
grid-gap: 20px;


&:hover {
	color: green;
	transition: 200ms ease-in;
    text-decoration : underline;
}
`;

export const Icon = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
