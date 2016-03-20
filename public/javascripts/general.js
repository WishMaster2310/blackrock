$(function() {

	$('.c-plan__unit').qtip({
	    content: {
	    	text: function(e, api) {
	    		var ctx = $(this).find('.c-plan__unit-content');
	    		return $(ctx).html()	
	    	}
	    },
	     position: {
        my: 'left bottom',
        adjust: {
            x: -45,
            y: -50
        }
    }
	});
});
