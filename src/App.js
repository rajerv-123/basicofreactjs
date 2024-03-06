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

const MyComponent = React.lazy(() => import("./Optimization/MyComponent"));

// import ParentComponent from "./PureComponents/ParentComponent";

//import PureComponents from "./PureComponents/PureComponents";

//import  Table  from "./ReactFragments/Table";

//import FormHandlin from "./FormHandling/FormHandlin";
function App() {
  const [count, setCount] = useState(0);
  return (
    <ContextState>
      <div>
        <Home />
        <Home2 />
        <Home3 />
        <Home4 />

        {/* <Ref></Ref> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <UserGreeting/> */}
        {/* <NameList/> */}
        {/* <State></State> */}
        {/* <FormHandlin/> */}
        {/* <LifeCycleA/>
      <LifeCycleB></LifeCycleB> */}
        {/* <Fragment/> */}
        {/* <Table/> */}
        {/* <PureComponents/> */}
        {/* <ParentComponent/> */}
        {/* <DataFetch /> */}
        <Suspense fallback={<p>this is loading....</p>}>
          <MyComponent state={count} />
        </Suspense>
        <button onClick={() => setCount((v) => v + 1)}>Increment</button>
      </div>
    </ContextState>
  );
}
export default App;
