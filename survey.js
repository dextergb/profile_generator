// To help out our fellow users, let's create a quick survey app
// asks the user a bunch of questions like their
// favourite music, activity, food, sport, etc.
// It will then generate a profile description for them to use online

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favorite? ", (meal) => {
        rl.question("What's your favorite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? ", (superpower) => {

              // TODO: Log the answer in a database
              console.log(`Thank you for setting up your online profile: Hello my name is ${name}. I like ${activity} while listening to ${music}. My favourite meal of the day is ${meal}, which is when I get to eat a ${food}. My favourite sport is ${sport} and if I had a superpower it would be ${superpower}.`);

              rl.close();

            });
          });
        });
      });
    });
  });
});

// rl.close()
// The rl.close() method closes the readline.Interface instance and relinquishes control over the input and output streams. When called, the 'close' event will be emitted.

// Calling rl.close() does not immediately stop other events (including 'line') from being emitted by the readline.Interface instance.dd
