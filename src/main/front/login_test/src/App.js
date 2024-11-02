import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [greetings, setGreetings] = useState([]);

  useEffect(() => {
    // Spring Boot API 호출
    fetch('http://localhost:8080/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));

    // 두 번째 API 호출
    fetch('http://localhost:8080/showMe')
      .then(response => response.json())
      .then(data => setGreetings(data))
      .catch(error => console.error('Error fetching greetings:', error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <h2>인사말:</h2>
      <ul>
        {greetings.map((greeting, index) => (
          <li key={index}>{greeting}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
