import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return ( 
        <ImageContainer>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="1"/>
			<h2 className='name'>Ricky</h2>
        </ImageContainer>
    );
}
 
export default Header;

const ImageContainer = styled.div`
position: relative;
height: 300px;
    .name {
        position: absolute;
        bottom: 3px;
    }
`