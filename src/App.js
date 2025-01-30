import React, { useState, Suspense } from "react";
import HandleInput from "./jan-2025/input-fields/handleInput";

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
      {/* <HOC />
      <HOC2 /> */}
      {/* <UsingHelperfunction /> */}
      {/* <ArrayProblem /> */}
      {/* <ConstomHookUsing/> */}
      {/* <SearchFilter /> */}
      {/* <InputField1 /> */}
      {/* <Ref/> */}

      {/* <Home />

        <Home2 />
        <Home3 /> */}
      {/* 
      <Suspense
        fallback={
          <h1>Loading......................................................</h1>
        }
      >
        {" "}
        <DataFetchComponent />
      </Suspense> */}
      {/* 
        <Suspense fallback={<p>this is loading....</p>}>
          <MyComponent state={count} />
        </Suspense> */}
      {/* <button onClick={() => setCount((v) => v + 1)}>Increment</button> */}

      {/* <Todo /> */}
      {/* <Todos/> */}
      <HandleInput />
    </div>
    // </contextState.Provider>

    // </ContextState>
  );
}
export default App;
