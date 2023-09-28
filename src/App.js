import './App.css';

import Hello from './components/Hello';
import { TestExport, TestExport2, TestExport3 } from './components/TestExport';
import ClassComponent from './components/ClassComponent';
import MyFunctionalComponentWithProps from './components/MyFunctionalComponentWithProps';
import ClassComponentWithProps from './components/ClassComponentWithProps';

import Mounting from './components/Mounting';

function App() {
  return (
    <div className="App">
      <Hello />
      <TestExport />
      <TestExport2 />
      <TestExport3 />
      <ClassComponent />
      <MyFunctionalComponentWithProps name="Marry" age="25" hairColor="brown" />
      <MyFunctionalComponentWithProps name="John" age="50" hairColor="blue" />
      <MyFunctionalComponentWithProps name="Max" age="34" hairColor="yellow" />
      <ClassComponentWithProps name="Marry" age="25" hairColor="brown" />
      <ClassComponentWithProps name="John" age="50" hairColor="blue" />
      <ClassComponentWithProps name="Max" age="34" hairColor="yellow" />

      <Mounting newfavouriteCollor="Blue" />
    </div>
  );
}

export default App;
