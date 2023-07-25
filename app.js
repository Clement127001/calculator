//have to maintain the result string ,then add it to the screen

let res = 0;
let resString = "";
let tempString = "";
let prevOper = "";
let count = 0;

const result = document.querySelector("#result");

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      resString = resString + btn.value;
      result.innerText = resString;

      console.log("value of res at in:" + res);
    } else if (btn.value === "AC") {
      res = 0;
      tempString = "";
      resString = "";

      result.innerText = res;
    } else if ("/x-+=".includes(btn.value)) {
      result.innerText = "";
      tempString = resString;
      resString = "";
      const val = parseInt(tempString);
      if (count == 0) {
        res += val;
        count++;
      }
      if (btn.value === "+") {
        // console.log("value of res at +:" + res);
        // result.innerText = res;
        prevOper = btn.value;
      } else if (btn.value === "-") {
        // const val = parseInt(tempString);
        // res -= val;
        // console.log("value of res at -:" + res);
        // result.innerText = res;
        prevOper = btn.value;
      } else if (btn.value === "x") {
        prevOper = btn.value;
      } else if (btn.value === "/") {
        prevOper = btn.value;
      } else if (btn.value === "=") {
        const val = parseInt(tempString);

        console.log("val: " + val + "\nres: " + res);

        if (prevOper === "+") res += val;
        else if (prevOper === "-") res -= val;
        else if (prevOper === "x") res *= val;
        else if (prevOper === "/") {
          res /= val;
          res = res.toFixed(2);
        }
        result.innerText = res;
      }
    }
  });
});
