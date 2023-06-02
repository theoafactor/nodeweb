const express = require("express");

const server = express();

//routes
server.get("/", function(request, response){

    response.send({
        message: "Server is working fine"
    })

});


server.get("/contact", function(request, response){

    response.send({
        message: "You are on contact page"
    })

})


server.get("/server", (request, response) => {

    response.send("http://nginx")

})

server.listen(4343, () => console.log("Server is listening on PORT 4343"))