async function getUserId() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // launch web api call
            console.log("calling WebApi.GetUserId() ...");
            resolve("66-9387")
        }, 2000);
    })
}

async function getUserInfo(userId) {
    return new Promise((resolve, reject) => {
        // launch web api call
        console.log(`calling webApi.GetUserInfo(${userId})`);
        //WebApi.GetUserInfo('sdfs'); // uncomment this line will display: Error found:-->      ReferenceError: WebApi is not defined
        resolve({"username": "John Li", "Sex": "Male"});  //display { username: 'John Li', Sex: 'Male' }
    })
}

// need to define main() async function otherwise will get the following compilation error:
//    SyntaxError: await is only valid in async functions and the top level bodies of modules
async function main() {
    try {
        // await pauses the execution of its surrounding async function until the promise is settled 
        // (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise.
        const userId = await getUserId();
        const userInfo = await getUserInfo(userId);
        console.log(userInfo);
    }
    catch(e) {
        console.log(`I've got the error:--> ${e}`);
    }

    console.log("this message won't be first shown because of the await");
}

main();