import { Item } from "../types/Item";

export const removeItem = (list: Item[], item: Item) => {
    list.forEach((i, index) => {
        if (i === item) list.splice(index, 1);
    });
    console.log(list);
}