import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiFillPrinter } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const Warga = () => {
    const [warga, setWarga] = useState([]);

    useEffect(() =>{
        getWarga
    }, []);

    const getWarga = async () => {
        const response = await axios.get("http://localhost:5000/warga");
        setWarga(response.data);
    };

    const deleteWarga = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/warga/${id}`);
            getWarga();
        } catch (error){
            console.log(error);
        }
    };

    return(
        <div className="container scroll-mx-0">
            <div className="bg-white h-screen">
                <div className="grid grid-cols-5 gap-x-0">
                    <div className="bg-blue-500 h-screen w-64">
                        <div className="text-white text-2xl font-bold flex justify-center mt-4">
                            SETEMA
                        </div>
                        <div className="rounded-md bg-slate-200 w-24 text-center ml-20 mt-4">Admin1
                        </div>
                        <div className="">
                            <Link to={`/Dashboard`}>
                                <div className="grid grid-cols-2 gap-x-0 mt-10 bg-blue-700 py-3">
                                    <div className="ml-5 mt-1 text-white text-xl"><MdOutlineSpaceDashboard /></div>
                                    <div className="-ml-20 text-white text-xl">Dashboard</div>
                                </div>
                            </Link>
                            <Link to={`/KelolaData`}>
                                <div className="grid grid-cols-3 gap-x-0 mt-5">
                                    <div className="ml-5 text-white text-xl mt-1"><FaDatabase /></div>
                                    <div className="-ml-8 text-white text-xl">Kelola Data</div>
                                </div>
                            </Link>
                            <div className="grid grid-cols-2 mt-5">
                                <div className="mt-1 ml-5 text-white text-xl"><FcStatistics /></div>
                                <div className="-ml-20 pl-1 text-white text-xl">Sirkulasi Penduduk</div>
                            </div>
                            <div className="grid grid-cols-2 mt-5">
                                <div className="mt-1 ml-5 text-white text-xl"><FaMailBulk/></div>
                                <div className="-ml-20 pl-1 text-white text-xl">Kelola Surat</div>
                            </div>
                            <Link to={`/Login`}>
                                <div className="grid grid-cols-2 mt-64">
                                    <div className="text-white text-xl ml-16 mt-1"><CiLogout /></div>
                                    <div className="-ml-8 text-white text-xl">Logout</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-5 mt-5 text-2xl w-auto">Kelola Data Warga
                        <div className="inline-flex">
                            <Link to={`/AddWarga`}>
                                <div className="bg-green-300 h-10 w-30 rounded-md mt-20 inline-flex">
                                    <p className="pt-2 text-md"><IoPersonAddSharp /></p>
                                    <p className="text-sm pt-3 font-bold pr-1">Tambah</p>
                                </div>
                            </Link>
                            <div className="bg-yellow-300 h-10 w-30 rounded-md mt-20 ml-2 inline-flex">
                                <p className="pl-1 pt-2 text-md"><AiFillPrinter /></p>
                                <p className="pl-1 text-sm pt-3 font-bold pr-1">Print</p>
                            </div>  
                            <div className="bg-blue-200 h-10 w-fit rounded-md mt-20 ml-2 inline-flex">
                                <p className="flex justify-center pt-2 text-md"><IoMdDownload /></p>
                                <p className="font-bold text-sm pt-3 pl-1 pr-2">Download</p>
                            </div>  
                            <div className="inline-flex bg-slate-200 h-10 mt-20 ml-5 rounded-2xl w-72">
                                <input type="text" placeholder="Search" className="w-72 text-sm pl-4 bg-slate-200 rounded-xl"/>
                                <p className="pt-2 text-md"><IoSearch /></p>
                            </div>
                        </div> 
                        <table className="table-auto border border-slate-300 mt-5">
                           <thead className="text-xl bg-blue-200">
                                <tr>
                                    <th className="pl-2 pr-2">No.</th>
                                    <th className="pr-40">No.KK</th>
                                    <th className="pr-40">NIK</th>
                                    <th className="pr-40">Nama</th>
                                    <th className="pr-3">Jenis_Kelamin</th>
                                    <th className="pr-3 pl-3">Usia</th>
                                    <th className="pr-5 pl-5">Status</th>
                                    <th className="pl-5 pr-5">Pekerjaan</th>
                                    <th className="pl-5 pr-5">Action</th>
                                </tr>
                            </thead>
                                {warga.map((warga, index) => (
                                <tr key={warga.id}>
                                    <td>{index + 1}</td>
                                    <td>{warga.nokk}</td>
                                    <td>{warga.nik}</td>
                                    <td>{warga.nama}</td>
                                    <td>{warga.gender}</td>
                                    <td>{warga.usia}</td>
                                    <td>{warga.sta}</td>
                                    <td>{warga.pekerjaan}</td>
                                    <td>
                                        <div className="inline-flex">
                                            <Link to={`editWarga/${warga.id}`}><div className="ml-5"><FiEdit /></div></Link>
                                            <button onClick={() => deleteWarga(warga.id)}><div className="ml-3"><RiDeleteBin6Line /></div></button>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            <tbody>
                                
                            
                            </tbody>
                        </table>    
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default Warga;