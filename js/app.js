$(document).ready(function(){
	
	// alert vollmondbad
	$('#vollmond-btn').click(function(){
		console.log('Du hast Vollmondbad geklickt!');
		alert('Willst Du jetzt ein Vollmondbad nehmen?');
	}); // end vollmond click
	
	//hover postkarte-btn
	$('#postkarte-btn').hover(function(){
		console.log('Dies ist ein hover Effekt!');
		$('#postkarte-btn').css({
			backgroundColor: '#DD6A61'
		}); //end postkarte css
	}, function(){
		console.log('hover Effekt vorbei!');
		$('#postkarte-btn').css({
			backgroundColor: '#455495'
		}); //end postkarte css
	}); //end postkarte hover
	
	// show and hide zmorge image
	$('#zmorge-btn-off').click(function(){
		$('#zmorge-img').hide(1000);
	}); //end click zmorge-off
	$('#zmorge-btn-on').click(function(){
		$('#zmorge-img').show(500);
	}); //end click zmorge-on
	
	// animate kaffee image
	$('#kaffee-btn').click(function(){
		$('#kaffee-img').animate({
			opacity: '0.25',
			height: 'toggle'
		}, 2000, 'swing', function(){
			$('#kaffee-img').css({
				opacity: '1'
			}); //end kaffee img css
			$('#kaffee-btn').css({
				backgroundColor: '#DD6A61'
			}); //end kaffee btn css
		}); //end kaffee animate
	}); //end click kaffee
	
	//changing behavior of sommerregen
	$('#sommerregen-btn').click(function(){
		$('#sommerregen-img').removeClass('img-circle').addClass('img-rounded');
		$('.sommerregen h3').text('Regentropfen...');
		$('.sommerregen p').prepend('<p>Viele wissen nicht, dass auch ein Spaziergang im Regen erholsam ist!</p>');
		$('#sommerregen-btn').replaceWith('<p><span class="label label-success">Gratuliere, wünsche schönen Regentag!</span></p>');
	}); //end click sommerregen btn
	
	//hover offline image
	$('#offline-img').hover(function(){
		$('#offline-img').attr({
			'src': 'images/postkarte.jpg',
			'class': 'img-responsive img-rounded'
		}); //end attr
	}, function(){
		$('#offline-img').attr({
			'src': 'images/offline.jpg',
			'class': 'img-responsive img-circle'
		}); //end attr
	}); // end hover offline img
	
	//changing the css
	$('.img-circle').css({
		border:'5px solid black',
		fontSize: '24px'
	}); //end img-circle css
	
	//filtering
	$('.thumbnail:even').css({
		color:'white',
		backgroundColor:'black'
	}); //end thumbnail even css
	
	$('aside p:first, aside p:last').fadeOut(2000).fadeIn(500);
	
	//fade out the anfahrt img
	$('#anfahrt-img').fadeOut(2000).fadeIn(2000);
	$('#anfahrt-img').slideUp(2000).slideDown(2000);
	
	//changing the help message under the select box
	$('#optionen').change(function(){
		if($('#optionen').val() == 'see')
		{
			$('.search-group .help-block').text('Ein erfrischendes Bad im See ist am schönsten bei Vollmond!');
		} 
		else if($('#optionen').val() == 'tee')
		{
			$('.search-group .help-block').text('Auch im Sommer ist Tee trinken erfrischend, zum Beispiel mit Zitrone und Ingwer!');
		} 
		else if($('#optionen').val() == 'fruehstueck')
		{
			$('.search-group .help-block').text('Am besten schmeckt ein Frühstück, wenn man dabei den Sonnenaufgang beobachten kann!');
		} 
		else
		{
			$('.search-group .help-block').text('...Du kannst auch auf der Webseite nach Alternativen suchen!');
		} 
	}); //end change
	
	// form validation via focusout
	$('#name').focusout(function(){
		if($('#name').val().length == 0)
		{
			$('.name-group .help-block').text('Ehrlich gesagt...ich brauche unbedingt Deinen Namen, um Dir zu antworten.');
			$('.name-group').attr({
				'class':'col-sm-6 form-group name-group has-error'
			}); //end attr
		}
		else
		{
			$('.name-group .help-block').text('');
			$('.name-group').attr({
				'class':'col-sm-6 form-group name-group has-success'
			}); //end attr
		}
	}); //end focus out name
	
	
	// form validation via click submit
	$('button').click(function(submit){
		if($('#name').val().length == 0)
		{
			$('.name-group .help-block').text('Ehrlich gesagt...ich brauche unbedingt Deinen Namen, um Dir zu antworten.');
			$('.name-group').attr({
				'class':'col-sm-6 form-group name-group has-error'
			}); //end attr
			submit.preventDefault();
		}
		else
		{
			$('#myModal').modal();
			submit.preventDefault();
		}
	}); //end click submit
	
	
}); //end ready