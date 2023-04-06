const obj = { foo: 1};
 Object.seal(obj);

 obj.foo = 2;
 obj.bar = 10;
 
 /* Object.seal S
 
 Will prevent adding an new propeties to the objects. But allows to modify the values of existing objects
 Output: Error in statement */

 let person = {
     name: 'Jade'
 };

 const users = [person];

person = null;

document.write(person);

/* We are only changing the value in the variable "person" to null. This does not affect the object.
A reference to object is abject is available in the array*/