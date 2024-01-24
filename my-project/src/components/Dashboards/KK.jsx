import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ExcelJS from "exceljs";

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

const KK = () => {
    const [kk, setKK] = useState([]);
    const [selectedKK, setSelectedKK] = useState({ members: [] });
    const [showModal, setShowModal] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() =>{
        getKK();
    }, []);

    const getKK = async () => {
        const response = await axios.get("http://localhost:5000/KK");
        setKK(response.data);
    };

    const deleteKK = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/KK/${id}`);
            getKK();
        } catch (error){
            console.log(error);
        }
    };

    const showFamilyMembers = async (nokk) => {
        try {
          const response = await axios.get(`http://localhost:5000/family/${nokk}`);
          console.log("API Response:", response);
      
          const familyData = response.data;

          const selectedFamily = familyData.find((family) => family.nokk === nokk);

          if (selectedFamily) {
            setSelectedKK({ nokk, members: selectedFamily.wargas });
            setShowModal(true);
              } else {
                console.error("Invalid data structure received from the API");
                console.log("Family Data:", familyData); 
                setSelectedKK(null);
              }
        } catch (error) {
          console.error("Error fetching family members:", error);
          setSelectedKK(null);
        }
      };

      const searchKK = () => {
        const lowerCaseKeyword = searchKeyword.toLowerCase();
        const filteredKK = kk.filter((item) => {
          const lowerCaseName = item.nama_kk.toLowerCase();
          const lowerCaseNokk = item.nokk.toLowerCase();
          return lowerCaseName.includes(lowerCaseKeyword) || lowerCaseNokk.includes(lowerCaseKeyword);
        });
        setSearchResults(filteredKK);
      };
      
      const closeModal = () => {
        setShowModal(false);
      };  
    
    const handlePrint = () => {
        const currentDate = new Date().toLocaleDateString();
      
        const printContent = `
          <html>
            <head>
              <title>Cetak Tabel Warga</title>
              <style>
                h1{
                    font-size: 26px;
                    text-align: center;
                }
                p{
                    font-size: 12px;
                }
                table{
                    border-collapse: collapse;
                    width: 100%;
                }
                th {
                    border: 1px solid #ddd;
                    padding: 4px;
                    text-align: left;
                    font-size: 12px;
                }
                td {
                    border: 1px solid #ddd;
                    padding: 4px;
                    text-align: left;
                    font-size: 12px;
                }  
              </style>
            </head>
            <body>
              <h1 class="text-2xl font-bold flex justify-center">Data KK RT 005/014</h1>
              <p>Tanggal Cetak: ${currentDate}</p>
              
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>No. KK</th>
                    <th>Kepala Keluarga</th>
                    <th>Jumlah Anggota</th>
                  </tr>
                </thead>
                <tbody>
                  ${kk.map((item, index) => `
                    <tr key=${item.id}>
                      <td>${index + 1}</td>
                      <td>${item.nokk}</td>
                      <td>${item.nama_kk}</td>
                      <td>${item.anggota}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </body>
          </html>
        `;
      
        const printFrame = document.createElement('iframe');
        printFrame.style.display = 'none';
        document.body.appendChild(printFrame);
  
        printFrame.contentDocument.write(printContent);
        printFrame.contentDocument.close();
        printFrame.contentWindow.print();
        
        document.body.removeChild(printFrame);
      };

      const createExcelFile = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Sheet 1");
      
        const headerRow = worksheet.addRow(["No.", "Nama KK", "Jumlah Anggota"]);
        headerRow.font = { bold: true };
        headerRow.eachCell((cell) => {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "40A2D8" }, 
          };
          cell.border = { top: { style: "thin" }, bottom: { style: "thin" }, left: {style: "thin"}, right:{style: "thin"} };
        });
      
        
        kk.forEach((item, index) => {
          const dataRow = worksheet.addRow([index + 1, item.nama_kk, item.anggota]);
          dataRow.eachCell((cell) => {
            cell.border = { top: { style: "thin" }, bottom: { style: "thin" },  left: {style: "thin"}, right:{style: "thin"} };
          });
        });

        worksheet.columns.forEach((column) => {
            let maxLength = 0;
            column.eachCell({ includeEmpty: true }, (cell) => {
              const textLength = cell.text ? cell.text.length : 0;
              maxLength = Math.max(maxLength, textLength);
            });
            column.width = maxLength < 12 ? 12 : maxLength;
          });
        
        const buffer = await workbook.xlsx.writeBuffer();
      
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "data_kk.xlsx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      

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
                                <div className="grid grid-cols-2 gap-x-0 mt-10 ">
                                    <div className="ml-5 mt-1 text-white text-xl"><MdOutlineSpaceDashboard /></div>
                                    <div className="-ml-20 text-white text-xl">Dashboard</div>
                                </div>
                            </Link>
                            <Link to={`/KelolaData`}>
                                <div className="grid grid-cols-3 gap-x-0 mt-5 bg-blue-700 py-3">
                                    <div className="ml-5 text-white text-xl mt-1"><FaDatabase /></div>
                                    <div className="-ml-8 text-white text-xl">Kelola Data</div>
                                </div>
                            </Link>
                            <Link to={`/Sirkulasi`}>
                                <div className="grid grid-cols-2 mt-5">
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
                    <div className="ml-5 mt-5 text-2xl w-auto">Kelola Data KK<br />
                        
                        <div className="inline-flex">
                            <Link to={`/AddKK`}>
                                <div className="bg-green-300 h-10 w-30 rounded-md mt-20 inline-flex">
                                    <p className="pt-2 text-md"><IoPersonAddSharp /></p>
                                    <p className="text-sm pt-3 font-bold pr-1">Tambah</p>
                                </div>
                            </Link>
                            <button onClick={handlePrint} className="bg-yellow-300 h-10 w-30 rounded-md mt-20 ml-2 inline-flex">
                                <p className="pl-1 pt-2 text-md"><AiFillPrinter /></p>
                                <p className="pl-1 text-sm pt-3 font-bold pr-1">Print</p>
                            </button>  
                            <button onClick={createExcelFile} className="bg-blue-200 h-10 w-fit rounded-md mt-20 ml-2 inline-flex">
                                <p className="flex justify-center pt-2 text-md"><IoMdDownload /></p>
                                <p className="font-bold text-sm pt-3 pl-1 pr-2">Download</p>
                            </button>  
                            <div className="inline-flex bg-slate-200 h-10 mt-20 ml-5 rounded-2xl w-72">
                                <input type="text" placeholder="Search" className="w-72 text-sm pl-4 bg-slate-200 rounded-xl"
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}/>
                                <button onClick={searchKK} className="pt-2 text-md"><IoSearch /></button>
                            </div>
                        </div> 
                        <table className="table-auto border border-slate-300 mt-5">
                           <thead className="text-xl bg-blue-200">
                                <tr>
                                    <th className="border border-slate-400 text-center px-2">No.</th>
                                    <th className="border border-slate-400 text-center">No.KK</th>
                                    <th className="border border-slate-400 text-center px-6">Kepala Keluarga</th>
                                    <th className="border border-slate-400 text-center px-2">Jumlah Anggota</th>
                                    <th className="border border-slate-400 text-center px-4">Action</th>
                                </tr>
                            </thead> 
                            <tbody>
                            {(searchResults.lenght > 0 ? searchResults : kk).map((kk, index) => (
                                <tr key={kk.id}>
                                    <td className="border border-slate-400 text-sm text-center pt-2 px-2">{index + 1}</td>
                                    <td className="border border-slate-400 text-sm text-center px-4">{kk.nokk}</td>
                                    <td className="border border-slate-400 text-sm text-left pl-2">{kk.nama_kk}</td>
                                    <td className="border border-slate-400 text-sm text-center">{kk.anggota}</td>
                                    <td className="border border-slate-400 text-center px-2">
                                        <div className="inline-flex">
                                            <Link to={`/EditKK/${kk.id}`}><div className="ml-5"><FiEdit /></div></Link>
                                            <button onClick={() => deleteKK(kk.id)}><div className="ml-3"><RiDeleteBin6Line /></div></button>
                                            <button onClick={() => showFamilyMembers(kk.nokk)}
                                                    className="ml-3 bg-blue-200 text-sm px-2 py-1 rounded-md"
                                                >
                                                    Lihat Anggota
                                                </button>
                                        </div>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>   
                    </div>
                </div>            
            </div>
              {showModal && (
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div
                  className="absolute inset-0 bg-gray-500 opacity-75"
                  onClick={closeModal}
                ></div>
              </div>

              {/* Modal content */}
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 ml-[150px]">
                        Anggota Keluarga
                      </h3>
                      {selectedKK.members.map((member) => (
                        <div key={member.id}>
                          <p>
                            <strong>Nama :</strong> {member.nama_warga}
                          </p>
                          <p>
                            <strong>NIK   :</strong> {member.nik}
                          </p>
                          <br /> 
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Kembali
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
        
    );
};

export default KK;