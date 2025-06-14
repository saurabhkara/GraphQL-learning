import "dotenv/config";
import "express-async-errors"

//external libraries
import cors from "cors";
import express from "express";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';



// constants
const PORT = process.env.PORT || 3001;
const ENV = process.env.NODE_ENV;
const GRAPHQL_PATH = '/graphql1';

const app = express();
const httpserver = http.createServer(app)


async function startServer() {

    await new Promise<void>((resolve, reject) => {
        httpserver.listen({ port: PORT }, resolve)
    }).then(() => {
        console.log('Server started at ', `https://localhost:${PORT}/${GRAPHQL_PATH}`)
    })
}

startServer()

console.log(process.env.NODE_ENV)
console.log(process.env.PORT)