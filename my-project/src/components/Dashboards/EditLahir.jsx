import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const EditLahir = () => {
    const [lahirid, setidlahir] = useState("");
    const [nama, setnama] = useState("");
    const [nokk, setnokk] = useState("");
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getLahirById();
    }, []);

    const updateLahir = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/Lahir/${id}`,{
                lahirid,
                nama,
                nokk
            });
            Navigate("../Lahir");
        } catch (error){
            console.log(error);
        }
    };

    const getLahirById = async () => {
        const response = await axios.get(`http://localhost:5000/Lahir/${id}`);
        console.log(response)

        setidlahir(response.data.lahirid);
        setnama(response.data.nama);
        setnokk(response.data.nokk);
    }

    return(
        <div className="container scroll-mx-0">
            <div className="bg-white h-screen">
                <div className="inline-flex gap-x-0">
                    <div className="bg-blue-500 h-screen w-[265px]">
                        <div className="text-white text-2xl font-bold flex justify-center mt-4">
                            SETEMA
                        </div>
                        <div className="rounded-md bg-slate-200 w-24 text-center ml-20 mt-4">Admin1
                        </div>
                        <div className="">
                            <Link to={`/Dashboard`}>
                                <div className="inline-flex gap-x-0 mt-10 ">
                                    <div className="ml-5 mt-1 text-white text-xl"><MdOutlineSpaceDashboard /></div>
                                    <div className="ml-[30px] text-white text-xl">Dashboard</div>
                                </div>
                            </Link>
                            <Link to={`/KelolaData`}>
                                <div className="inline-flex gap-x-0 mt-5">
                                    <div className="ml-5 text-white text-xl mt-1"><FaDatabase /></div>
                                    <div className="ml-[30px] text-white text-xl">Kelola Data</div>
                                </div>
                            </Link>
                            <Link to={`/Sirkulasi`}>
                                <div className="inline-flex mt-5 bg-blue-700 py-3">
                                    <div className="mt-1 ml-5 text-white text-xl"><FcStatistics /></div>
                                    <div className="ml-[30px] pl-1 text-white text-xl pr-[25px]">Sirkulasi Penduduk</div>
                                </div>
                            </Link>
                            <Link to={`/Dokumen`}><div className="inline-flex mt-5">
                                <div className="mt-1 ml-5 text-white text-xl"><FaMailBulk/></div>
                                <div className="ml-[31px] pl-1 text-white text-xl">Dokumen</div>
                            </div></Link>
                            <Link to={`/Login`}>
                                <div className="grid grid-cols-2 mt-64">
                                    <div className="text-white text-xl ml-16 mt-1"><CiLogout /></div>
                                    <div className="-ml-8 text-white text-xl">Logout</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-auto mt-4 ml-4 text-2xl">Edit Data Kelahiran
                    <form onSubmit={updateLahir}>
                            <div className="w-full lg:mx-auto mt-20 pl-5">
                                <label className="font-bold text-black text-sm">ID Lahir</label>
                                    <div className="control">
                                        <input
                                        type="text"
                                        className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                                        value={lahirid}
                                        onChange={(e) => setidlahir(e.target.value)}
                                        placeholder="ID Lahir"
                                        />
                                    </div>
                            </div>
                            <div className="w-full lg:mx-auto pl-5">
                                <label className="font-bold text-black text-sm">Nama</label>
                                    <div className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2">
                                        <div className="select is-fullwidth">
                                            <input type="text"
                                            value={nama}
                                            onChange={(e) => setnama(e.target.value)}
                                            className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                                            />
                                        </div>
                                    </div>
                            </div>
                            <div className="w-full lg:mx-auto pl-5">
                                <label className="font-bold text-black text-sm">No. KK</label>
                                    <div className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2">
                                        <div className="select is-fullwidth">
                                            <input type="text"
                                            placeholder="No. KK"
                                            value={nokk}
                                            onChange={(e) => setnokk(e.target.value)}
                                            className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                                            />
                                        </div>
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
    );
};

export default EditLahir;