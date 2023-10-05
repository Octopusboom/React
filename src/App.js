
import Stack from '@mui/material/Stack';
import ProfileCard from './components/ProfileCard';
import ComponentWithChildrenAndProps from './components/ComponentWithChildrenAndProps';
import CounterWithState from './components/CounterWithState';
import CounterWithStateAndUseEffect from './components/CounterWithStateAndUseEffect';
import UseRefHook from './components/useRefHook';

// Importing images
import AlexaImg from './img/alexa.png';
import CortanaImg from './img/cortana.png';
import SiriImg from './img/siri.png';


function App() {
  return (
    <>
    <UseRefHook />
    <CounterWithStateAndUseEffect />
    <Stack spacing={3} direction="row" flexWrap="wrap" sx={{width: "100%", height:"100vh", padding: "50px", justifyContent: "center", alignItems: "center", boxSizing: "border-box"}}>
      <ProfileCard image={AlexaImg} title="Alexa" handler="@alexa99" text="I'll help you buy stuff from Amazon" />
      <ProfileCard image={CortanaImg} title="Cortana" handler="@cortana12" text="Personal assistant from Microsoft" />
      <ProfileCard image={SiriImg} title="Siri" handler="@siri44" text="I am old and useless :)" />
    </Stack>
    <ComponentWithChildrenAndProps title="This is title">This is children</ComponentWithChildrenAndProps>
    <CounterWithState />
    </>
  );
}

export default App;
