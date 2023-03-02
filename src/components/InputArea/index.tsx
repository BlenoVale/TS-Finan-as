import { useState } from 'react';
import * as C from './styles';
import { categoryList } from '../../data/categories';
import { Item } from '../../types/Item';

type Props = {
    onAdd: (item: Item) => void;
}
export const InputArea = ({ onAdd }: Props) => {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(category);
        let errorMessage = '';
        if (date == '') {
            errorMessage += 'Campo Data está inválida\n'
        }
        if (category == '' || category == 'Selecione uma opção') {
            errorMessage += 'Escolha uma Categoria\n'
        }
        if (title == '') {
            errorMessage += 'Campo Título não está preenchido\n';
        }
        if (value <= 0) {
            errorMessage += 'Campo Valor não está preenchido ou está inválido\n';
        }

        if (errorMessage != '') {
            alert(errorMessage);
        } else {
            let [year, month, day] = date.split('-');

            let newItem: Item = {
                date: new Date(parseInt(year), parseInt(month), parseInt(day)),
                category: category,
                title: title,
                value: value
            }
            onAdd(newItem);
            console.log('passou aqui');
        }
    }

    return (
        <C.Container onSubmit={handleSubmit}>
            <C.InputArea>
                <C.Label>Data</C.Label>
                <C.Input type='date' value={date} onChange={e => setDate(e.target.value)} />
            </C.InputArea>
            <C.InputArea>
                <C.Label>Categoria</C.Label>
                <C.Selected value={category} onChange={e => setCategory(e.target.value)}>
                    <C.Option value={''}>Selecione uma opção</C.Option>
                    {categoryList.map((item, index) => (
                        <C.Option key={index} value={item.category}>{item.PTcategory}</C.Option>
                    ))}
                </C.Selected>
            </C.InputArea>
            <C.InputArea>
                <C.Label>Título</C.Label>
                <C.Input type='text' value={title} onChange={e => setTitle(e.target.value)} />
            </C.InputArea>
            <C.InputArea>
                <C.Label>Valor</C.Label>
                <C.Input type='number' value={value} onChange={e => setValue(parseInt(e.target.value))} />
            </C.InputArea>
            <C.InputArea>
                <C.Label></C.Label>
                <C.AddBtn>Adicionar</C.AddBtn>
            </C.InputArea>
        </C.Container>
    );
}