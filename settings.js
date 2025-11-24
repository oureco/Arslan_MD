const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// 🔧 Utility Function
const stringToBool = (str) => str.toLowerCase() === 'true';

// ⚡ ARSLAN-MD CONFIGURATION - ULTRA STYLISH WITH DESCRIPTIONS
module.exports = {
    // 🔐 SESSION & AUTHENTICATION
    SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE52KzlkZ2RobnUxem9lajZRSXl1NWtzT3pmSGdJR3MzVWhiV0VRVFoxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXhHbWZ3YTBVdDI2QlIwaWlYdGdiRTRXcjZVNVNCL0ZRSGlqNXBwTU95VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRVZLUldXOExiSTlJNGpyZ2t5UHcweWhQQmt4T2crYkxwYVNhMUh2OUgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNaHV1ajlqc0twMG1IcHl2OGI5dWdzOXdZK005UWo1OEN6OVQ0VDVGcFgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEN2NmTzM3eWRDZGV6NklPM3FUYUs3S2pGSGpkTWMyamdZcnZXeGw0RWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR5NEp2cHpBMGVCdGtTc3pzWWR5cFJUR212eTIvYTlOb0xkeGxkSWN6MlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pvM3hMbjQ3My9hb3BWRDMxR3ZlbFNudXBsdXl0WWJCaWpicUZLeUkyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDMwRTdvbkJpTE01eEw5RnFTQ3ZEdWJMNko0OTl6M1VqZ2dRSS80cnQwUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRqSmFGYTFBd0RTVkdkSy9YTjU4VWtTeWppcVV1VXcxcTVPeFNIM1NWOFd2M1NBdXZlL1BsbnByc2xuZnJya2lBSlo5Y1ZIZHZGZTJHVkJaNTdwV0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6Ingxd1hrTUVQZ25ZN1o0MlEyWjBNbWhwdWZ1dnpBK1B3QmVYaTQzeXZkZmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTE2NzgzNjg0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDOTFENEUxQzFEQjE5MjJCMkFBQzBDRTJCQkYwQkY1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQwMTA5NjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkN5NnUzd3o5UU5TR0g3T2FLQ0VOcWciLCJwaG9uZUlkIjoiODI2YWFkYWMtNjQwMS00YjU0LWFlMmQtNTY3MDgyMDk3ZWE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl3ZHoxMVhiSGpZWkdPK3lpRm5haWczNVltaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWcG9Uei9CVVlkeExRM05SSEhwZmJGSWVBUlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlZQNVBGUTIiLCJtZSI6eyJpZCI6IjI1NDExNjc4MzY4NDoyM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4ODc5ODg0MzQ5MDQ3MzoyM0BsaWQiLCJuYW1lIjoiWEQtL/CfpI3wn5SqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNMkIycm9GRU1UWGtza0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTMStlWGVDQnlTemVsVG1ibG54amUrUElCblhGOU5WdjA2WkNDemMzMnhBPSIsImFjY291bnRTaWduYXR1cmUiOiI1VnVZdW1BZ1orYi83TWFtdS9hSy9wMXJHWlVjazN6OHFIMGR0eDNZenhnYXIrYWYyeTRCdU1jc1NWRGgxcXIvTi95NTN4eG5LNU5zeG5aV2hjejFBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieEhKWG9ZeTJSNm12cG15TVVtSHk3OG4rTkRUVG1VVzFkNjdQemRKSGZPN081VUQ5L0N2bXlMZzBCbGppSlFxcVFLdHVEVFRESC84RmJjcFVldzhEQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTY3ODM2ODQ6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXRmbmwzZ2dja3MzcFU1bTVaOFkzdmp5QVoxeGZUVmI5T21RZ3MzTjlzUSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY0MDEwOTYxLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZTcCJ9", // Your WhatsApp session ID - keep this secure!

    // 🎯 SECURITY & MODERATION
    DELETE_LINKS: stringToBool(process.env.DELETE_LINKS || "true"), // Auto delete non-whitelisted links
    LINK_WHITELIST: "youtube.com,github.com", // Allowed domains - separate with commas
    LINK_WARN_LIMIT: 3, // Number of warnings before taking action
    LINK_ACTION: "kick", // Action for link violators: "kick", "mute", or "none"
    ANTI_BAD: stringToBool(process.env.ANTI_BAD || "false"), // Block bad words in group
    ANTI_LINK: stringToBool(process.env.ANTI_LINK || "true"), // Prevent sharing links in group
    ANTI_BOT: stringToBool(process.env.ANTI_BOT || "true"), // Block other bots from group
    ANTI_DELETE: stringToBool(process.env.ANTI_DELETE || "true"), // Prevent message deletion in group
    ANTI_VV: stringToBool(process.env.ANTI_VV || "true"), // Anti-view once feature
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // Path for anti-delete logs

    // 🤖 BOT CORE FEATURES
    PREFIX: process.env.PREFIX || ".", // Bot command prefix (e.g., .,!,/,#)
    BOT_NAME: process.env.BOT_NAME || "✦[ᴀʀꜱʟᴀɴ-ᴍᴅ]✦", // Your bot's display name
    MODE: process.env.MODE || "public", // Bot mode: "public" or "private"
    chatbotEnabled: stringToBool(process.env.chatbotEnabled || "false"), // Enable AI chatbot feature
    version: process.env.version || "4.0.0", // Bot version number

    // 💬 MESSAGE HANDLING
    READ_MESSAGE: stringToBool(process.env.READ_MESSAGE || "false"), // Mark messages as read automatically
    READ_CMD: stringToBool(process.env.READ_CMD || "false"), // Read command messages only
    AUTO_REPLY: stringToBool(process.env.AUTO_REPLY || "false"), // Auto-reply to messages

    // 🎭 REACTIONS & INTERACTIONS
    CUSTOM_REACT: stringToBool(process.env.CUSTOM_REACT || "false"), // Enable custom reactions
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍", // Emojis for custom reactions
    AUTO_REACT: stringToBool(process.env.AUTO_REACT || "false"), // Auto-react to messages
    HEART_REACT: stringToBool(process.env.HEART_REACT || "false"), // Auto-heart react to messages
    OWNER_REACT: stringToBool(process.env.OWNER_REACT || "true"), // React to owner's messages

    // 👑 OWNER SETTINGS
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919", // Bot owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || "✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦", // Bot owner's display name
    king: process.env.king || "ᴀʀꜱʟᴀɴ-ᴍᴅ", // Bot king/developer name
    DEV: process.env.DEV || "923237045919", // Developer contact number

    // 🎨 MEDIA & APPEARANCE
    STICKER_NAME: process.env.STICKER_NAME || "✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦", // Default sticker pack name
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/16i1l7.jpg", // Alive command image URL
    DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴛᴇᴄʜ 🇵🇰*", // Bot description

    // 📱 STATUS FEATURES
    AUTO_STATUS_SEEN: stringToBool(process.env.AUTO_STATUS_SEEN || "true"), // Auto-see status updates
    AUTO_STATUS_REPLY: stringToBool(process.env.AUTO_STATUS_REPLY || "false"), // Auto-reply to status
    AUTO_STATUS_REACT: stringToBool(process.env.AUTO_STATUS_REACT || "true"), // Auto-react to status
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ✦ᴀʀꜱʟᴀɴ-ᴍᴅ 🚀🔥✦*", // Status reply message
    CURRENT_STATUS: stringToBool(process.env.CURRENT_STATUS || "true"), // Show current status

    // 🚀 ADVANCED AUTOMATION
    AUTO_VOICE: stringToBool(process.env.AUTO_VOICE || "false"), // Convert text to voice automatically
    AUTO_STICKER: stringToBool(process.env.AUTO_STICKER || "false"), // Convert images to stickers automatically
    AUTO_TYPING: stringToBool(process.env.AUTO_TYPING || "true"), // Show typing indicator
    AUTO_RECORDING: stringToBool(process.env.AUTO_RECORDING || "false"), // Show recording indicator
    FAKE_RECORDING: stringToBool(process.env.FAKE_RECORDING || "false"), // Fake recording indicator
    FAKE_TYPING: stringToBool(process.env.FAKE_TYPING || "false"), // Fake typing indicator
    ALWAYS_ONLINE: stringToBool(process.env.ALWAYS_ONLINE || "true"), // Show bot as always online
    PUBLIC_MODE: stringToBool(process.env.PUBLIC_MODE || "true"), // Public or private bot mode

    // 💌 BOT MESSAGES
    LIVE_MSG: process.env.LIVE_MSG || "> 🤖 ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦ ғʀᴏᴍ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*\n> 🌐 *ɢɪᴛʜᴜʙ :* github.com/Arslan-MD/Arslan_MD", // Alive message

    // 🎊 STARTUP MESSAGE
    START_MSG: process.env.START_MSG || `*Hᴇʟʟᴏ ᴛʜᴇʀᴇ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻* 

   *ᴋᴇᴇᴘ ᴏɴ ᴜsɪɴɢ ᴀʀꜱʟᴀɴ-ᴍᴅ 🇵🇰* 

> 😘Joɪɴ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ (ᴀ ᴍᴜsᴛ): ⤵️  
* *~_https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306_~*

> ♻️sᴜʙsᴄʀɪʙᴇ ʏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴛᴜᴛᴏʀɪᴀʟs
* *~_https://youtube.com/@arslanmdofficial_~*

    🫣- *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
> - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

> ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ &ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
* *~_https://github.com/Arslan-MD/Arslan_MD_~*

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ ☣️` // Bot startup message
};

// 💫 ARSLAN-MD STYLE GUIDE
global.ARS_STYLE = {
    EMOJIS: {
        SUCCESS: "✅", // Success operation emoji
        ERROR: "❌", // Error operation emoji  
        WARNING: "⚠️", // Warning message emoji
        LOADING: "⏳", // Loading indicator emoji
        SPARKLE: "✨", // Sparkle effect emoji
        ROCKET: "🚀", // Rocket/speed emoji
        FIRE: "🔥", // Fire/hot emoji
        CROWN: "👑" // Crown/royalty emoji
    },
    COLORS: {
        PRIMARY: "#FF0000", // Primary brand color
        SECONDARY: "#00FF00", // Secondary brand color  
        ACCENT: "#0000FF" // Accent brand color
    }
};
