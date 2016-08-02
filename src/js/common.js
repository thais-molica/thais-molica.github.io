( function( $ ) {

	var tab = function() {

		//data-id
		//data-target

		$( '[data-action="tab"]' ).on( 'click', function(e) {

			e.preventDefault();

			var that = $( this ),
				container = that.parents( '.tab-container'),
				id = $( 'a[data-id="' + that.data( 'id' ) + '"]').parent( 'li' ),
				allowMultiple = that.data('allow-multiple'),
				parent = that.parent();

			//console.log(that.data('allow-multiple'))

			if ( id.hasClass( 'active' ) ) {
				
				if ( allowMultiple ) {
					id.removeClass( 'active' );
				} else {
					
				}

			} else {
				
				if ( !allowMultiple ) {
					container.find( '.active' ).removeClass( 'active' );
				} 

				id.addClass( 'active' );			
				
			}

		} ) ;

	};

	var init = function() {
		tab();
	};

	init();

} ) ( jQuery ) ;