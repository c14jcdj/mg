var templateModule = (function(){

	function setViewHeight(){
		var height = $('.container').height();
		$('.main-col').height(height)
	}

	return {
		setViewHeight: setViewHeight
	}

})();
