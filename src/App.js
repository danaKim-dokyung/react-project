import logo from './logo.svg';
import './App.css';

function Header(probs){
return <header>
  <h1> WELCOME TO MY FIRST REACT PROJECT!</h1>
  <h1> probs</h1>
  <h1> {probs.title}</h1>
</header>
}
function Nav(probs){

const lis = []
for(let i=0; i<probs.topics.length; i++){
  let t = probs.topics[i];
  lis.push(<li key={t.id}><a href={'/read/'+ t.id}>{t.title}</a></li>)
}
  return <nav>
    <ol>
    {lis}    
    </ol>
    <h1>{probs.title} {probs.body}</h1>
  </nav>
}
function App() {

  const topics =[
    {id:1, title:'html', body:'this is html link...'},
    {id:2, title:'css'},
    {id:3, title:'js'}
  ]

  return (
    <div>
      <Header title="REACT"></Header>
      <Nav title="Welcome" body="Hello" topics={topics}></Nav>
    </div>
  );
}

export default App;
