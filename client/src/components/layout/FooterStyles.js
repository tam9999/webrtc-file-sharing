import styled from 'styled-components';

export const Box = styled.div`
    
    background: #9AC6C5;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 250px;
    @media (max-width: 1000px) {
    padding: 0 20px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;

`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 30px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 
                            minmax(185px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
    minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 10px;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        color: black;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 18px;
    color: #fff;
    margin: 20px 0 10px 0;
    font-weight: bold;
`;