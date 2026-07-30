import type { Request, Response } from 'express';
import { sendEmail } from '../../email.js';

export default async function handler(req: Request, res: Response) {
  const { name, email, subject, message } = req.body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: 'Tüm alanlar zorunludur.' });
    return;
  }

  const recipient = process.env.NOTIFICATION_RECIPIENT_EMAIL;
  if (!recipient) {
    console.error('contact.form: NOTIFICATION_RECIPIENT_EMAIL secret eksik');
    res.status(500).json({ error: 'Sunucu yapılandırma hatası.' });
    return;
  }

  const subjectLabels: Record<string, string> = {
    yorum: 'Yazı Hakkında Yorum',
    soru: 'Soru',
    geribildirim: 'Geri Bildirim',
    isbirligi: 'İş Birliği Önerisi',
    diger: 'Diğer',
  };
  const subjectLabel = subjectLabels[subject] ?? subject;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; color: #0A0A0A;">
      <h2 style="color: #1B2A4A; margin-bottom: 4px;">Yönetim Sahnesi — Yeni Mesaj</h2>
      <p style="color: #666; font-size: 13px; margin-top: 0;">İletişim formundan gelen mesaj</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; font-weight: 600; width: 120px; color: #1B2A4A;">Ad Soyad</td>
          <td style="padding: 8px 0;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #1B2A4A;">E-posta</td>
          <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #D4860A;">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #1B2A4A;">Konu</td>
          <td style="padding: 8px 0;">${escapeHtml(subjectLabel)}</td>
        </tr>
      </table>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
      <p style="font-weight: 600; color: #1B2A4A; margin-bottom: 8px;">Mesaj</p>
      <p style="line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      <p style="font-size: 12px; color: #999;">Bu e-posta yonetimsahnesi.com iletişim formu aracılığıyla gönderilmiştir.</p>
    </div>
  `;

  const text = `Yönetim Sahnesi — Yeni Mesaj\n\nAd Soyad: ${name}\nE-posta: ${email}\nKonu: ${subjectLabel}\n\nMesaj:\n${message}`;

  try {
    await sendEmail({
      to: recipient,
      subject: `[Yönetim Sahnesi] ${subjectLabel} — ${name}`,
      html,
      text,
      replyTo: email,
      fromName: 'Yönetim Sahnesi',
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact.form: e-posta gönderilemedi', err);
    res.status(500).json({ error: 'E-posta gönderilemedi. Lütfen tekrar deneyin.' });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
