import dns from "node:dns"
import "dotenv/config"
import connectDB from "./db/index.js"

if (process.env.DNS_SERVERS) {
    dns.setServers(process.env.DNS_SERVERS.split(",").map(server => server.trim()))
}

connectDB()
















































// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error", (error)=>{
//             console.log("connection error", error);
//         })
        
//     } catch (error) {
//         console.log("error", error);
//     }
// })()