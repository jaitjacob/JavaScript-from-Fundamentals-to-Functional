//We need to hydrate the following into suspectList
var suspects = ['Jait Jacob', 'John Smith', 'Rhonda Sharron', 'Husky Matt'];

var suspectList = [];

//how to convert data into a class
function createSuspectObject(name){
    return {
        name: name,
        color: name.split(' ')[1],
        speak(){
            console.log(`This is the speak function. Hello, my name is ${name}`);
        }
    }
}

for(let i=0; i<suspects.length; i++){
    suspect = createSuspectObject(suspects[i]);
    suspectList.push(suspect);
}

for(let i=0; i<suspectList.length; i++){
    suspectList[i].speak();
    console.log(suspectList[i]);
}