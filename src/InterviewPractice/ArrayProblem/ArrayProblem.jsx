import React, { useEffect } from "react";

const ArrayProblem = () => {
  const fnArray = [
    function fn(a, b) {
      return a + b;
    },
    function fn(a, b) {
      return a - b;
    },
    function fn(a, b) {
      return a * b;
    },
    function fn(a, b) {
      return a / b;
    },
  ];
  
  const mainFunction = () => {
    let result = fnArray.map((fn) => {
      return fn(80, 2);
    });
    console.log(result);
  };

  useEffect(() => {
    mainFunction();
  }, []);

  return (
    <div>
      <span>
        write a function which takes an array of multile function and executes
        them one by one in left to right manner :: Asked in ZOmato interview
      </span>
    </div>
  );
};

export default ArrayProblem;
