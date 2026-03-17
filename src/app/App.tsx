import Home from '../pages/Home';
import HomeLayout from '../components/templates/HomeLayout';

const App = () => {
  return (
    <div>
      <HomeLayout>
        <Home />
      </HomeLayout>
    </div>
  );
};

export default App;
