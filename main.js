let nem1 = +prompt("enter the number 1")
let nem2 = +prompt("enter the number 2")
let x = prompt("enter + - * / ** %")
let demo = document.getElementById("demo")


function calc(n1,n2,x) {
    if(!isNaN(n1 * n2)){
        switch(x) {
            case '+':
                return n1+n2;
                break;
            case '-':
                return n1-n2;
                break;
            case '*':
                return n1*n2;
                break;
            case '/':
                return n1/n2;
                break;
            case '**':
                return n1**n2;
                break;
            case '%':
                return n1%n2;
                break;
            default:
                return "erorr"
        }
    }else{
        return "erorr"
    }
}

demo.innerText = calc(nem1,nem2,x)