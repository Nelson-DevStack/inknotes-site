import './App.css';
import Navbar from './components/Navbar';
import PlusButton from './components/PlusButton';
import Container from './components/UI/Container';
import Heading from './components/UI/Heading';
import Subheading from './components/UI/Subheading';
import Text from './components/UI/Text';

function App() {
  return (
    <>
      <Navbar />
      <div className="col-span-12 mt-16">
        <Container>

          <PlusButton />
          <Heading className="text-5xl">Quicksand Font</Heading>
          <Subheading>Subheading</Subheading>
          <p className='font-text'>Source Sans Pro</p>
          <Text>Source Sans Pro</Text>
        </Container>
      </div>
    </>
  )
}

export default App;
