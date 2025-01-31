module.exports.config = {
  name: "pic",
  version: "1.1.0",
  permission: 4,
  credits: "Nayan",
  description: "Admin pic",
  prefix: true, 
  category: "user", 
  usages: "pic",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
     "https://i.imgur.com/y8W6oxm.jpeg",
     "https://i.imgur.com/oy0CVJa.jpeg",
     "https://i.imgur.com/yHEMOIl.jpeg",
     "https://i.imgur.com/Z0YK8pb.jpeg",
     "https://i.imgur.com/FsFO0d0.jpeg",
     "https://i.imgur.com/dKdCnd5.jpeg",
     "https://i.imgur.com/oauKWTY.jpeg",

    ];
   var callback = () => api.sendMessage({body:`😋+\nSố ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
