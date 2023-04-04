const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = 'RESET';
const ADD='ADD';

const DELETE= 'DELETE';
const UPDATE= 'UPDATE';

export { INCREMENT, DECREMENT, RESET, ADD,DELETE, UPDATE};

export const onIncrement=()=>{
    return{
        type:INCREMENT,
       
    }

}
export const onDecrement=()=>{

    return{
        type:DECREMENT,
       
    }
}

export const onReset=()=>{
    return{
        type:RESET,
    }
}


////TODOLIST////


export const todoAdd=(payload:any)=>{
    return{
        type:ADD,
        payload:[]
    }
}


