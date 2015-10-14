/*var unloaded = jQuery("#unloaded_container");/*= jQuery.getJSON("lab4.json", function(){
		console.log("success");
	});*/

/*(function($){
  var unloaded = $("#unloaded_container");
  unloaded.click(function(){
	$.getJSON("lab4.json", function(){
		console.log("success");
	});
  });
})(jQuery);*/
$(document).ready(function() {
	var unloaded = jQuery("#unloaded_container");
	unloaded.click(function(e){
		jQuery.getJSON("lab4final.json", function(data){
			console.log("success");
			var songs = data.song
			var container = $("#loaded_container");
			for (var i = 0; i < songs.length; i ++){
				var song_container = document.createElement('ul');
				for (var name in songs[i]){
					console.log(name);
					var table_cell_ = document.createElement('li');
					table_cell = $(table_cell_);
					table_cell.addClass(name);
					if (name === 'artist_site'){
						//table_cell = $.template('<li class="${class_name}"><a href="${value_name}"></a></li>');
						var anchor_ = document.createElement('a');
						anchor_.innerHTML = 'Site';
						anchor_.setAttribute('href',songs[i][name]);
						$(anchor_).appendTo(table_cell);
					}
					else if(name === 'album_cover'){
						var img_ = document.createElement('img');
						img_.setAttribute('src',songs[i][name]);
						$(img_).appendTo(table_cell);
					}
					else{
						table_cell.text(songs[i][name]);
					}
					table_cell.appendTo(song_container);
					
				}
				$(song_container).appendTo(container);
			}
			container.css('display','block');
			unloaded.css('display','none');
		});
	});
});