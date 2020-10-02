var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1lbKcaKlHUKlWf-9-YjSuULKIy5cvZwJGYj97Ab4YpHo/edit?usp=sharing';

function init() {
	Papa.parse(publicSpreadsheetUrl, {
		download: true,
		header: true,
		complete: showInfo
	})
}
	
function showInfo(results) {
	var data = results.data
	alert('Successfully processed ' + data.length + ' rows!')

	data.forEach(function(data) {
body.innerHTML = data.body;
body2.innerHTML = data.body2;
});
}
window.addEventListener('DOMContentLoaded', init)
