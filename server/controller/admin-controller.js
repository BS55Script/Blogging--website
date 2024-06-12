// controllers/admin-controller.js
import User from '../models/user.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching users' });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Error deleting user' });
    }
};
