import React, { useState, Suspense } from "react";
import { contextState } from "./InterviewPractice/10/CreateContext";
import ContextAPI from "./InterviewPractice/10/ContextAPI";
import HOC from "./InterviewPractice/11HOC/HOC";
import HOC2 from "./InterviewPractice/11HOC/HOC2";
const MyComponent = React.lazy(() => import("./Optimization/MyComponent"));
const DataFetchComponent = React.lazy(() => import("./AsyncAwait/DataFetch"));

function App() {
  const [name, setName] = useState("Rajeev");
  const [count, setCount] = useState(0);
  return (
    // <ContextState>
    // <contextState.Provider value={{ name, setName ,data:"my Data"}}>
    <div>
      {/* <DataFetchs /> */}
      {/* <IncrementDecrementByUseState /> */}
      {/* <StateInClassBC/> */}
      {/* <PropsInReact />
        <ChildComponent /> */}
      {/* <Mapping/> */}
      {/* <InputFields/> */}
      {/* <DynamicInputs/> */}
      {/* <DifferentTypeOfCss/> */}
      {/* <Axious /> */}
      {/* <ContextAPI /> */}
      <HOC />
      <HOC2 />

      {/* <Home />

        <Home2 />
        <Home3 /> */}

      <Suspense
        fallback={
          <h1>Loading......................................................</h1>
        }
      >
        {" "}
        <DataFetchComponent />
      </Suspense>
      {/* 
        <Suspense fallback={<p>this is loading....</p>}>
          <MyComponent state={count} />
        </Suspense> */}
      {/* <button onClick={() => setCount((v) => v + 1)}>Increment</button> */}
      {/* <Todo /> */}
    </div>
    // </contextState.Provider>

    // </ContextState>
  );
}
export default App;
