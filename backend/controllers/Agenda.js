import Agenda from "../models/Agenda.js";

export const getAgenda = async (req, res) => {
  try {
    const response = await Agenda.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch Agenda data" });
  }
};

export const getAgendaById = async (req, res) => {
  try {
    const response = await Agenda.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ error: "Agenda not found" });
  }
};

export const createAgenda = async (req, res) => {
  try {
    await Agenda.create(req.body);
    res.status(201).json({ msg: "Agenda created" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: "Failed to create Agenda" });
  }
};

export const updateAgenda = async (req, res) => {
  try {
    await Agenda.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Agenda updated" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: "Failed to update Agenda" });
  }
};

export const deleteAgenda = async (req, res) => {
  try {
    await Agenda.destroy({
      where: { id: req.params.id },
    });
    res.status(204).json({});
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: "Failed to delete Agenda" });
  }
};
