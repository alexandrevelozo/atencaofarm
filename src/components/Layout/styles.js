import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 
`

export const Header = styled.div`
    width: 100vw;
    height: 30vh;

    background-color: #3E4095;
    position: absolute;

`

export const Box = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    width: 60vw;
    height: 70vh;

    background-color: #fff;

    position: relative;
    top: 20%;

    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

export const HeaderForm = styled.div`
    display: flex;
    flex-direction: row;
    
    
    img {
        width: 180px;
        height: 180px
    }
`