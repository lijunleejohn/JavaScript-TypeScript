// Month here is a declaration of an Object
// this is a self-invoking function and initialize onth as an empty object is it's not initialized yet by passing parameter (Month || (Month = {})), which using OR to pass the true one
// self-invoing function basically is for executing some global statements, it's just for scoping variables.ariables declared in the self executing function are, by default, only available to code within the self executing function. This allows code to be written without concern of how variables are named in other blocks of JavaScript code.

var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));

console.log(Month);
console.log(Month["Feb"]);
console.log(Month[6]);

let Year = {}
console.log(Month["Jan"] = 0);
console.log((Month["Jan"] = 0) === Month["Jan"]);
console.log((Month["Jan"]) === 0);