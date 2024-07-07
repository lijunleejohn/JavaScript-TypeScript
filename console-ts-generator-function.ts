// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
namespace TsGeneratorFunction
{
    export interface ICity {
        City: string;
        Users: string[];
    }

    export interface IUserNamesGroupedByLocation {
        Location: ICity[];
    }

    const userNamesGroupedByLocation: IUserNamesGroupedByLocation = {
        Location: [
            {
                City: 'Tokio'  ,
                Users: [
                    'Aiko',
                    'Chizu',
                    'Fushigi'
                ]
            },
            {
                City: 'Buenos Aires'  ,
                Users: [
                    'Santiago',
                    'Valentina',
                    'Lola'
                ]
            },
            {
                City: 'Saint Petersburg'  ,
                Users: [
                    'Sonja',
                    'Dunja',
                    'Iwan',
                    'Tanja'
                ]
            }                    
        ]
    }

  // TypeScript's LINQ command uses Array methods like:
  //    C# (Typescript equivalent)
  //    --------------------------
  //    Select (map) 
  //    Where (filter)
  //    OrderBy (sort)
  //    GroupBy (reduce)
  //    FirstOrDefault (find)
  //    Aggregate (map)
  //    --------------------------
  // reference link: https://www.garethrepton.com/TypeScript-equivalents-for-DotNet-Linq-functions/
  let cities = userNamesGroupedByLocation.Location.map(l => (l.City));

  function* userGenerator(city: String) {
    // in theory we can call a web api getUsersForCity(city), one city at a time
    for(let u of userNamesGroupedByLocation.Location.find(c => c.City === city)!.Users)
    {
        yield u;
    }
  }
  
  function* cityGenerator() {
    for(let k of cities)
    {
        yield {"name": k, "users": userNamesGroupedByLocation.Location.find(c => c.City === k)?.Users};
    }
  }

    function* uiGenerator() {
        for(let c of cityGenerator())
        {
            yield c.name;
            yield* userGenerator(c.name);
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

    for(let ui of uiGenerator()) {
        console.log(ui);
      }    
}