//_.each() takes 2 arguments.
//1st arg is a LIST.
//2nd arg is a callback function.
//Iterator is something that can be looped.
var _ = require('lodash');
var arr = ['q', 'w', 'e', 'r', 't', 'y'];

_.each(arr, (value, index, list)=>{
    console.log(arr[index]);
});