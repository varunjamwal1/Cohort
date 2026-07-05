import React from 'react';
import Login from './Login'; // Imports the Login component
import Register from './Register'; // Imports the Register component
import User from './User'; // Imports the User component

const App = () => {
  // State to toggle between Login screen (false) and Register screen (true)
  let [toggle, setToggle] = React.useState(false);

  // State array to store all newly registered user objects. Starts empty.
  let [user, setUser] = React.useState([]);

  return (
    <>
      {/* Conditional Rendering: If toggle is true, show Register. If false, show Login */}
      {toggle ? (
        <Register setToggle={setToggle} setUser={setUser} />
      ) : (
        <Login setToggle={setToggle} />
      )}

      {/* Main Container for the registered users list section */}
      <div className="bg-slate-100 p-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading displayed only if there are users in the array */}
          {user.length > 0 && (
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
              Registered Users
            </h1>
          )}

          {/* Grid Layout Container: Dynamically scales from 1 to 3 columns depending on screen size */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Loop through the user state array and render a User card component for each object */}
            {user.map((elem, index) => (
              // Passing the index as a unique 'key' to optimize React rendering performance
              <User key={index} user={elem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App; // Exports App as the default component