import './App.css';
import Navbar from './components/Navbar';
import Heading from './components/UI/Heading';
import Subheading from './components/UI/Subheading';
import Text from './components/UI/Text';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Heading className="text-5xl mt-16">Quicksand Font</Heading>
        <Subheading>Subheading</Subheading>
        <p className='font-text'>Source Sans Pro</p>
        <Text>Source Sans Pro</Text>
      </div>
    </>
  )
}

export default App;
