$(function(){
	console.log('My page works!');
	
	// if user selects link one
	$('#citySelect').on('click', '#one', function(){
		// get JSON
		$.getJSON('http://api.wunderground.com/api/091d2f6507d214c6/conditions/q/PA/West_Chester.json')
		
		// if it loads
		.done(function(data){
			// variable to update
			var newContent = '';
	
			// add information to variable
			var newContent = '<h2><img src="' + data.current_observation.icon_url + '"';
			newContent += ' id="weatherIcon" alt="Current Weather Icon" />';
			newContent += data.current_observation.display_location.full + '</h2>';
			newContent += '<li>Current Weather: ' + data.current_observation.weather + '</li>';
			newContent += '<li>Temperature: ' + data.current_observation.temp_f + '(F)</li>';
			newContent += '<li>Feels Like: ' + data.current_observation.feelslike_f + '(F)</li>';
			newContent += '<li>Humidity: ' + data.current_observation.relative_humidity + '</li>';
			newContent += '<li>Wind: ' + data.current_observation.wind_string + '</li>';
	
			// update content
			$('section').html(newContent);

		// if it fails to load
		}).fail(function(){
			$('section').html('Sorry, we were unable to load the relevant data!');	
		});
	
	});
	
	// if user selects link two
	$('#citySelect').on('click', '#two', function(){
		// get JSON
		$.getJSON('http://api.wunderground.com/api/091d2f6507d214c6/conditions/q/NJ/Trenton.json')
		
		// if it loads
		.done(function(data){
			// variable to update
			var newContent = '';

			// add information to variable
			var newContent = '<h2><img src="' + data.current_observation.icon_url + '"';
			newContent += ' id="weatherIcon" alt="Current Weather Icon" />';
			newContent += data.current_observation.display_location.full + '</h2>';
			newContent += '<li>Current Weather: ' + data.current_observation.weather + '</li>';
			newContent += '<li>Temperature: ' + data.current_observation.temp_f + '(F)</li>';
			newContent += '<li>Feels Like: ' + data.current_observation.feelslike_f + '(F)</li>';
			newContent += '<li>Humidity: ' + data.current_observation.relative_humidity + '</li>';
			newContent += '<li>Wind: ' + data.current_observation.wind_string + '</li>';
			
			// update content
			$('section').html(newContent);

		// if it fails to load
		}).fail(function(){
			$('section').html('Sorry, we were unable to load the relevant data!');	
		});
	
	});

});