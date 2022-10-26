const chuck = {
  firstName: 'Chuck',
  lastName: 'Norris',
  birthDate: new Date('1940-03-10'),
  jokes: ['Chuck Norris counted to infinity... Twice.', 'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'],
  displayInfo() {
    console.log(`My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`);
  },
  getAge() {
    // TODO
    let date = new Date()
    console.log( (date - this.birthDate) / 31536000000)
  },
  addJoke(joke) {
    this.jokes.push(joke)
  },
  getRandomJoke() {
    console.log(this.jokes[Math.floor(Math.random() * (this.jokes.length - 0) + 0)])
  }
};

chuck.getAge()
chuck.getRandomJoke()

