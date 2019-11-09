var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function (req, res, next) {
  var allpages,length,pageSize,pageCount,page,data,pageCountList,prepage,nextpage;
  allpages = Array.from(Array(50), (v, i) => i+1)
  length = allpages.length;
  pageSize = 8;
  pageCount = Math.ceil(length / pageSize);
  page = req.query.page || 1
  data = allpages.slice((page - 1) * pageSize, page * pageSize);
  pageCountList = Array.from(Array(pageCount), (v, i) => i + 1);
  if (parseInt(page)-1>0){
    prepage=parseInt(page)-1;
  }
  else{
    prepage=1;
  }
  // prepage=parseInt(page)-1>0?parseInt(page)-1:1;
  if (parseInt(page)<parseInt(pageCount)) {
    nextpage=parseInt(page)+1;
  } else {
    nextpage=parseInt(page);
  }
  // nextpage=parseInt(page)<parseInt(pageCount)?parseInt(page)+1:pageCount;
 
  res.render('index', {
  	prepage:prepage,
  	nextpage:nextpage,
    pageCountList: pageCountList,
    data: data,
  });
});

module.exports = router;
