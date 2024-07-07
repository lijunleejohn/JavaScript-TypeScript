/*
Approach:
- Write one function inside another function.
- Make a call to the inner function in the return statement of the outer function.
- Call it fun(a)(b) where a is a parameter to the outer and b is to the inner function.
- Finally, return the combined output from the nested function.
*/

function fun1(a) {
    function fun2(b) {
        return a + b;
    }
    return fun2;
}
function GFG_Fun() {
    console.log(fun1("A Online Computer Science Portal")
        (" GeeksforGeeks"));
}
GFG_Fun()