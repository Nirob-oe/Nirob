module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Nirob",
	description: "Nirob",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/y8W6oxm.jpeg", 
            
            "https://i.imgur.com/oy0CVJa.jpeg", 
            
"https://i.imgur.com/yHEMOIl.jpeg",
            
            "https://i.imgur.com/Z0YK8pb.jpeg"];
  
var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : Nirob 𝙍𝙖𝙝𝙖𝙢𝙖𝙣\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : Yung Zhen  \n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (Munshiganj)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝘿𝙝𝙖𝙠𝙖, 𝘽𝙖𝙣𝙜𝙡𝙖𝙙𝙚𝙨𝙝\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (19)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : 𝙎𝙩𝙪𝙙𝙮\n𝗚𝗺𝗮𝗶𝗹        :  Gmail diya ki korba 😑 \n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+8801772594397\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : t.me/nai🤧 \n𝗙𝗯 𝗹𝗶𝗻𝗸   : https://www.facebook.com/profile.php?id=61568047673460
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
