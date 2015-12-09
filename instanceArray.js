/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here

users.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));
users.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));
users.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  //code here

console.log('name: ' + users[0].name);
console.log('email: ' + users[0].email);
console.log('password: ' + users[0].pw);
console.log('');

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here
console.log('name: ' + users[2].name);
console.log('email: ' + users[2].email);
console.log('password: ' + users[2].pw);
console.log('');

//Now create another instance of User using your own information and then add that to your users array.

  //code here
users.push(new User('Doug', 'doug1232@hotmail.com', 'avaracs'));


console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here

  for (var i = 0; i < users.length; i++)
    console.log('user name: ' + users[i].name);
