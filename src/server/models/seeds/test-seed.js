var Posts = require('../posts.js');
var data = [
  {
    username: 'doge',
    postBody: 'Bacon ipsum dolor amet landjaeger chuck meatball chicken hamburger porchetta cow ball tip, turducken capicola rump pork chop boudin short loin salami. Tongue picanha flank meatloaf, strip steak beef leberkas landjaeger shank boudin. Andouille pig kielbasa, tenderloin cupim rump meatball drumstick. Salami pork tongue, turkey biltong shank filet mignon tri-tip corned beef ham.',
    image: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg',
    votes: 0,
    postedAt: ,
    comments: [],
    showComments: false
  },
  {
    username: 'catt',
    postBody: 'Morbi interdizzle. My shizz boofron. Maecenizzle nisl. Etiam elit ante, check out this quizzle, rizzle yo mamma, scelerisque fizzle, fizzle. Go to hizzle egizzle neque. Duis felizzle. Sheezy nonummy, nisl you son of a bizzle fringilla cursizzle, fo shizzle mi go to hizzle , sure laorizzle neque enim my shizz crackalackin. Curabitur consequizzle nibh vizzle dawg. Yippiyo shit dolizzle nec libero. Crizzle placerat, ma nizzle vizzle shit lacinia, lorizzle erizzle izzle tortizzle, mofo luctizzle daahng dawg est sizzle est.',
    image: 'http://cdn1.theodysseyonline.com/files/2015/06/08/6356938644488566691013182599_grumpy-cat.jpg',
    votes: 0,
    postedAt: ,
    comments: [],
    showComments: false
  },
]

function runSeed(done) {
  return Posts.insertMany(data)
  .then(function () {
    done();
  });
}

module.exports = {
  runSeed
}
