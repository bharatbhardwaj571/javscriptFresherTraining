
import {config} from 'dotenv';

config();

export const envConfig = Object.freeze(process.env.PORT)
