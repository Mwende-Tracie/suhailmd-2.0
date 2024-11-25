const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_52_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMSxcbiAgICAgICAgNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMSxcbiAgICAgICAgNSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNixcbiAgICAgICAgOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDcwLFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUM095cWhLV3IyWnc3UENELzVXVWdjeFhMcGYrNzhOL2QwNFNuOXhXNElJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxWExkN28xUVFFRzVkUnJyd0tDRHhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU4Y2EzNGY2LWNiOTAtNDRiMS04ODM2LWVhYjNlNzA2MjA1ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDI0NCxcbiAgICAgIDIwMixcbiAgICAgIDIyMCxcbiAgICAgIDgzLFxuICAgICAgMTkyLFxuICAgICAgMTEzLFxuICAgICAgMjEyLFxuICAgICAgMjEzLFxuICAgICAgNzgsXG4gICAgICAxNjUsXG4gICAgICAyMTEsXG4gICAgICA2MyxcbiAgICAgIDY2LFxuICAgICAgMjUwLFxuICAgICAgNzYsXG4gICAgICAzMyxcbiAgICAgIDI2LFxuICAgICAgMjUxLFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMTEyLFxuICAgICAgMTI1LFxuICAgICAgMTAyLFxuICAgICAgODEsXG4gICAgICAxNzUsXG4gICAgICA2OSxcbiAgICAgIDIwNixcbiAgICAgIDIyLFxuICAgICAgNzYsXG4gICAgICAxMDgsXG4gICAgICAxOTgsXG4gICAgICAyNixcbiAgICAgIDIxLFxuICAgICAgMTExLFxuICAgICAgMjQ2LFxuICAgICAgMjUxLFxuICAgICAgNzAsXG4gICAgICAxNDAsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFhOUks4UEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyNzI5MzY1Mjo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODk1NTQ5MzM4ODM4MTo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMRDcwY3dFRVB5Z2tMb0dHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImN2ZjZFY2g0aStKUXdnS1Z4Y2FoQ2ZRUWE5SUlnYkQ5M1IrNUFuTkozVk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieDhyWEVZc3AyNDk2RXJzbzhTcHZabitvVjlEU3FVZVk4Rk1SeW56VjJjRzNnUjRPcnArbkVWMUtwTG0vS2E1ZStzUWZhNStVaW9LYlZoUEZmK1ZHQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV2cwNVFuSm9peFRFSGo2QU9UcFc3YlFEYTZLeWxMMnN2NFV5UVB4VWNTdUZTNkpFUFRWM2ZRSnlWWktKdlVxajFibU9QeDFDdFNjNE91MDlGdGpGRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI3MjkzNjUyOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjUxMzkyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZpd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRml3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUTBoVnB4aWJIMWhldXhaNTRtazFZK3VUcGY5eE1wbS9VVHI5UGN2TUZUdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjM0NDY4MjcyLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
