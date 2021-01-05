const express = require("express");

const userRouter = express.Router();
const User = require("../models/users");

/*-----------------CREATE USER WITH ASYNC--------------*/
userRouter.post("/users", async (req, res) => {
  try {
    const userData = new User(req.body);
    const createUser = await userData.save();
    res.status(201).send(`user created ${createUser}`);
  } catch (err) {
    res.status(500).send(err);
  }
});
/*------------------CREATE USER WITH PROMISE-------------- */
// userRouter.post("/users", (req, res) => {
//   const userData = new User(req.body);
//   console.log(userData);
//   userData
//     .save()
//     .then(() => res.send(`user created ${userData}`))
//     .catch((err) => res.send(err));
// });

/*-----------------GET USER--------------*/
userRouter.get("/users", async (req, res) => {
  try {
    const usersData = await User.find();
    res.send(usersData);
  } catch (err) {
    res.send(err);
  }
});

//----------- find query

userRouter.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    // console.log(_id);
    const userData = await User.findById(_id);
    res.send(userData);
  } catch (err) {
    res.send("No such user");
  }
});

/*--------------------UPDATE DATA(PATCH)---------------*/

userRouter.patch("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(updateUser);
    res.send(updateUser);
  } catch (err) {
    res.send("error updating");
  }
});

/*--------------------DELETE DATA-----------------------*/

userRouter.delete("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(_id);
    res.status(200).send(`${deleteUser.email} is deleted`);
  } catch (e) {
    res.status(404).send("No such user");
  }
});

module.exports = userRouter;
