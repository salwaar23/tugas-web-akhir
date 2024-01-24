import KK from "../models/KKModels.js"; 
import Warga from "../models/WargaModels.js";

const getFamilyDetails = async (req, res) => {
    try {
        const result = await KK.findAll({
            include: [{
                model: Warga,
                attributes: ['nik', 'nama_warga', 'gender', 'usia', 'sta', 'pekerjaan']
            }],
            attributes: ['nokk', 'nama_kk', 'anggota']
        });

        res.json(result);
    } catch (error) {
        console.error('Error fetching family details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export { getFamilyDetails };
