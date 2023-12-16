import {createStore} from 'vuex'

export default createStore({
    state: {
        postList: [
            {
                "id": 1,
                "profilePicture": "me.png",
                "date": "Nov 10, 2023",
                "picture": "kingitused.jpg",
                "text": "Jõulud juba tulekul juhuuuu!!!!!!!",
                "likes": 0,
            },
            {
                "id": 2,
                "profilePicture": "me.png",
                "date": "Nov 4, 2023",
                "picture": "talisport.jpg",
                "text": "Mis on sinu lemmik talispordiala?",
                "likes": 0,
            },
            {
                "id": 3,
                "profilePicture": "me.png",
                "date": "Oct 31, 2023",
                "picture": "",
                "text": "Täna on ilus päev, lähme õue jalutama!",
                "likes": 0,
            },
            {
                "id": 4,
                "profilePicture": "me.png",
                "date": "Oct 24, 2023",
                "picture": "raamatud.png",
                "text": "Mis on sinu lemmikraamat?",
                "likes": 0,
            },
            {
                "id": 5,
                "profilePicture": "me.png",
                "date": "Oct 22, 2023",
                "picture": "pink.jpg",
                "text": "Tartu pink",
                "likes": 0,
            },
            {
                "id": 6,
                "profilePicture": "me.png",
                "date": "Oct 10, 2023",
                "picture": "",
                "text": "Huvitav mis täna piros toimub???",
                "likes": 0,
            },
            {
                "id": 7,
                "profilePicture": "me.png",
                "date": "Sep 28, 2023",
                "picture": "ski_resort.png",
                "text": "Üli cool mägi!!!",
                "likes": 0,
            },
            {
                "id": 8,
                "profilePicture": "me.png",
                "date": "Sep 20, 2023",
                "picture": "panda.jpg",
                "text": "I ♥ pandas!",
                "likes": 1000,
            },
            {
                "id": 9,
                "profilePicture": "me.png",
                "date": "Sep 12, 2023",
                "picture": "sügis.jpeg",
                "text": "Mis sulle sügise juures kõige rohkem meeldib?",
                "likes": 0,
            },
            {
                "id": 10,
                "profilePicture": "me.png",
                "date": "Sep 1, 2023",
                "picture": 'ülikool.jpg',
                "text": "Kas sina oled õppinud Tartu Ülikoolis?",
                "likes": 0,
            },
            {
                "id": 11,
                "profilePicture": "me.png",
                "date": "Aug 19, 2023",
                "picture": "",
                "text": "Mis on sinu lemmikkoht Tartus?",
                "likes": 0,
            }
        ]
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
