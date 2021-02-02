import React from 'react';

import ItemList from '../data/Items';
import Item from './Item';

import TodoItems from '../data/TodoData';
import Todo from './Todo';

function MainContent () {

    let itemComponents = ItemList.map( (item) => {
        return <Item 
            key={item.id}
            name={item.name}
            price={item.price}
        />
    });

    let todoComponents = TodoItems.map( (todoItem) => {
        return <Todo key={todoItem.id} todoItem={todoItem}/>
    });

    return (
        <main>
            <h1>This is the main content section:</h1>
            {itemComponents}
            <hr />
            {todoComponents}
        </main>
    )
}

export default MainContent;