
function checkAuth(fn){
    let password = sillyGirl.bucketGet("sillyGirl","adminPassword")
    if(password && password.length>0){
        importJs('lib/base64')
        let h=__request.header("authorization")
        let p="Basic "+Base64.btoa("admin:"+password)
        if(p!=h){
            __response.status(401).header("www-authenticate","Basic realm=\"sillyGirl\"")
            return
        }
    }
    fn()
}