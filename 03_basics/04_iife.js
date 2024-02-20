// Immediately Invoked Function Expressions (IIFE)

// Why use:
    // - immediately execute hojaye
    // - no pollution from global scope 

    
    //   (function chai(){}) ();


// named IIFE:-

(function chai(){
    console.log(`DB CONNECTED`);
})();

//unnamed IFFE using arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('umair')