import React, { useState } from "react";
import axios from "axios";

const SignupFormComponent = () => {
  const [users, setUsers] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/User/userSignup",
        {
          firstName: e.target.firstName.value,
          email: e.target.email.value,
        }
      );

      if (pushDetails.status === 200) {
        console.log("The process is successful");
      } else {
        console.log("Error occurred");
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:21000/api/v1/User/getUsers"
      );
      setUsers(response.data.data);
    } catch (err) {
      console.log("GET error:", err);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />

        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" name="firstName" />

        <button type="submit">Submit</button>
      </form>

      <hr />

      <h2>Fetch All Users</h2>
      <button onClick={getUsers}>Get Users</button>

      {users.length > 0 && (
        <div>
          <h3>User List:</h3>
          {users.map((user) => (
            <div
              key={user._id}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <p><b>Name:</b> {user.firstName}</p>
              <p><b>Email:</b> {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SignupFormComponent;

// import React, { useState } from "react";
// import axios from "axios";

// const SignupFormComponent = () => {
//   const [message, setMessage] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const pushDetails = await axios.post(
//         "http://localhost:21000/api/v1/User/userSignup",
//         {
//           firstName: e.target.firstName.value,
//           secondName: e.target.secondName.value,
//           mobileNumber: e.target.mobileNumber.value,
//           email: e.target.email.value,
//           password: e.target.password.value,
//         }
//       );

//       setMessage(pushDetails.data.message);
//     } catch (e) {
//       setMessage(e.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <label>First Name</label>
//         <input type="text" name="firstName" required />

//         <label>Second Name</label>
//         <input type="text" name="secondName" />

//         <label>Mobile Number</label>
//         <input type="text" name="mobileNumber" required />

//         <label>Email</label>
//         <input type="email" name="email" required />

//         <label>Password</label>
//         <input type="password" name="password" required />

//         <button type="submit">Submit</button>
//       </form>

//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default SignupFormComponent;

