var films = [
	'spiderman',
	'spiderman 2',
	'spiderman 3'
];

(function(){
	var app = {
		$list: $('.films'),
		$newFilm: $('#new-film'),
		$addBtn: $('#add-film'),
		init: function(){
			var that = this;
			this.$addBtn.on('click', function(){
				that.add(that.$newFilm);
				
			});
			this.render();
		},
		render:function(){
			var dynamicList ='';
			if (films.length <1)  {
				return;
			};
			films.forEach(function(entry, key) {
			    dynamicList += '<li class="elem-' + key + '">' + entry + ' <span class="remove-film remove-' + key + '" data-position="' + key + '" > retiere </span></li>';
			});
			this.$list.html(dynamicList);

			this.bind();
		},
		bind: function(){
			var that = this;
			$removeBtn = $('.remove-film');
			$removeBtn.on('click', function(){
				that.remove(this);
			});
		},
		add: function(element){
			var newFilm = element.val();
			films.push(newFilm);
			this.render();
		},
		remove: function(element){
			var filmPosition;
			
			filmPosition = element.dataset.position;
			films.splice(filmPosition, 1);
			this.render();
			
		}
	};
	app.init();

})();
