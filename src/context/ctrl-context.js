import React from 'react';

const ctrlContext = React.createContext({
    removeIngredient: ()=>{},
    addIngredient: ()=>{},
    ctrlThis: Object
});

export default ctrlContext;