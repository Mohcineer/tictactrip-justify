import type { Request, Response, NextFunction } from 'express';

// Simulation d'une base de données en mémoire
// Dans un vrai projet pro, on utiliserait Redis ou SQLite
const wordCounts = new Map<string, { count: number; date: string }>();

export const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token missing' });
  }

  const today = new Date().toISOString().split('T')[0] || "";
  const currentUsage = wordCounts.get(token) || { count: 0, date: today };


  if (currentUsage.date !== today) {
    currentUsage.count = 0;
    currentUsage.date = today;
  }


  const text = typeof req.body === 'string' ? req.body : "";
  const wordsInRequest = text.trim().split(/\s+/).filter(w => w.length > 0).length;

  if (currentUsage.count + wordsInRequest > 80000) {
    return res.status(402).send('Payment Required: Daily limit of 80,000 words exceeded');
  }


  currentUsage.count += wordsInRequest;
  wordCounts.set(token, currentUsage);
  
  next();
};