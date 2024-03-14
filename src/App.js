//import ParentComponent from "./Props/ParentComponent";
//import NameList from "./ListRendring/NameList";
//import UserGreeting from "./ConditionalRendering/UserGreeting";
//import State from "./UseState/State";
//import Ref from './UseRef/Ref';
//import Fragment  from "./ReactFragments/Fragment";
//import LifeCycleA from "./ComponentMounting/LifeCycleA";
//import LifeCycleB from "./ComponentMounting/LifeCycleB";

import React, { useState, Suspense } from "react";
import DataFetch from "./AsyncAwait/DataFetch";
import ContextState from "./UseContext/ContextState";
import Home from "./UseContext/Home";
import Home2 from "./UseContext/Home2";
import Home3 from "./UseContext/Home3";
import Home4 from "./UseContext/Home4";
import Todo from "./TODOList/TodoList";
import DataFetchs from "./InterviewPractice/FetchData/DataFetch";
import IncrementDecrementByUseState from "./InterviewPractice/02/IncrementDecrementByUseState";
import StateInClassBC from "./InterviewPractice/03/StateInClassBC";
import PropsInReact from "./InterviewPractice/04/PropsInReact";
import ChildComponent from "./InterviewPractice/04/ChildComponent";
import Mapping from "./InterviewPractice/05/Mapping";
import InputFields from "./InterviewPractice/06/InputFields";

const MyComponent = React.lazy(() => import("./Optimization/MyComponent"));
const DataFetchComponent = React.lazy(() => import("./AsyncAwait/DataFetch"));

function App() {
  const [count, setCount] = useState(0);
  return (
    <ContextState>
      <div>
        {/* <DataFetchs /> */}
        {/* <IncrementDecrementByUseState /> */}
        {/* <StateInClassBC/> */}
        {/* <PropsInReact />
        <ChildComponent /> */}
        {/* <Mapping/> */}
        <InputFields/>
        {/* <Home />
        <Home2 />
        <Home3 /> */}

        <Suspense
          fallback={
            <h1>
              Loading......................................................
            </h1>
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
    </ContextState>
  );
}
export default App;
