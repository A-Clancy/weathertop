import { userStore } from "../models/user-store.js";

export const accountsController = {
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },

  login(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("login-view", viewData);
  },

  logout(request, response) {
    response.cookie("weatherTop", "");
    response.redirect("/");
  },

  signup(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("signup-view", viewData);
  },

  async register(request, response) {
    const user = request.body;
    await userStore.addUser(user);
    console.log(`registering ${user.email}`);
    response.redirect("/");
  },

  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie("weatherTop", user.email);
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
    }
  },

  async getLoggedInUser(request) {
    const userEmail = request.cookies.weatherTop;
    return await userStore.getUserByEmail(userEmail);
  },
  
  //editing the user account details. 
  async profile(request, response) {
    const loggedInUser = await this.getLoggedInUser(request);
    const viewData = {
    title: "User Details",
    user: loggedInUser,
    active: "profile"
    };
    response.render("profile-view", viewData);
  },

  // UPdate the details. 
  async updateProfile(request, response) {
    const loggedInUser = await this.getLoggedInUser(request);
    const updatedUser = request.body;

    loggedInUser.firstName = updatedUser.firstName;
    loggedInUser.lastName = updatedUser.lastName;
    loggedInUser.email = updatedUser.email;
    loggedInUser.password = updatedUser.password;

    await userStore.updateUser(loggedInUser._id, loggedInUser);
    response.redirect("/profile");
  },
};
      