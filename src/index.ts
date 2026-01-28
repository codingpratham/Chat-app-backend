import {createServer} from "http"
import express from "express"
import { Server } from "socket.io";
const app = express()
const httpServer = createServer(app);
const socket = new Server(httpServer,{})


socket.on("connection",(socket)=>{
  console.log("connected in the websocket")
  console.log(socket);
  
})


httpServer.listen(process.env.PORT,()=>{
  console.log("server is running")
})






