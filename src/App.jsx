import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <Hero />
      <HowItWorks />
    </main>
  );
};

export default App;
