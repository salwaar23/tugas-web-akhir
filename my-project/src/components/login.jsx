import { Link } from "react-router-dom";

export default function Login() {
    return (
      <div class="bg-blue-500 h-screen">
        <div className="container mx-auto">
          <div class="flex flex-wrap justify-center">
            <div className="w-80 bg-white shadow-md border border-gray-200 rounded-lg sm:p-6 lg:p-8 mt-40">
                <h1 class="text-2xl font-medium text-center">Hai, Admin!</h1>
                <div className="mt-7 flex justify-center">
                  <form>
                    <label className="">Username</label>
                    <div><input
                      type="text"
                      placeholder="username"
                      class="w-64 bg-slate-200 rounded-md hover:bg-slate-100 p-2"
                    /></div>
                    <label>Password</label>
                    <div><input
                      type="password"
                      placeholder="password"
                      class="w-64 bg-slate-200 rounded-md hover:bg-slate-100 p-2"
                    /></div>
                    <div className="flex justify-center mt-10 space-x-5">
                      <Link to={`/Dashboard`}><button type="submit" className="rounded-lg bg-blue-500 hover:bg-slate-300 px-5 py-2 text-white">Login</button></Link>
                      <Link to={`/`}><button type="submit" className="rounded-lg bg-blue-500 hover:bg-slate-300 px-3 py-2 text-white">Kembali</button></Link>
                    </div>
                  </form>
                </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }