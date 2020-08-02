import nanoexpress from 'nanoexpress-pro';
import handler from "./handler.mjs";
const app = nanoexpress();

app.ws('/ws', handler);
app.listen(3000, "127.0.0.1").finally();