import dotenv from "dotenv";
import type { InitOptions } from "payload/config";
dotenv.config();

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}
export const getPayloadClient = ({ initOptions }: Args) => {
    
};
