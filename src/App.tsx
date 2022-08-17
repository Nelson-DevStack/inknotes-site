import './App.css';
import Heading from './components/UI/Heading';
import Subheading from './components/UI/Subheading';
import Text from './components/UI/Text';

function App() {
  return (
    <>
      <div>
        <Heading>Quicksand Font</Heading>
        <Subheading>Subheading</Subheading>
      </div>

      <div>
        <p className='font-text'>Source Sans Pro</p>
        <Text>Source Sans Pro</Text>
      </div>
    </>
  )
}

export default App;
