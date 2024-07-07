# There are a number of ways to solve this problem, depending on your desired result.

## Way 1: Convert your interface to a class
```
export class Category {
  name: string;
  description: string;
}

const category: Category = new Category();
```
## Way 2: Extend your interface as a class
```
export class CategoryObject implements Category {
}

const category: Category = new CategoryObject();
```
## Way 3: Fully specify your object, matching the interface
```
const category: Category = {
  name: 'My Category',
  description: 'My Description',
};
```
## Way 4: Make the properties optional
```
export interface Category {
  name?: string;
  description?: string;
}

const category: Category = {};
```
## Way 5: Change your variable's type to use Partial<T>
```
export interface Category {
  name: string;
  description: string;
}

const category: Partial<Category> = {};
```