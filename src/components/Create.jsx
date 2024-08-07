import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(name, email, age);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = { name, email, age };

    const response = await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setError("");
      setName("");
      setEmail("");
      setAge("");
      navigate("/all");
    }
  };

  return (
    <div className="container my-5">
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 className="text-center mb-4">Enter the data</h2>
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow-sm bg-light"
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            required
          />
        </div>
        <div className="">
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
