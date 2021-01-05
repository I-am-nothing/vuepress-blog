module.exports = {
  "title": "Yin的笔记本",
  "description": "Yin的笔记本",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": require.resolve('./theme'),
  "themeConfig": {
    "repo": 'yindaheng98/My-docs/tree/master/学习笔记',
    "repoLabel": '查看源码',
    "docsRepo": 'yindaheng98/My-docs',
    "docsDir": '学习笔记',
    "editLinks": true,
    "editLinkText": '帮助我们改善此页面！',
    "smoothScroll": true,
    "mode": "light",
    "sidebar": 'auto',
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/yindaheng98",
            "icon": "reco-github"
          },
          {
            "text": "Site",
            "link": "http://www.yindaheng98.top:30000/",
            "icon": "reco-account"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "更新于",
    "lastCreated": "创建于",
    "author": "Howard Yin",
    "authorAvatar": "/avatar.svg",
    "startYear": "2018",
    "coverImgBase": "/",
    "vssueConfig": {
      platform: 'github',
      owner: 'yindaheng98',
      repo: 'yindaheng98.github.io',
      clientId: 'a75a1830835fe3098df1',
      clientSecret: '87051d70dd49e135c6ccd5293c3dd89955d54c20',
    }
  },
  "markdown": {
    "lineNumbers": true,
    extendMarkdown: md => {
      md.use(require("@neilsustc/markdown-it-katex"));
    }
  },
  "plugins": [
    'vuepress-plugin-mermaidjs',
    require('./vuepress-plugin-katex-title/index')
  ]
}