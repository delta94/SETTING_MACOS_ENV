/* eslint-disable no-console */
import * as nodemailer from 'nodemailer';
import { EMAIL_SEND } from '@/environments';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

import { mailConfig } from '../config/mail.config';

const asyncReadFile = util.promisify(fs.readFile);

const transporter = nodemailer.createTransport({
  host: mailConfig.host,
  port: mailConfig.port,
  secure: mailConfig.secure,
  auth: {
    user: mailConfig.auth.user,
    pass: mailConfig.auth.pass,
  },
});

export interface EmailTemplateOptions {
  template: string;
  data: any;
}

export const renderEmailContent = async ({
  template,
  data,
}: EmailTemplateOptions): Promise<string> => {
  const templatePath = path.join(
    __dirname,
    '..',
    'templates',
    `${template}.hbs`,
  );
  const rawContent = await asyncReadFile(templatePath, 'utf8');
  return handlebars.compile(rawContent)(data);
};

export interface EmailOptions {
  from?: string;
  to: string;
  html: string;
  text?: string;
  subject?: string;
}

export const sendEmail = async ({
  from = EMAIL_SEND,
  to,
  html,
  text = 'Hello world?',
  subject = 'Hello ✔',
}: EmailOptions): Promise<void> => {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      html,
      text,
      subject,
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
