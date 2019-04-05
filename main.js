class Hello{
    constructor(){
        console.log("Hello World!");
    }
}

function node_study(x, y){
    x*=x;
    y*=y;
    return Math.sqrt(x+y);
}

a = new Hello();

console.log(node_study(3,4));
