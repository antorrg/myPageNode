# myPageNode

Pagina web creada a partir de Node.js, express y motor de plantillas pug. Este es el diagrama general del proyecto:

```plain
 MyPageNode
│
├──data/
├──src/
│  ├── controllers/
│  │   └── userController.js
│  │       
│  ├── models/
│  │   └── user.js
│  │   └── index.js
│  │
│  ├── routes/
│  │   └── apiRoutes.js (experimental)
│  │   └── index.js
│  │   └── userRouter.js
│  │
│  ├── services/
│  │   └── helpers.js 
│  │   └── userServices.js
│  │
│  ├── utils/
│  │   └── errorsHandlers.js 
│  │   └── userServices.j
│  │
│  ├── views/
│  │   │ └──layouts/
│  │   │       └──mainLayout.pug
│  │   │       └──usersLayout.pug
│  │   │
│  │   └── index.pug
│  │   └── updateUser.pug
│  │   └── userDetail.pug
│  │   └── users.pug
│  │
│  ├── public/
│  │   ├── css/
│  │   │     └── modal.css
│  │   │     └── style.css
│  │   ├── js/
│  │   │   └── indexFunctions.js
│  │   └── images/
│  │
│  ├── envConfig.js
│  ├── db.js
│  └── app.js
│
├──test/
├── .babelrc
├──  index.js
└── package.json
```

## Sobre la api: 

La api modelo `MVC` está construida con las siguientes tecnologias: