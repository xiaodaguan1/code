module.exports = {
    title: 'Adroi媒体API 接口文档',  // 设置网站标题
    description: 'Adroi',
    base: '/code/',
    themeConfig: {
        logo: '/erya.jpg',
        nav: [
            { text: '接口定义', link: '/apiword' },
            { text: '接口字段定义', link: '/api' },
            { text: '附录：错误码', link: '/error' }
        ],
        sidebar: [ // 左侧导航
            {
                title: '初识 TypeScript', // 标题
                collapsable: false, // 下级列表不可折叠
                children: [ // 下级列表
                    ['chapter1/01_初识TS', '你好Ts']
                ]
            }],
        // 更新时间
        lastUpdated: 'Last Updated',
        sidebarDepth: 2
    }
}
