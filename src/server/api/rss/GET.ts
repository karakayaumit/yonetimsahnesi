import type { Request, Response } from 'express';
import { articles } from './articles-data.js';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default function handler(req: Request, res: Response) {
  const base = `${req.protocol}://${req.get('host')}`;

  const items = articles
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((article) => {
      const url = `${base}/yazilar/${article.id}`;
      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(article.excerpt)}</description>
      <category>${escapeXml(article.category)}</category>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    </item>`;
    })
    .join('');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Yönetim Sahnesi</title>
    <link>${escapeXml(base)}</link>
    <description>Proje yönetimi, program yönetimi, ekip liderliği ve dijital dönüşüm üzerine Türkçe içerikler.</description>
    <language>tr</language>
    <atom:link href="${escapeXml(`${base}/rss.xml`)}" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  res.type('application/rss+xml').send(feed);
}
