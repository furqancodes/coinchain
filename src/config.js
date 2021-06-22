const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  isDevelopment,
  URL: isDevelopment
    ? "http://localhost:8080/users"
    : "https://coinusers-app.herokuapp.com/users",
  APP_URL: isDevelopment
    ? "http://localhost:3001"
    : "https://coinchain-app.herokuapp.com",
};
