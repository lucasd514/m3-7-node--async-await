// Exercise 3
// ----------

const { response } = require("express");

const doublesLater = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      console.log(num, "give it abit");
      setTimeout(() => {
        const doubleNum = num * 2;
        resolve(doubleNum);
      }, 2000);
    } else {
      error("this isnt a number");
    }
  });
};

// doublesLater(6).then((response) => console.log(response));
// 3. handleSum function (async/await)
const handleSum = async (num) => {
  const firstRun = await doublesLater(num);
  const secondRun = await doublesLater(firstRun);
  const thirdRun = await doublesLater(secondRun);
  console.log(thirdRun);
  return firstRun + secondRun + thirdRun;
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
