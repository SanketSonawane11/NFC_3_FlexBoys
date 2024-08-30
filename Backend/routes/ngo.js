const { Router } = require("express");
const router = Router();
const { NGO } = require("../db/models/ngoModel");
const verifyUser = require('../middlewares/verifyUser');
const jwt = require('jsonwebtoken');
const z = require('zod');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const ngoInput = z.object({
    ngoName: z.string().max(100).trim(),
    city: z.string().max(50).trim(),
    address: z.string().max(200).trim(),
    description: z.string().max(500).trim(),
    logo: z.string().url(),
    certification: z.string().url()
});

router.post('/ngo', async (req, res) => {
    const validInput = ngoInput.safeParse(req.body);
    if (!validInput.success) return res.status(411).json({ message: "Invalid input", validInput });

    try {
        const newNgo = new NGO(req.body);
        const createdNgo = await NGO.create(newNgo);
        res.status(201).json({
            message: "NGO created successfully",
            ngo: createdNgo
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create NGO" });
    }
});

router.get('/ngo/:id', async (req, res) => {
    try {
        const ngo = await NGO.findById(req.params.id);
        if (!ngo) return res.status(404).json({ message: "NGO not found" });
        res.status(200).json({ ngo });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve NGO" });
    }
});

router.put('/ngo/:id', async (req, res) => {
    const validInput = ngoInput.safeParse(req.body);
    if (!validInput.success) return res.status(411).json({ message: "Invalid input", validInput });

    try {
        const updatedNgo = await NGO.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedNgo) return res.status(404).json({ message: "NGO not found" });
        res.status(200).json({ message: "NGO updated successfully", ngo: updatedNgo });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update NGO" });
    }
});

router.delete('/ngo/:id', async (req, res) => {
    try {
        const deletedNgo = await NGO.findByIdAndDelete(req.params.id);
        if (!deletedNgo) return res.status(404).json({ message: "NGO not found" });
        res.status(200).json({ message: "NGO deleted successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete NGO" });
    }
});

module.exports = router;