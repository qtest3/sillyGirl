
function main(){
    
var req = __request
var res = __response


if(__request.method()=='DELETE'){
	var bucketQ = req.query("bucket")
	var idQ = req.query("id")
	sillyGirl.bucketSet(bucketQ, idQ, null)

	res.json({
	   status: 0,
	   msg: "删除操作完成"
	})
}else if (__request.method()=='GET'){
	var buckets = ["wx", "qq", "jd_cookie", "sillyGirl", "fanlivip", "otto", "reply", "wxsv", "qinglong", "wxmp", "tg", "pinQQ", "pinWX", "pinWXMP", "pinTG","image2Md","wxmpMaterial","wxsv","reply","jdNotify"];
	var bucketQ = req.query("bucket")
	var idQ = req.query("id")
	var valueQ = req.query("value")
	var rows = [];

	for (var bucket of buckets) {
	   var keys = sillyGirl.bucketKeys(bucket)
	   for (var key of keys) {
			rows.push({
				 bucket: bucket,
				 id: key,
				 value: sillyGirl.bucketGet(bucket, key)
			});
	   }
	}

	var ret = []

	for (var row of rows) {
	   if (bucketQ && row.bucket.indexOf(bucketQ) == -1) {
			continue;
	   }
	   if (idQ && row.id.indexOf(idQ) == -1) {
			continue;
	   }
	   if (valueQ && row.value.indexOf(valueQ) == -1) {
			continue;
	   }
	   ret.push(row);
	}

	var data = {
	   status: 0,
	   msg: "ok",
	   data: {
			count: ret.length,
			rows: ret
	   }
	}

	res.json(data)
}else{
	var data = req.json()
	var bucket = data.bucket
	var key = data.id
	var value = data.value

	sillyGirl.bucketSet(bucket, key, value)

	var data = {
	   status: 0,
	   msg: "新增/修改成功"
	}

	res.json(data)
}
}
importJs('lib/auth')
checkAuth(main)