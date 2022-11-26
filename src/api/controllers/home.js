const users = require('../models/users');
const status = require('../models/status');

class home {
       homePage(req, res, next){
           
                async function renderPage(){
             const allStatus = await status.find({}).sort({createdAt: -1})
             .then(function(data) {
                return data;
             })
             res.render('home', {layout: 'layouts/main', status : allStatus})
                }
                renderPage()
           
       }
      postStatus(req, res, next){
        
           const st = new status({
            username: 'messsisi',
            content: req.body.content
           })
           st.save()
           res.redirect('/')
      }
       
}


module.exports = new home;