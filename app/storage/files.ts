"use server";

import path from "path";
import fs from "fs";
import { FILES_DIR } from "./constants";

export const storeFile = async (
  key: string,
  stream: ReadableStream<Uint8Array>,
) => {
  const filePath = path.join(FILES_DIR, key);

  // Ensure the directory exists
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

  // Ensure file does not already exist
  if (fs.existsSync(filePath)) {
    throw new Error(`File ${key} already exists`);
  }

  // Convert ReadableStream to Node.js stream
  const nodeStream = stream.pipeTo(
    new WritableStream({
      write(chunk) {
        return new Promise((resolve, reject) => {
          const buffer = Buffer.from(chunk);
          fs.appendFile(filePath, buffer, (err) => {
            if (err) reject(err);
            else resolve();
          });
        });
      },
    }),
  );

  await nodeStream;
};
