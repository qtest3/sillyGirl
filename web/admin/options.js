
function main(){
var buckets = ["wx", "qq", "jd_cookie", "sillyGirl", "fanlivip", "otto", "reply", "wxsv", "qinglong", "wxmp", "tg", "pinQQ", "pinWX", "pinWXMP", "pinTG","image2Md","wxmpMaterial","wxsv","reply","jdNotify"];
var options = [];

for (var bucket of buckets) {
   options.push({
		label: bucket,
		value: bucket
   });
}

var data = {
   status: 0,
   msg: "",
   data: {
		options: options
   }
}

__response.json(data)
}
importJs('lib/auth')
checkAuth(main)