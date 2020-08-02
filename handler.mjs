import error from "./error.mjs";
export default (req, res) => {
    res.on('connection', ws => {
        ws.on('message', msg =>{
            error();
            ws.send(JSON.stringify({op: "sub", args: msg.args, result: false}))
        });
    });
}