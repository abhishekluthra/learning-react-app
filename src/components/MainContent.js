import React from 'react';

import ItemList from '../data/Items';
import Item from './Item';
function MainContent () {

    let itemComponents = ItemList.map( (item) => {
        return <Item 
            key={item.id}
            name={item.name}
            price={item.price}
        />
    });

    return (
        <main>
            <h1>This is the main content section:</h1>
            {itemComponents}
        </main>
    )
}

export default MainContent;