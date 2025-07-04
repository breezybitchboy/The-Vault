import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { alias, contact, reason } = req.body;
  const logPath = path.join(process.cwd(), 'data', 'access-requests.log');
  const entry = `\n[${new Date().toISOString()}] Alias: ${alias}, Contact: ${contact}, Reason: ${reason}`;

  try {
    fs.appendFileSync(logPath, entry);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Failed to write log:', err);
    res.status(500).json({ error: 'Failed to log request' });
  }
}
