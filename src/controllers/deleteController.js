const User = require('../models/User'); // Import the User model
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // Extract user ID from request parameters
        
        const deletedUser = await User.findByIdAndDelete(id); // Delete the user

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
}; 