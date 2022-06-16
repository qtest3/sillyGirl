function main(){
var data = __request.json()
var rows = data.rows

for (var row of rows) {
   sillyGirl.bucketSet(row.bucket, row.id, row.value)
}

var ret = {
   status: 0,
   msg: "更新成功"
}

__response.json(ret)   
}

checkAuth(main)