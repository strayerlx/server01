


// declare module "./Core" {
//     interface Connection {
//         playerId: number
//     }
// }

import { MyServer } from "./Core"

let C_PORT = 3001

const server = new MyServer({ port: C_PORT })