import React, { useState, useEffect } from "react";

function MyAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name") || "";
    const savedEmail = localStorage.getItem("email") || "";
    setName(savedName);
    setEmail(savedEmail);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    alert("Saved successfully!");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Account</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSave}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#205760', border: 'none' }}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
