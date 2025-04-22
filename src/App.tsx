import React from 'react';

function App() {
  const [data, setData] = React.useState({ ip: '' , city: '' , country: '' , continent_code: '' , country_code: '' , region: '' , region_code: '' , latitude: '' , longitude: '' , timezone: '' , postal: '' , asn: '' , org: '' , carrier: '' , country_name: '' , continent_name: '' });
  const handleTest = async () => {
    try {
      const response = await fetch('https://ipapi.co/json');
      const data = await response.json();
      setData(data);
    }
    catch(error)
    {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <><button onClick={handleTest}>Button to show ip</button><div>
      <ul>
        <li>{data.ip}</li>
        <li>{data.city}</li>
        <li>{data.country}</li>
        <li>{data.continent_code}</li>
        <li>{data.country_code}</li>
        <li>{data.region}</li>
        <li>{data.region_code}</li> 
        <li>{data.latitude}</li>
        <li>{data.longitude}</li>
        <li>{data.timezone}</li>
        <li>{data.postal}</li>  
        <li>{data.asn}</li>
        <li>{data.org}</li>
      </ul>
    </div></>
  );
}

export default App;
