import React from 'react';

function App() {
  const [data, setData] = React.useState("");
  const handleApi = async () => {
    try {
      const response = await fetch('https://ipapi.co/json');
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    catch(error)
    {
      console.error('Error fetching data:', error);
    }
  };

  return(
    <div>
      <h1>Api Test : </h1>
      <button onClick={handleApi}>Press Api</button>
      <div>
        {Object.entries(data).map(([key , value]) => (
          <li>{key} : {value}</li>
            
        ))}
      </div>
    </div>
  )
}

export default App;
