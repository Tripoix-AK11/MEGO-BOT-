const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
};

const toBool = (x) => (x && (x.toLowerCase() === 'true' || x.toLowerCase() === 'on')) || false;
const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  //__________________________________________________________________________________________________________________________________________
 // For Enabling Commands Like AUTO_STATUS_VIEW Type true For Disabling Type false  
//____________________________________________________________________________________________________________________________________________  
  SESSION_ID: process.env.SESSION_ID || 'levanter_2862938311bb53456d8c87e430b4026c33',
  STICKER_DATA: process.env.STICKER_DATA || '🎯mego-bot.egy',
  ALIVE_DATA: process.env.ALIVE_DATA || '👋 مراحب &sender, انا *mego-bot* !\n\n📌 اكتب *menu* ᴛᴏ ɢᴇᴛ ᴍʏ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ.\n\n*ᴘʟᴀᴛꜰᴏʀᴍ:* &platform\n*ʀᴜɴᴛɪᴍᴇ:* &runtime;https://i.ibb.co/tHWJrz3/IMG-20231128-WA0005.jpg',
  AUDIO_DATA: process.env.AUDIO_DATA || 'mego-bot https://ibb.co/93SdCGL9',
  BOT_INFO: process.env.BOT_INFO || 'mego-bot ;201116977576;https://ibb.co/93SdCGL9', 
  PREFIX: process.env.PREFIX || '.',
  MODE: process.env.MODE || 'public',
  SUDO: process.env.SUDO || '201116977576, 201116977576',
  START_MSG: toBool(process.env.START_MSG || 'true'),
  ERROR_MSG: toBool(process.env.ERROR_MSG || 'true'), 
  WELCOME_MSG: process.env.WELCOME_MSG || '👋 منور *@user* مرحب بيك في بوت ميغو *@gname*\n*Total Members:* @count\n*Total Admins:* @admin\n*Group Description:*\n@gdesc @pp',
  GOODBYE_MSG: process.env.GOODBYE_MSG || '👋 مع السلامه *@user* From *@gname*\n*Total Members:* @count @pp',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  RENDER_NAME: process.env.RENDER_NAME || '',
  RENDER_API: process.env.RENDER_API || '',
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || '',
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || '',
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || '',
  TIMEZONE: process.env.TIMEZONE || "Africa/Egypt",
  LANG: process.env.LANG || 'AR',
  AUTO_STATUS_VIEW: toBool(process.env.AUTO_STATUS_VIEW || 'false'),
  AUTO_STATUS_REPLY: toBool(process.env.AUTO_STATUS_REPLY || 'false'),
  AUTO_STATUS_REPLY_MSG: process.env.AUTO_STATUS_REPLY_MSG || '_*الحالة كويسة ⛩️🧾*_',
  AUTO_STATUS_REACT: toBool(process.env.AUTO_STATUS_REACT || 'true'),
  AUTO_STATUS_REACT_EMOJI: process.env.AUTO_STATUS_REACT_EMOJI || '⛩️',
  AUTO_REACT: toBool(process.env.AUTO_REACT || 'true'),
  AUTO_READ_MSG: toBool(process.env.AUTO_READ_MSG || 'true'),
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE || 'true'),
  AUTO_CALL_REJECT: toBool(process.env.AUTO_CALL_REJECT || 'false'),
  AUTO_CALL_REJECT_MSG: process.env.AUTO_CALL_REJECT_MSG || '*ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ᴄᴀʟʟ ʙʟᴏᴄᴋɪɴɢ*\n\nꜱᴏʀʀʏ ᴄᴀʟʟꜱ ᴀʀᴇ ɴᴏᴛ ᴀʟʟᴏᴡᴇᴅ\n\nᴘʟᴇᴀꜱᴇ ꜱᴇɴᴅ ᴀ ᴛᴇxᴛ ᴍᴇꜱꜱᴀɢᴇ/ᴠᴏɪᴄᴇ ᴍᴇꜱꜱᴀɢᴇ\n\n> ᴘʜᴏᴇɴɪx-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
//_______________#OTHER(⚠️ Warning Dont Edit Anything Here)____________________________________________________________________________________
  BASE_URL: 'https://abhi-api-wphp.onrender.com/', // Don't Change This
  BRANCH: 'main',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false })
};
