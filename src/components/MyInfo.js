import React from 'react';

function MyInfo () {
    return (
        <div>
            <h2 className="my-name">Abhishek Luthra</h2>
            <p>This is a paragraph. Below is a list of items:</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <input type="checkbox" name="checklistItem1" value="Publish Blog" /><label htmlFor="checklistItem1">Publish blog</label><br/>
            <input type="checkbox" name="checklistItem2" value="Code 1 Hour" /><label htmlFor="checklistItem2">Code 1 Hour</label><br/>
            <input type="checkbox" name="checklistItem3" value="Read 1 Hour" /><label htmlFor="checklistItem3">Read 1 Hour</label><br/>
        </div>
    );
}

export default MyInfo