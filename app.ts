namespace app{
    console.time('abc');
    var message: string = 'Hello, World!';
    // create a new heading 1 element
    var heading = document.createElement('h1');
    heading.textContent = message;
    // add the heading the document
    document.body.appendChild(heading);

    // Custom Console log example
    const spacing = '10px';
    const styles = 
        `padding: ${spacing}; background-color: white; color: green; font-style: 
        italic; border: 1px solid black; font-size: 2em;`;
    console.log('%cGeeks for Geeks', styles);
    console.timeEnd('abc');
}