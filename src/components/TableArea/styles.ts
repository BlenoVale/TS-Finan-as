import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 30px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'}
    padding: 10px 0;
    text-align: left;
`;

export const EmptyTable = styled.div`
    width: inherit;
    margin: 30px 200px;
    padding: 15px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    background-color: #e8b8b9;
    border-radius: 40px;
    border: 2px dashed #f74f57;
`;