import { useContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const {datos}  = useContextGlobal();
  console.log(datos)

  return (
    <main style={{ position: 'relative', top: '7vw'}}>
        
      <h1>Home</h1>
      <div className='card-grid'>
        {datos.map((dato) => (
          <Card key={dato.id} id={dato.id} name={dato.name} username={dato.username} email={dato.email}/>
        ))}
      </div>
    </main>
  );
};

export default Home;