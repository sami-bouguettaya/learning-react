

function List(){

    const fruits =["apple","orange" ,"banana" , "coconut" , "pineapple"];

    const listItems = fruits.map(fruits => <li> {fruits} </li>);
    return(<ul>{listItems}</ul>); 
}

export default List 