import * as C from './styles';

import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
    filteredList: Item[];
    setList: (list: Item[]) => void;
}
export const TableArea = ({ list, filteredList, setList }: Props) => {
    return (
        <>
            <C.Table>
                <thead>
                    <tr>
                        <C.TableHeadColumn width={115}>Data</C.TableHeadColumn>
                        <C.TableHeadColumn width={150}>Categoria</C.TableHeadColumn>
                        <C.TableHeadColumn>Título</C.TableHeadColumn>
                        <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                        <C.TableHeadColumn width={100}>Ação</C.TableHeadColumn>
                    </tr>
                </thead>
                <tbody>
                    {filteredList.map((item, index) => (
                        <TableItem key={index} item={item} list={list} setList={setList} />
                    ))}
                </tbody>
            </C.Table>

            {filteredList.length <= 0 &&
                <C.EmptyTable>Sem registro no mês selecionado</C.EmptyTable>
            }
        </>
    );
}