//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU0zbzBLTVdOLytiT2phcDFrSlpLL1JraE5HSXlTTWNmUHFaNk9Cd2VYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGNpOUFXWlM2UUMxdXZ1aS9HK3loOHNtdU5rVXRpV1BoR1krTmZ1bm9BWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTXNpVlVFUUJubFQyQW93bUw0WkdCcW0vVHBEWkhIb2NES0NPRHZvejFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvREYzWHZYTFZNdVczbGZON2o4TEFObTgrbW1vUDJtbFFNYms2NnNZYmtFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldLN2wwTGtTVENSbnJBOEJFYnA4bTdWdUhYcXVHbTZBWXB5NEV4K05MMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9GTXZoSlJFRVMzclhkbVNHbGVIUnJvWEtrN0hncmlNZGhYRHFQd3RqM3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURybjNJcXZQUk9DMkRTZEM1OWlBVnBSVGlLSGdXTkxTTUZWa3BLN3ZIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDB4Zlk4NUlnSW5TS3l6cnU1SHBmcHlxRVBvdzhZQ0tJRFBnOGgrZDZsYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRseHUzQ0gyUXNkdCtmb3ZSOTdOM2FST0VVU2hOcVJmYVAzbW4wU1E5Tis2eWF5cStHa3pkWklkQWFnM3BacDl3WEs1MTNKWElGSWpDN1ZMSTJHRWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJ6akdyNWlVc3E3UFVRRUZkU3ZyL2NiNEZHTW9vbGVIYWNmaWxTaUE5M3ZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiUnNMNWFENlJnQ0ZkRjdzUXFscjhBIiwicGhvbmVJZCI6IjJhZjljOTBmLTE5ZTctNDA5MS05YTFiLTFkMWE2OWEyYWEyNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqbjJzc2VUNkk5UDJHSzBCVjdPL2JzS0VVTnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEsyb1BiRVNwTVZMV0w5R0xmSlZLK3J2RkVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNXNlZENkxGIiwibWUiOnsiaWQiOiIyNTQ3Njk4OTQxMTg6MjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0sydi9Ob0RFTVBpb2JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZOSGFRL0dpMkgwUm8xRHdlV1djMHFxNGNGb0hLbGMwVTFuSXBkakNtWEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Inl6K2ZRc25DOGY0QTllY1N2a0xKK1pNUm9tcTZSV0NGNWhhUUpSYzQzTm1sM2RIM21zVUtvWTAxMjJpTGx4aHA4aXNYTWlJM2oxcVdYNWRHQWlmMkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSTXJ2STkzc3MwRVJDL21oSlFhUVhVdTlqTENCd1BqaFJ4eThMMW1qVDVyYkF3YzhmamQ3NUlSeldhQ3BIak9OaCtPK3JnS05QSE5oTDV3dXAzZkpnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc2OTg5NDExODoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWVFIya1B4b3RoOUVhTlE4SGxsbk5LcXVIQmFCeXBYTkZOWnlLWFl3cGx3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjE3OTM2fQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "254769894118";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Mozz`",
  author: process.env.PACK_AUTHER || "Mozz",
  packname: process.env.PACK_NAME || "Mose_Tonnex",
  botname: process.env.BOT_NAME || "Kamdudu Md",
  ownername: process.env.OWNER_NAME || "Mose_Tonnex",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Ntee-j01/NTEEJ-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I";
global.website = process.env.GURL || "https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7";
global.devs = "263714497545";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
