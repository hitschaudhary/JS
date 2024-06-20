# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# solution code

## project 1

``` javascript
console.log("hitesh")
   const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
 buttons.forEach(function(button){
   button.addEventListener('mouseover', function(e){
     if(e.target.id == 'grey'){
        body.style.backgroundColor = e.target.id;
      }

     if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id;
     }

     if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id;
     }
 
     if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id;
     }
   });
 });
```

