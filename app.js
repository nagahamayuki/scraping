var client = require('cheerio-httpcli');
var fs = require('fs');

//fs.writeFile('filename.csv', "");
//新しくファイルを作る時のみ。上書きしたい場合はこれがあると上書きできない。

client.fetch('https://itp.ne.jp/tokyo/genre_dir/246/pg/4/?ngr=1&sr=1&num=50', {}, function (err, $, res) {
	if(err){
		console.log("エラーです")
	} else {
	
		// $('.searchResultsWrapper > .normalResultsBox > article > section > .clearfix > .blueText').each(function (idx) {
		// 	console.log($(this).text())
		// });

		//    $('.searchResultsWrapper > .normalResultsBox > article > section > p > .boxedLink.emailLink').each(function () {
		//    	var mail = $(this)[0].attribs.onclick;
		//    	mails = mail.substring(mail.indexOf(", '")+3,mail.length) 
		//    	mailss = mails.substring(0, mails.indexOf("'"))
		// 	console.log(mailss)
		// });	


		// $('.searchResultsWrapper > .normalResultsBox > article > section').each(function () {

		//        console.log($('.clearfix > .blueText').text())

		//    	var mail = $('p > .boxedLink.emailLink')[0].attribs.onclick;
		//    	mails = mail.substring(mail.indexOf(", '")+3,mail.length) 
		//    	mailss = mails.substring(0, mails.indexOf("'"))
		// 	console.log(mailss)
		// });


		$('section').each(function (idx) {
			var temp = $(this);
			var company = temp.find('.blueText').text();

			var mail = String(temp.find('p > .boxedLink.emailLink').attr('onclick'));
			mails = String(mail.substring(mail.indexOf(", '")+3,mail.length))
			mailss = String(mails.substring(0, mails.indexOf("'")))
			console.log(company, mailss)
			//fs.appendFile('filename.csv', company + ',' + mailss + "¥", 'utf-8')
		});


	}

    
});