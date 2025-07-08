import fs from  "fs"
export const cardData = JSON.parse(fs.readFileSync("data/kartlar.json", "utf-8"));
