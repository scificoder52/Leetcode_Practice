// //Promise creation

// const ticket = new Promise(function (resolve, reject) {
//   const isBoarded = false; // Check if you are on the flight
//   if (isBoarded) {
//     resolve("You are in the Flight"); // Successful case
//   } else {
//     reject("Your flight has been cancelled"); // Failed case
//   }
// });

// //promise usage
// ticket
//   .then((data) => {
//     console.log("congrats", data);
//   })
//   .catch((data) => {
//     console.log("oh no!", data);
//   })
//   .finally(() => {
//     console.log("i will be always executed");
//   });

function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      resolve(cheese);
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🍩";
      resolve(dough);
      // reject("Bad cheese");
    }, 2000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 2000);
  });
}

async function orderPizza() {
  try {
    const cheese = await getCheese(); //it means wait for promise to be resolved then execute further code
    console.log("cheese is ready", cheese);
    const dough = await makeDough(cheese);
    console.log("dough is ready", dough);
    const pizza = await bakePizza(dough);
    console.log("pizza is ready", pizza);
  } catch (error) {
    console.log("something went wrong", error);
    //it means if something rejected then after that this will be executed
  }
}

orderPizza();
