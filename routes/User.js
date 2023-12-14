const express = require("express");
const user = require("../model/User");
const router = express.Router();

//return all users
router.get('/return', async (req, res) => {
    try {
        const usersToReturn = await user.find();;
        res.status(200).send(usersToReturn);
    } catch (error) {
        res.status(400).send({ msg: 'cant return all users' });
    }
});

//add a user
router.post('/add', async (req, res) => {
    try {
        const { name, email, password, phoneNumber } = req.body;
        const newUser = new user({ name, email, password, phoneNumber });
        await newUser.save();
        res.status(200).send(newUser);
    } catch (error) {
        res.status(400).send({ msg: 'cant add user' });
    }
});

//edit
router.put('/edit/:_id', async (req, res) => {
    try {
        const {_id}=req.params ;
        const userToEdit=await user.findByIdAndUpdate({_id}, { ...req.body }, { new: true })
        res.status(200).send({ msg: 'user edited', editedUser: userToEdit });
    } catch (error) {
        res.status(400).send({ msg: 'cant edit user' });
    }
});

//delete
router.delete('/delete/:_id', async (req, res) => {
    try {
        const userToDelete = await user.findByIdAndDelete(req.params._id);
        res.status(200).send({ msg: 'user deleted', deletedUser: userToDelete });
    } catch (error) {
        res.status(400).send({ msg: 'cant delete user' });
    }
});

module.exports = router;
