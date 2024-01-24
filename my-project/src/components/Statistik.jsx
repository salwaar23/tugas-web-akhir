import { Link } from "react-router-dom";
import axios from "axios";
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import React, { useState, useEffect } from "react";

const Statistik = () =>{
    const [warga, setWarga] = useState("");

    useEffect(() =>{
        getWarga();
    });

    const getWarga = async () => {
        const response = await axios.get("http://localhost:5000/warga");
        setWarga(response.data);
    };

    const calculateGenderData = () => {
    const jumlahLakiLaki = warga && warga.filter(item => item.gender === 'Laki-laki').length;
    const jumlahPerempuan = warga && warga.filter(item => item.gender === 'Perempuan').length;

    return [
      { name: 'Laki-Laki', value: jumlahLakiLaki },
      { name: 'Perempuan', value: jumlahPerempuan },
    ];
  };

  const calculateAgeData = () => {
    const usiaProduktif = warga && warga.filter(item => item.usia >= 18 && item.usia <= 60).length;
    const usiaTidakProduktif = warga && warga.filter(item => item.usia < 18 || item.usia > 60).length;

    return [
      { name: 'Produktif', value: usiaProduktif },
      { name: 'Tidak Produktif', value: usiaTidakProduktif },
    ];
  };
  const genderData = calculateGenderData();
  const ageData = calculateAgeData();

  const COLORS = ['#0B60B0', '#FF6868'];

    return(
        <div className="bg-blue-500 h-screen w-full">
            <div className="bg-white flex">
                <Link to={`/`} className="my-7 ml-72 text-blue-500 font-bold hover:text-slate-300"><div>Beranda</div></Link>
                <Link to={`/Struktur`}><div className="ml-10 my-4 font-bold text-blue-500 hover:text-slate-300">Struktur<br /> Kepengurusan</div></Link>
                <Link to={`/Program`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Program</div></Link>
                <Link to={`/Statistik`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Statistik</div></Link>
                <Link to={`/Pengaduan`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Pengaduan</div></Link>
                <Link to={`/Administrasi`}><div className="ml-10 my-4 font-bold text-blue-500 hover:text-slate-300">Pengajuan<br />Administrasi</div></Link>
                <Link to={`/Agendaa`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Agenda</div></Link>
                <Link to={`/Login`}><button className="bg-blue-500 rounded-md h-10 text-white w-20 ml-48 mt-5 font-bold hover:bg-blue-300">Admin</button></Link>
            </div>
            <div className="text-white text-center text-2xl font-mono mt-4 font-bold">
                STATISTIK PENDUDUK
                <p className="text-xl">RT 005/RW 014 DESA NANJUNG MEKAR KEC. RANCAEKEK</p>
            </div>
            <div className="inline-flex ml-[270px] mt-[30px] bg-white">
      <div className="">
        <PieChart width={400} height={400}>
          <Pie data={genderData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {genderData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="ml-10">
        <PieChart width={400} height={400}>
          <Pie data={ageData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {ageData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
        </div>
    )
}

export default Statistik;