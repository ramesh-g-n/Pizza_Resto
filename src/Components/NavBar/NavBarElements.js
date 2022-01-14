import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = styled.nav`
background: transparent;
height:80px;
display:flex;
padding-top:20px;
justify-content:center;
font-weight:700;
`;

export const NavLink = styled(Link)`
color:#fff;
font-size:2rem;
display:flex;
align-item:center;
text-decoration:none;
cursor:pointer;

@media screen and (max-width:400px){
    position:absalute;
    top:4px;
    left:25px;
}`

export const NavIcon = styled.div`
display:block;
position:absolute;
top:35px;
right:35px;
cursor:pointer;
color:#fff;

p{
    transform: translate(-15%, 0%);
    font-weight:bold;
    padding-top:20px;
}`

export const Bars = styled(FaPizzaSlice)`
font-size:2rem;
color:#ffffff;
transform:translate(-140%, -65%);
`