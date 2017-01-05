var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: '电影-首页', movies: [
            {
                title: '情圣',
                _id: 1,
                poster: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2409022364.jpg'
            }, {
                title: '摆渡人',
                _id: 2,
                poster: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2390687452.jpg'
            }, {
                title: '铁道飞虎',
                _id: 3,
                poster: 'https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2404720316.jpg'
            }, {
                title: '你的名字',
                _id: 4,
                poster: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395733377.jpg'
            }, {
                title: '冰雪女皇之冬日..',
                _id: 5,
                poster: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2381915097.jpg'
            }, {
                title: '情圣',
                _id: 6,
                poster: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2409022364.jpg'
            }
        ]
    });
});

// detail page
router.get('/movie/:id', function (req, res) {
    var id = req.params.id;

    res.render('detail', {
        title: '详情',
        movie: {
            director: '宋晓飞 / 董旭',
            country: '中国大陆',
            title: '情圣',
            year: '2016-12-30',
            poster: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2409022364.jpg',
            language: '汉语普通话',
            flash: 'http://v.ifeng.com/include/exterior.swf?guid=01c7cb76-fef1-45f8-a14e-21e4e3e48d39&AutoPlay=false',
            summary: '　好友突然离世，令生活安稳的肖瀚（肖央饰演）开始唏嘘人生苦短。柳下惠自居的他，因为偶然邂逅性感美女模特yoyo（克拉拉饰演），重新找回了心跳的感觉，遂欲借工作之便亲近女神，再尝试一遍初恋的刺激。然而，肖瀚的几次示好，不是因伴侣沈红（代乐乐饰演）的警觉而作罢，就是因顶头上司马丽莲（闫妮饰演）的误会而被迫中断，各种阴差阳错笑料不断。洋相频出的肖瀚左右为难又心有不甘，只好求助于身边的好兄弟艾木（艾伦饰演）、汤怀（乔杉饰演）、刘磊（小沈阳饰演），以及“神助攻”同事常剑（常远饰演），几人结成“情圣五贱客”花式开撩。在他们的出谋划策之下，肖瀚经历了一些列令人啼笑皆非的惊险囧事…'
        }
    });

})
// admin page
router.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'movie 后台录入页',
        movie: {
            director: '',
            country: '',
            title: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary: ''
        }
    })
})

//admin update movie
router.get('/admin/update/:id', (req, res)=> {
    const id = req.params.id

    res.render('admin',{title:'录入页'})
})

//admin post movie
router.post('/admin/movie/new', function (req, res) {

    res.render('admin')
})

// list page
router.get('/admin/list', (req, res)=> {
    res.render('list', {
        title: '列表页',
        movies: [{
            title: '情圣',
            _id: 1,
            director: '宋晓飞 / 董旭',
            country: '中国大陆',
            language: '汉语',
            year: '2016-12-30',
            poster: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2409022364.jpg',
            flash: 'http://v.ifeng.com/include/exterior.swf?guid=01c7cb76-fef1-45f8-a14e-21e4e3e48d39&AutoPlay=false',
            summary: '　好友突然离世，令生活安稳的肖瀚（肖央饰演）开始唏嘘人生苦短。柳下惠自居的他，因为偶然邂逅性感美女模特yoyo（克拉拉饰演），重新找回了心跳的感觉，遂欲借工作之便亲近女神，再尝试一遍初恋的刺激。然而，肖瀚的几次示好，不是因伴侣沈红（代乐乐饰演）的警觉而作罢，就是因顶头上司马丽莲（闫妮饰演）的误会而被迫中断，各种阴差阳错笑料不断。洋相频出的肖瀚左右为难又心有不甘，只好求助于身边的好兄弟艾木（艾伦饰演）、汤怀（乔杉饰演）、刘磊（小沈阳饰演），以及“神助攻”同事常剑（常远饰演），几人结成“情圣五贱客”花式开撩。在他们的出谋划策之下，肖瀚经历了一些列令人啼笑皆非的惊险囧事…',
        }]
    })
})

//list delete movie
router.delete('/admin/list', (req, res)=> {
    const id = req.query.id

    if (id) {
        Movie.remove({_id: id}, function (err, movie) {
            if (err) {
                console.log(err)
            }
            else {
                res.json({success: 1})
            }
        })
    }
})
module.exports = router;

