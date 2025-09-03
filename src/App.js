import Nav from './Component/Navbar';
import Form from './Component/Form';

const items = ['Home', 'About', 'Contact'];

function App() {
  return (
    <>
      < Nav title="React app" navItems={items} />
      <div className="my-5">
        < Form />
      </div>
    </>
  );
}

export default App;
