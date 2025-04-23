import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'db', 'db.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(fileData);

  res.status(200).json(json.menus);
}