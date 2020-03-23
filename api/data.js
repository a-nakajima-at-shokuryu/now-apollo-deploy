const express = require('express')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')

// スキーマの定義
const schema = buildSchema(`

    # Queryスキーマ
    type Query {
        busho(id: String): [Busho]
        tanto(id: String): [Tanto]
        baibai(id: String): [Baibai]
        azukari(id: String): [Azukari]
        henpin(id: String): [Henpin]
        tokuno_option(id: String): [TokunoOption]
        haitanto(id: String): [Haitanto]
        tokuno(id: String): [Tokuno]
        zeiku(id: String): [Zeiku]
        meisai(id: String): [Meisai]
    }
  
    # 部署スキーマ
    type Busho {
        id: String
        name: String
    }

    # 担当スキーマ
    type Tanto {
        id: String
        name: String
    }

    # 売買区分スキーマ
    type Baibai {
        id: String
        name: String
    }

    # 預かり区分スキーマ
    type Azukari {
        id: String
        name: String
    }

    # 返品区分スキーマ
    type Henpin {
        id: String
        name: String
    }

    # 得意先区分スキーマ
    type TokunoOption {
        id: String
        name: String
    }

    # 配担当スキーマ
    type Haitanto {
        id: String
        name: String
    }

    # 得意先スキーマ
    type Tokuno {
        id: String
        name: String
    }

    # 税区分スキーマ
    type Zeiku {
        id: String
        name: String
    }

    # 明細スキーマ
    type Meisai {
        id: String
        hinmei: String
        size: String
        yoryo: Int
        irisu: Int
        maisu: Int
        tanka: Float
        kingaku: Int
        gensan: String
        genkako: String
        ikusei: String
    }

`)

// 部署配列
const dummyBushos = [
    { id: '10', name: '営業所Ａ'},
    { id: '20', name: '営業所Ｂ'},
    { id: '30', name: '営業所Ｃ'},
    { id: '40', name: '営業所Ｄ'},
    { id: '50', name: '営業所Ｅ'},
    { id: '60', name: '営業所Ｆ'},
]

// 担当配列
const dummyTantos = [
    { id: '23', name: '中野'},
    { id: '24', name: '大村'},
    { id: '25', name: '小山'},
]

// 売買区分配列
const dummyBaibaies = [
    { id: '0', name: '外部', }, 
    { id: '1', name: '内部', }, 
]

// 預り区分配列
const dummyAzukaries = [
    { id: '0', name: '通常', }, 
    { id: '1', name: '預り', }, 
]

// 返品区分配列
const dummyHenpins = [
    { id: '0', name: '通常', }, 
    { id: '1', name: '返品', }, 
]

// 得意先区分配列
const dummyTokunoOptions = [
    { id: '0', name: '担当', }, 
    { id: '1', name: '全件', }, 
]

// 配担当配列
const dummyHaitantos = [
    ...Array(10).fill(0).map((_, i) => ({
        id: `${i + 1}`, 
        name: `配担当${i + 1}`
    })),
]

// 得意先配列
const dummyTokunos = [
    ...Array(20).fill(0).map((_, i) => ({
        id: `${1000 + i + 1}`, 
        name: `得意先${1000 + i + 1}`
    })), 
]

// 税区分配列
const dummyZeikus = [
    { id: '0', name: '外税 8%'}, 
    { id: '1', name: '外税10%'}, 
    { id: '2', name: '内税 8%'}, 
    { id: '3', name: '内税10%'}, 
]

// 明細配列
const randomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  } 
const dummyMeisais = [
    ...Array(100).fill(0).map((_, i) => ({
        id: `${i + 1}`, 
        hinmei: `品名${i + 1}`,
        size: `品名${i + 1}`,
        yoryo: randomInteger(100, 200),
        irisu: randomInteger(5, 10),
        maisu: randomInteger(100, 200),
        tanka: randomInteger(10000, 20000) / 100,
        kingaku: randomInteger(1000, 2000),
        gensan: `原産地${i + 1}`,
        genkako: `加工地${i + 1}`,
        ikusei: `育成${i + 1}`,
    })), 
]

const root = {

    // 部署
    busho: args => {

        // 引数を変数に格納
        const id = args.id
        console.log(id)

        // 一旦、配列の全件を変数に格納
        let dat = dummyBushos
        console.log(dat)

        // idが指定されていたら、フィルタリング
        if (id !== undefined) {
            dat = dat.filter(busho => busho.id == id)
        }
        console.log(dat)

        return dat
    },

    // 担当
    tanto: args => {

        // 引数を変数に格納
        const id = args.id
        console.log(id)

        // 一旦、配列の全件を変数に格納
        let dat = dummyTantos
        console.log(dat)

        // idが指定されていたら、フィルタリング
        if (id !== undefined) {
            dat = dat.filter(tanto => tanto.id == id)
        }
        console.log(dat)

        return dat
    },

    // 売買区分
    baibai: args => {

        // 引数を変数に格納
        const id = args.id
        console.log(id)

        // 一旦、配列の全件を変数に格納
        let dat = dummyBaibaies
        console.log(dat)

        // idが指定されていたら、フィルタリング
        if (id !== undefined) {
            dat = dat.filter(baibai => baibai.id == id)
        }
        console.log(dat)

        return dat
    },

    // 預り区分
    azukari: args => {

        // 引数を変数に格納
        const id = args.id
        console.log(id)

        // 一旦、配列の全件を変数に格納
        let dat = dummyAzukaries
        console.log(dat)

        // idが指定されていたら、フィルタリング
        if (id !== undefined) {
            dat = dat.filter(azukari => azukari.id == id)
        }
        console.log(dat)

        return dat
    },

    // 返品区分
    henpin: args => {

        // 引数を変数に格納
        const id = args.id
        console.log(id)

        // 一旦、配列の全件を変数に格納
        let dat = dummyHenpins
        console.log(dat)

        // idが指定されていたら、フィルタリング
        if (id !== undefined) {
            dat = dat.filter(henpin => henpin.id == id)
        }
        console.log(dat)

        return dat
    },

    // 得意先区分
    tokuno_option: args => {

        // 引数を変数に格納
        const id = args.id
        console.log(id)

        // 一旦、配列の全件を変数に格納
        let dat = dummyTokunoOptions
        console.log(dat)

        // idが指定されていたら、フィルタリング
        if (id !== undefined) {
            dat = dat.filter(tokuno_option => tokuno_option.id == id)
        }
        console.log(dat)

        return dat
    },

    // 配担当
    haitanto: args => {

        // 引数を変数に格納
        const id = args.id
        console.log(id)

        // 一旦、配列の全件を変数に格納
        let dat = dummyHaitantos
        console.log(dat)

        // idが指定されていたら、フィルタリング
        if (id !== undefined) {
            dat = dat.filter(haitanto => haitanto.id == id)
        }
        console.log(dat)

        return dat
    },

    // 得意先
    tokuno: args => {

        // 引数を変数に格納
        const id = args.id
        console.log(id)

        // 一旦、配列の全件を変数に格納
        let dat = dummyTokunos
        console.log(dat)

        // idが指定されていたら、フィルタリング
        if (id !== undefined) {
            dat = dat.filter(tokuno => tokuno.id == id)
        }
        console.log(dat)

        return dat
    },

    // 税区分
    zeiku: args => {

        // 引数を変数に格納
        const id = args.id
        console.log(id)

        // 一旦、配列の全件を変数に格納
        let dat = dummyZeikus
        console.log(dat)

        // idが指定されていたら、フィルタリング
        if (id !== undefined) {
            dat = dat.filter(zeiku => zeiku.id == id)
        }
        console.log(dat)

        return dat
    },

    // 明細
    meisai: args => {

        // 引数を変数に格納
        const id = args.id
        console.log(id)

        // 一旦、配列の全件を変数に格納
        let dat = dummyMeisais
        console.log(dat)

        // idが指定されていたら、フィルタリング
        if (id !== undefined) {
            dat = dat.filter(meisai => meisai.id == id)
        }
        console.log(dat)

        return dat
    },

}
  
const app = express()

// クロスドメイン対応
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, access_token'
    )
    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        res.send(200)
    } else {
        next()
    }
}
app.use(allowCrossDomain)

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(5000, () => console.log('Example app listening on port 5000!'))
