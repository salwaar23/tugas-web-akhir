import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        username,
        password
      });
        alert("Login Berhasil!")
        navigate("../Dashboard");
    } catch (error) {
        alert("username dan password tidak ditemukan")
        console.log(error);
    }
  };

    return (
      <div class="bg-blue-500 h-screen">
        <div className="container mx-auto">
          <div class="flex flex-wrap justify-center">
            <div className="w-80 bg-white shadow-md border border-gray-200 rounded-lg sm:p-6 lg:p-8 mt-40">
                <h1 class="text-2xl font-medium text-center">Hai, Admin!</h1>
                <div className="mt-7 flex justify-center">
                  <form onSubmit={logIn}>
                    <label className="">Username</label>
                    <div><input
                      type="text"
                      placeholder="username"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      class="w-64 bg-slate-200 rounded-md hover:bg-slate-100 p-2"
                    /></div>
                    <label>Password</label>
                    <div><input
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      class="w-64 bg-slate-200 rounded-md hover:bg-slate-100 p-2"
                    /></div>
                    <div className="flex justify-center mt-10 space-x-5">
                      <button type="submit" className="rounded-lg bg-blue-500 hover:bg-slate-300 px-5 py-2 text-white">Login</button>
                      <Link to={`/`}><button type="submit" className="rounded-lg bg-blue-500 hover:bg-slate-300 px-3 py-2 text-white">Kembali</button></Link>
                    </div>
                  </form>
                </div> 
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Login;