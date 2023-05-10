module.exports = {
    title: '自定义作者的博客',
    description: '我是这个博客模板的描述',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: 'vdoing',
      markdown: {
        lineNumbers: true, // 显示代码块的行号
        extractHeaders: ['h2','h3','h4', 'h5','h6']
       
    },
    base: '/',
    head: [
        [
            'meta',
            {
              name: 'keywords',
              content: '自定义网站关键词'
            }
       ],[
            'meta',
            {
              name: 'description',
              content: '自定义网站SEO描述信息。'
            }
       ]
    ],
    themeConfig: {
         updateBar:{showToArticle: false},
        sidebar: 'structuring',
        sidebarDepth: 4,
        lastUpdated: '上次更新',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '专题内容',
                link: '/pages/264e1a/'
            },
             {
                text: '自定义指南',
                link: '/pages/24112f/'
            }
        ],
        sidebar: {
            mode: 'structuring',
            collapsable: false
        },
        pageStyle: 'line',
        category: false,
        tag: false,
        archive: false,
        author: {
            name: '我是作者名称'//必需
        },
        footer: {
            //页脚信息
            createYear: 2023,
            //博客创建年份
            copyrightInfo: 'author',
            //博客版权信息，支持a标签
        }
    },
    plugins:[
    ]
}