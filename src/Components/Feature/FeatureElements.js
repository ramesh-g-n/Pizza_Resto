import styled from 'styled-components';
import FeaturedPic from '../../Asset/Pizzaoftheday.jpg';

export const FeatureContainer = styled.div`
background:linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1)), 
url(${FeaturedPic});
height:100vh;
max-height:500px;
background-position:center;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:center;
align-item:center;
color:#fff;
text-align:center;
padding: 0rem;

h1{
    font-size:calc(3rem, 5vw, 5rem);
}
p{
    margin-bottom:1rem;
    font-size:calc(1rem, 3vw, 2rem);
}
`;

export const FeatureButton = styled.button`
  font-size:1.4rem;
  padding: 1rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;
  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;