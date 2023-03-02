import styled from "styled-components";

export const TableRow = styled.tr`

`;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
    font-weight: 400;
`; 

export const Delete = styled.button`
    border: none;
    height: 30px;
    background-color: #e8b8b9;
    border-radius: 5px;
    transition: all ease .4s;
    cursor: pointer;

    &: hover {
        opacity: .75;
    }
`;