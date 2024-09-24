import React from "react";
import { link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Todo App!</h1>
      <p>
        <Link to="/todos">Go to Todo List</Link>
      </p>
    </div>
  );
}
export default Home;