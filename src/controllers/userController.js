//import  userModel from '../models/userModel';

export default  {
  getAllUsers: (req, res) => {
    const users = userModel.findAll();
    res.render('index', { users });
  },
  createUser: (req, res) => {
    const { name } = req.body;
    userModel.create({ name });
    res.redirect('/users');
  },
};
