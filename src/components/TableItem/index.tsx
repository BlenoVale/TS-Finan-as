import * as C from './styles';

import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/date.filter';
import { categories } from '../../data/categories';
import { removeItem } from '../../helpers/crud';

type Props = {
    item: Item;
}
export const TableItem = ({ item }: Props) => {

    const handleDeleteItem = () => {
        //removeItem(list, item);
    }

    return (
        <C.TableRow>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <C.Delete onClick={handleDeleteItem}>Remover</C.Delete>
            </C.TableColumn>
        </C.TableRow>
    );
}