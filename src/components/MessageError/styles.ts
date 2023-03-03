import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    bottom: 15px;
    z-index: 99;
    width: 100vw;
    overflow: hidden;
`;

export const MessageArea = styled.div<{showErro:boolean}>`
    width: 500px;
    height: 300px;
    background-color: #e8b8b9;
    margin-left: ${props => props.showErro === true ? 'calc(100vw - 515px)' : 'calc(100vw - 0px)'};
    margin-right: 15px;
    border-top-left-radius: 10px;
    padding: 15px;
    transition: all ease .4s;
    opacity: .6;
`;

export const Close = styled.div`
    font-size: 25px;
    cursor: pointer;
    transition: all ease .7s;
    border-radius: 50%;
    padding-bottom: 20px;

    &:hover {
        opacity: .6;
    }
`;

export const Message = styled.div`
    margin-left: 10px;
    font-size: 18px;
`;
