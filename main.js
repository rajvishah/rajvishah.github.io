var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1lbKcaKlHUKlWf-9-YjSuULKIy5cvZwJGYj97Ab4YpHo/edit?usp=sharing';

function init() {
	Tabletop.init( {
		key: publicSpreadsheetUrl,
		callback: showInfo,
		simpleSheet: true 
	} )
}

	
function showInfo(data, tabletop) {
data.forEach(function(data) {
body.innerHTML = data.body;
body2.innerHTML = data.body2;
});
}
window.addEventListener('DOMContentLoaded', init)
