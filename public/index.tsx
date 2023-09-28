const app = document.getElementById('app');

function Header({ title, some })
// function Header(props)
{
  // console.log(title);
  // return (<h1>Develop. Preview. Ship. 🚀</h1>);
  // return <h1>{title}</h1>;
  // return <h1>{props.title}</h1>;
  // return <h1>{`Cool ${props.title}`}</h1>;
  // return <h1>{createTitle(props.title)}</h1>;
  // return <h1>{title ? some : 'Default Title'}</h1>;
  return <h1>{title ? title : 'Default Title'}</h1>;
}

function createTitle(title)
{
  if(title)
  {
      return title;
  }
  else
  {
      return `Default title`;
  }
}

function HomePage()
{
  const names = ["ant", 'elephant', 'horse'];
  var i = 0;
  const [likes, setLikes] = React.useState(6);

  function handleClick()
  {
      console.log("incr like count");
      setLikes(likes + 1);
  }

          // <Header />
  return (
      <div>
          <Header title="React !" />
          <Header title="New title - React !" some="ant data" />
          <ul>
              { names.map(name => ( <li key = {name + i++}>{name}</li> )) }
          </ul>
          <button onClick={handleClick}>Likes {likes}</button>
      </div>
  );
}

ReactDOM.render(<HomePage />, app);