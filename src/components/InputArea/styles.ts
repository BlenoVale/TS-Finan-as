import styled from "styled-components";

export const Container = styled.form`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    margin-top: 30px;
    gap: 15px;
`;

export const InputArea = styled.div`
    flex: 1;
    display: grid;
    grid-template-rows: repeat(2, 30px);
`;

export const Label = styled.div`
    font-weight: bold;
    align-self: end;

`;

export const Input = styled.input`
    outline: none;
    text-decoration: none;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding-left: 10px;
`;

export const Selected = styled.select`
    outline: none;
    text-decoration: none;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding-left: 5px;
`;

export const Option = styled.option`
    font-size: 15px;
`;

export const AddBtn = styled.button`
    border: none;
    font-weight: 500;
    border-radius: 5px;
    background-color: #aed7e5;
    cursor: pointer;
    transition: all ease .3s;

    &:hover {
        opacity: .8;
    }
`;