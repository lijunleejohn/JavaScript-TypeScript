function getUserId() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // launch web api call
            console.log("calling WebApi.GetUserId() ...");
            resolve("66-9387")
        }, 2000);
    })
}

function getUserInfo(userId) {
    return new Promise((resolve, reject) => {
        // launch web api call
        console.log(`calling webApi.GetUserInfo(${userId})`);
        //WebApi.GetUserInfo('sdfs'); // uncomment this line will display: Error found:-->      ReferenceError: WebApi is not defined
        resolve({"username": "John Li", "Sex": "Male"});  //display { username: 'John Li', Sex: 'Male' }
    })
}

getUserId()
    .then((result) => getUserInfo(result))  // getUserInfo(userId) won't get called until getUserId() completed and resolved, so it's guarantee when getUserInfo(userId) is called, userId is available and valid.
    .then((result) => console.log(result))
    .catch((error) => console.error(`Error found:-->      ${error}`));

console.log("this message will be first shown because of the asynchronous operation. Seeing this line doesn't mean the application completed, it's just waiting ...");
