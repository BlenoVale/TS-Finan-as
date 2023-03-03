import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { items } from './data/items';
import { categories } from './data/categories';
import * as df from './helpers/date.filter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { MessageError } from './components/MessageError';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(df.getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [message, setMessage] = useState<string[]>([]);
  const [showErro, setShowErro] = useState(false);

  useEffect(() => {
    setFilteredList(df.filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    if(message.length > 0){
      setShowErro(true);
    }
  }, [message]);

  useEffect(() => {
    let incomeAux = 0;
    let expenseAux = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseAux += filteredList[i].value;
      } else {
        incomeAux += filteredList[i].value;
      }
    }

    setIncome(incomeAux);
    setExpense(expenseAux);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  const closeErro = () => {
    setShowErro(false);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} setMessage={setMessage} />
        <TableArea list={list} filteredList={filteredList} setList={setList} />
      </C.Body>

      <MessageError
        message={message}
        setMessage={setMessage}
        showErro={showErro}
        closeErro={closeErro}
      />
    </C.Container>
  );
}

export default App;