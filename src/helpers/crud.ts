import { Item } from "../types/Item";

export const removeItem = (list: Item[], item: Item) => {
    let newList: Item[] = [...list];
    newList.forEach((i, index) => {
        console.log(i);
        console.log(item);
        if (i === item) newList.splice(index, 1);
    });
    console.log(newList);
    return newList;
}