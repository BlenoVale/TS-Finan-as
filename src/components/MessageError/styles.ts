import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    right: 15px;
    bottom: 15px;
    z-index: 99;
    overflow: hidden;
`;

export const MessageArea = styled.div<{ showErro: boolean }>`
    width: ${props => props.showErro === true ? '500px' : '0'};
    height: 220px;
    background-color: #e8b8b9;
    border-top-left-radius: 10px;
    padding: ${props => props.showErro === true ? '15px' : '0'};
    transition: all ease .4s;
`;

export const CloseArea = styled.div<{ showErro: boolean }>`
    display: ${props => props.showErro === true ? 'flex' : 'none'};
    align-items: center;
    padding-bottom: 20px;
    gap: 15px;
    opacity: 1;
`;

export const CloseTitle = styled.div`
    font-size: 23px;
    font-weight: bold;
`;

export const Close = styled.div`
    font-size: 25px;
    cursor: pointer;
    transition: all ease .7s;
    border-radius: 50%;

    &:hover {
        opacity: .6;
    }
`;

export const Message = styled.div<{ showErro: boolean }>`
    display: ${props => props.showErro === true ? 'block' : 'none'};
    margin-left: 10px;
    font-size: 18px;
    opacity: 1;
`;
