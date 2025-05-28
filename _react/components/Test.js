import { useState } from 'react';

function Home() {
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    console.log(email);
  };

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} value={email} />
      <button onChange={() => handleRegister()}>Register</button>
    </div>
  );
}