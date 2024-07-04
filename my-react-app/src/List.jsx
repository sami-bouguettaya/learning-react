

function List(){

    const fruits =[{id : 1, name : "apple" , calories : 95},
                   {id : 2,name : "orange", calories : 45},
                   {id : 3,name : "banana", calories : 105},
                   {id : 4,name : "coconut", calories : 169},
                   {id : 5,name : "pineapple", calories : 39}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
    fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMIRIC

    const listItems = fruits.map(fruits => <li key = {fruits.id}>  {/* id for the error of key */}
        
                                           {fruits.name} : &nbsp;
                                           {fruits.calories}
                                            </li>);
    return(<ul>{listItems}</ul>); 
}

export default List 