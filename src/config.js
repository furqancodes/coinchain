const isDevelopment = process.env.NODE_ENV === 'development'

module.exports={
    isDevelopment,
    URL: isDevelopment ? 'http://localhost:8080/users' : 'https://coinusers-app.herokuapp.com/users',
}