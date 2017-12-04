//add a book to current
function addCurrent(bookIndex){
    return{
        type: 'ADDCURRENT_BOOK',
        bookIndex: bookIndex, 
    }
}

function addFuture(bookIndex){
    return{
        type: 'ADDFUTURE_BOOK',
        bookIndex: bookIndex, 
    }
}

export default addCurrent;
export default addFuture;