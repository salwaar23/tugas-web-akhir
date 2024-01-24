import axios from "axios";
import React, {useState, useEffect} from "react";
import {useNavigate, Link, useParams} from "react-router-dom";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const EditDatang = () => {
    const [datangid, setiddatang] = useState("");
    const [nama, setnama] = useState("");
    const [pelapor, setpelapor] = useState("");
    const navigate = useNavigate("");
    const {id} = useParams("");

    useEffect(() =>{
        getDatangById();
    }, []);

    const updateDatang = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/Datang/${id}`,{
                datangid,
                nama,
                pelapor
            });
            navigate("../datang");
        } catch (error){
            console.log(error);
        }
    };

    const getDatangById = async () => {
        const response = await axios.get(`http://localhost:5000/Datang/${id}`);
        console.log(response)

        setiddatang(response.data.datangid);
        setnama(response.data.nama);
        setpelapor(response.data.pelapor);
    }

    return(
        <div className="container scroll-mx-0">
        <div className="bg-white h-screen">
            <div className="inline-flex gap-x-0">
                <div className="bg-blue-500 h-screen w-64">
                    <div className="text-white text-2xl font-bold flex justify-center mt-4">
                    SETEMA
                    </div>
                    <div className="rounded-md bg-slate-200 w-24 text-center ml-20 mt-4">Admin1
                    </div>
                    <div className="">
                        <Link to={`/Dashboard`}>
                            <div className="grid grid-cols-2 gap-x-0 mt-10 ">
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
                        <Link to={`/Sirkulasi`}>
                            <div className="grid grid-cols-2 mt-5 bg-blue-700 py-3">
                                <div className="mt-1 ml-5 text-white text-xl"><FcStatistics /></div>
                                <div className="-ml-20 pl-1 text-white text-xl">Sirkulasi Penduduk</div>
                            </div>
                        </Link>
                        <Link to={`/Dokumen`}><div className="grid grid-cols-2 mt-5">
                            <div className="mt-1 ml-5 text-white text-xl"><FaMailBulk/></div>
                            <div className="-ml-20 pl-1 text-white text-xl">Dokumen</div>
                        </div></Link>
                        <Link to={`/Login`}>
                            <div className="grid grid-cols-2 mt-64">
                                <div className="text-white text-xl ml-16 mt-1"><CiLogout /></div>
                                <div className="-ml-8 text-white text-xl">Logout</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-auto mt-4 ml-4 text-2xl"> Edit Data Kedatangan
                    <form onSubmit={updateDatang}>
                    <div className="w-full lg:mx-auto mt-20 pl-10">
                            <label className="font-bold text-black text-sm">ID</label>
                                <div className="control">
                                    <input
                                    type="text"
                                    className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                                    value={datangid}
                                    onChange={(e) => setiddatang(e.target.value)}
                                    placeholder="ID"
                                    />
                                </div>
                        </div>
                        <div className="w-full lg:mx-auto mt-5 pl-10">
                            <label className="font-bold text-black text-sm">Nama</label>
                                <div className="control">
                                    <input
                                    type="text"
                                    className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                                    value={nama}
                                    onChange={(e) => setnama(e.target.value)}
                                    placeholder="Nama"
                                    />
                                </div>
                        </div>
                        <div className="w-full lg:mx-auto mt-5 pl-10">
                            <label className="font-bold text-black text-sm">Pelapor</label>
                                <div className="control">
                                    <input
                                    type="text"
                                    className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                                    value={pelapor}
                                    onChange={(e) => setpelapor(e.target.value)}
                                    placeholder="Pelapor"
                                    />
                                </div>
                        </div>
                        <button type="submit" className="ml-5 rounded-md bg-blue-600 text-white px-4 py-1 text-sm font-serif mt-10">
                            Simpan
                        </button>
                    </form>
                </div>
            </div>            
        </div>
    </div>
    )

}

export default EditDatang;