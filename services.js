var books = require('google-books-search');

module.exports = {
	getBooks : function(bookName, callback){
		books.search(bookName, function(error, results) {
		    if ( ! error ) {
		        //remove all properties except id, title, thumbnail
		        var cleanResults = [];
		        for(var i in results){
		        	cleanResults.push({
		        		id : results[i].id,
		        		title : results[i].title,
		        		thumbnail : results[i].thumbnail,
		        	});
		        }
		        callback(cleanResults);
		    } else {
		        console.log(error);
		        callback({status : 'bad request'});
		    }
		});
		
	},

	getBookInfo : function(bookId, callback){
		books.lookup(bookId, function(error, result) {
			if(!error){
				callback(result);
			} else {
		        console.log(error);
		        callback({status : 'bad request'});
		    }
		});
	}
}