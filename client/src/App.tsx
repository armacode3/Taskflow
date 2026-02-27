import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState<string>("Checking...");

  useEffect(() => {
    fetch("http://localhost:3000/health")
      .then((res) => res.json())
      .then((data) => setHealth(`Server status ${data.status}`))
      .catch(() => setHealth("Server unreachable"));
  }, []);

  return (
    <div>
      <h1>Taskflow</h1>
      <p>{health}</p>
    </div>
  );
}

export default App;