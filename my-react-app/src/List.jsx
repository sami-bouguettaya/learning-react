
function List(){

    const fruits =[{id : 1, name : "apple" , calories : 95},
        {id : 2,name : "orange", calories : 45},
        {id : 3,name : "banana", calories : 105},
        {id : 4,name : "coconut", calories : 169},
        {id : 5,name : "pineapple", calories : 39}];

        const listItems = fruits.map(fruits => <li key = {fruits.id}>  {/* id for the error of key */}

            {fruits.name} : &nbsp;
            {fruits.calories}
             </li>);
             
    return(<ul>{listItems}</ul>); 
}

export default List 