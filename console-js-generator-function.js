// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

const userNamesGroupedByLocation = {
    Tokio: [
      'Aiko',
      'Chizu',
      'Fushigi',
    ],
    'Buenos Aires': [
      'Santiago',
      'Valentina',
      'Lola',
    ],
    'Saint Petersburg': [
      'Sonja',
      'Dunja',
      'Iwan',
      'Tanja',
    ],
  };

  // cities = ["Tokio", "Buenos Aires", "Saint Petersburg"], it is an array, array actually is an Object with index as key and array item as value
  // cities = {
  //    '0': 'Tokio'
  //    '1': 'Buenos Aires'
  //    '2': 'Saint Petersburg'
  // }
  // typeof cities is 'object
  // Object.keys(cities) is ['0', '1', '2']
  // so cities is an array, which is a special object with key and value pairs
  //    behavior of an array: cities[1] = 'Buenos Aires'
  //    behavior of an object: cities['1'] = 'Buenos Aires'
  //
  let cities = Object.keys(userNamesGroupedByLocation);

  // for...of returns actual values, will return 'Tokieo' directly
  /*
  function* generator() {
    for(let k of cities)
    {
        yield userNamesGroupedByLocation[k];
    }
  }
    */

  // for...in loops over enumerable property names of an object, will return 0 for value 'Tokio'
  function* cityGenerator() {
    for(let k in cities)
    {
        yield {"name": cities[k], "users": userNamesGroupedByLocation[cities[k]]};
    }
  }

  function* userGenerator(city) {
    // in theory we can call a web api getUsersForCity(city), one city at a time
    for(let u of userNamesGroupedByLocation[city])
    {
        yield u;
    }
  }

  // use yield* to delegate to another iterable object, combine city and its child users iternators
  function* uiGenerator() {
    for(let k of cities)
    {
        yield k;
        yield* userGenerator(k);
    }
  }

  for(let city of cityGenerator())
  {
    console.log(city.name);
    console.log(city.users);
    for(let user of userGenerator(city.name))
    {
        console.log(`  ${user}`);
    }
  }

  console.log('iterate through all ui elements:');
  for(let ui of uiGenerator()) {
    console.log(ui);
  }