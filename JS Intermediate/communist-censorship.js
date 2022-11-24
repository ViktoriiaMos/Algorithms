// //6. Communist Censorship

// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], 
//replace every letter of the word Program with *, so the output would be 
//['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work 
//for any word of your choice


var arr = ['Man', 'I','Love','The','Matrix','Program'];

function replace (i){
    const selectTheWord = arr[i].length

    arr[i] = "";
    for(let j = 0; j < selectTheWord; j++){  
        arr[i] = arr[i] + "*";
    }
    return arr;
}
    
    console.log(replace(5));