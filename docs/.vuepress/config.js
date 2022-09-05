module.exports = {
    title: '大王',
    description: '大王测试',
    head: [//标签页图标
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    // 配置导航栏
    themeConfig: {
        // 是否使用内置搜索框h2,h3为索引
        search:true,
        //最大显示搜索条数
        searchMaxSuggestions:10,
        // 导航栏logo
        logo: '/erya.jpg',
        nav: [
            { text: 'Home', link: '/' },
            { text: '百度', link: 'https:www.baidu.com' },
            {
                text: '语言',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: 'english', link: '/language/english' },
                ]
            },
        ],
        sidebar: [ // 左侧导航
            {
                title: '初识 TypeScript', // 标题
                collapsable: false, // 下级列表不可折叠
                children: [ // 下级列表

                    ['chapter1/01_初识TS','你好Ts']
                ]
            }],
            // 更新时间
            lastUpdated:'Last Updated'
    }
}