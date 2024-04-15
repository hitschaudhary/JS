//immediately invoked function expressions

(function chai(){ // named IIFE
    console.log(`DB connector`);
})();

( (name) => { //unname IIFE
    console.log(`DB connector two ${name}`);
} )('hites')

