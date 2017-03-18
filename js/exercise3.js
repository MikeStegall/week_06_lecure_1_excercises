// Created an object named person
var person = {
  fName: 'Mike',
  lName: 'Stegall',
  age: 26,
  homeTown: 'Amarillo',
  occupation: 'Help Desk'
}

// printing person out.
console.log(person)

// printing out a string with all the values of person.
console.log(person.fName + ' ' + person.lName + ' is ' + person.age + ' years old. He grew up in ' + person.homeTown + ', but he lives in katy now and his current job is ' + person.occupation + '.')

// changing the value in person
person.lName = 'Seagull'

// adding a new property to person
person.favoriteFood = 'burritos'

// writing a new string withthe new values
console.log(person.fName + ' ' + person.lName + ' is ' + person.age + ' years old. He grew up in ' + person.homeTown + ', but he lives in katy now and his current job is ' + person.occupation + '. He also really likes ' + person.favoriteFood + '. His last name is also Stegall and not Seagull.')
