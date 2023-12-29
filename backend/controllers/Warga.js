import Warga from "../models/WargaModels.js";

export const getWarga = async (req, res) => {
  try {
    const response = await Warga.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch warga data" });
  }
};

export const getWargaById = async (req, res) => {
  try {
    const response = await Warga.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ error: "Warga not found" });
  }
};

export const createWarga = async (req, res) => {
  try {
    await Warga.create(req.body);
    res.status(201).json({ msg: "Warga created" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: "Failed to create warga" });
  }
};

export const updateWarga = async (req, res) => {
  try {
    await Warga.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Warga updated" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: "Failed to update warga" });
  }
};

export const deleteWarga = async (req, res) => {
  try {
    await Warga.destroy({
      where: { id: req.params.id },
    });
    res.status(204).json({});
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: "Failed to delete warga" });
  }
};
