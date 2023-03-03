import { useEffect, useState } from 'react';
import * as C from './styles';
import { categoryList } from '../../data/categories';
import { Item } from '../../types/Item';

type Props = {
    onAdd: (item: Item) => void;
    setMessage: (message: string[]) => void;
}
export const InputArea = ({ onAdd, setMessage }: Props) => {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let errorMessage = '';
        let errorList = [];
        if (date == '') {
            errorMessage += 'Campo Data está inválida\n'
            errorList.push('- Campo Data está inválido');
        }
        if (category == '' || category == 'Selecione uma opção') {
            errorMessage += 'Escolha uma Categoria\n'
            errorList.push('- Escolha uma Categoria');
        }
        if (title == '') {
            errorMessage += 'Campo Título não está preenchido\n';
            errorList.push('- Campo Título não está preenchido');
        }
        if (value <= 0 || isNaN(value)) {
            errorMessage += 'Campo Valor não está preenchido ou está inválido\n';
            errorList.push('- Campo Valor não está preenchido ou está inválido');
        }

        if (errorMessage != '') {
            //alert(errorMessage);
            setMessage(errorList);
        } else {
            let [year, month, day] = date.split('-');
            console.log(year, month, day);

            let newItem: Item = {
                date: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
                category: category,
                title: title,
                value: value
            }
            onAdd(newItem);
        }
    }

    return (
        <C.Container onSubmit={handleSubmit}>
            <C.InputArea>
                <C.Label>Data</C.Label>
                <C.Input
                    type='date'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </C.InputArea>
            <C.InputArea>
                <C.Label>Categoria</C.Label>
                <C.Selected
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <C.Option value={''}>Selecione uma opção</C.Option>
                    {categoryList.map((item, index) => (
                        <C.Option key={index} value={item.category}>{item.PTcategory}</C.Option>
                    ))}
                </C.Selected>
            </C.InputArea>
            <C.InputArea>
                <C.Label>Título</C.Label>
                <C.Input
                    type='text'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </C.InputArea>
            <C.InputArea>
                <C.Label>Valor</C.Label>
                <C.Input
                    type='number'
                    value={value}
                    onChange={e => setValue(parseInt(e.target.value))}
                />
            </C.InputArea>
            <C.InputArea>
                <C.Label></C.Label>
                <C.AddBtn>Adicionar</C.AddBtn>
            </C.InputArea>
        </C.Container>
    );
}