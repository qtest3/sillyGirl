//[rule: 知乎]






function main() {

    Delete()
    let content = request("https://www.zhihu.com/api/v4/creators/rank/hot?domain=0&period=hour", (error, response, body) => {

            let data = JSON.parse(body).data
            let hots = []
// 只要10条数据
            for (let index = 0; index < 9; index++) {
                // for (let index = 0; index < data.length; index++) {

                    let element = data[index];

                    // hots.push(`${index + 1}. ${element.question.title}\n${element.question.url}`)
                    hots.push(`${index + 1}. ${element.question.title}\n`)

                }
                sendText(hots)
            });

    }
    main()