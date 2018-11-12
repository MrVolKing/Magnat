require('./common/burger');
require('./common/slider');

require('./common/input');
require('./common/jquery-3.2.1.min');
require('./common/text');
require('./common/zfaq');

require('./common/photoswipe');



// require('./common/masonry.pkgd.min');
// require('./common/masonrycustom');


														// adapt tabl

require('./common/stacktable');


jQuery(document).ready(function($) {
	jQuery(function($){
		$('.teblrespons').stacktable();
	});
});