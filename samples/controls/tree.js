flyingon.widget({
    
    template: {

        Class: 'Plugin',
        padding: 8,
        layout: 'vertical-line',

        children: [

            {
                Class: 'Tree',
                width: 200
            },

            { Class: 'Code' }

        ]
    },

    created: function () {

        this[0].push(
            {
                text: 'flyingon基础', 
                expanded: true,
                children: [
                    { text: 'js插件' },
                    { text: 'widget插件' },
                    { text: 'html插件' },
                    { text: '序列化' },
                    { text: '数据绑定' },
                    { text: '选择器' },
                    { text: 'widget' },
                    { text: '多级路由' }
                ]
            },

            {
                text: '布局', 
                expanded: true,
                children: [
                    { text: '线性布局' },
                    { text: '流式布局' },
                    { text: '停靠布局' },
                    { text: '表格布局' },
                    { text: '自适应' },
                    { text: '子布局' }
                ]
            });
    }


});