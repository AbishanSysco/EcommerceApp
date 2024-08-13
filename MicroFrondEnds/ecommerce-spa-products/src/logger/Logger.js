// import pino from "pino"

// export const  Logger = pino({
//     level :  process.env.LOG_LEVEL || 'info'
// });
import log from 'loglevel';

log.setLevel('INFO');

export default log