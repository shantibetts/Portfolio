$('#menuIcon').on('click', () => {
	$('nav').css('display', 'unset')
	$('#menuIcon').css('display', 'none')
	$('#menuX').css('display', 'unset')
})
$('#menuX').on('click', () => {
	$('nav').css('display', 'none')
	$('#menuX').css('display', 'none')
	$('#menuIcon').css('display', 'unset')
})

const unsplashAccessKey = 'H77Joy6-hev-qWlLnZ7Tw3URG_4lrjz5yhDXqdP3oPY'

// $.ajax({
// 	method: 'get',
// 	url:
// 		'https://api.unsplash.com/photos/jVpIG7a-6JU?client_id=' + unsplashAccessKey
// })
// 	.then((response) => {
// 		$('body').css('background-image', `url("${response.urls.full}")`)
// 		$('#photoCredit').attr('href', `${response.user.links.html}`)
// 		$('#photoCredit').html(`photo by ${response.user.name}`)
// 		console.log(response)
// 	})
// 	.catch(() => {
// 		console.log('error')
// 	})

$.ajax({
	method: 'get',
	url: `https://api.weather.gov/points/37.7,-119.6`
})
	.then((response) => {
		console.log(response)
		$.ajax({
			method: 'get',
			url: response.properties.forecastHourly
		})
			.then((response) => {
				$('.weather').append(
					`<p>${response.properties.periods[0].shortForecast}, ${response.properties.periods[0].temperature}ºF</p>`
				)
			})
			.catch(() => {
				console.log('error in 2nd pull')
			})
	})
	.catch(() => {
		console.log('error')
	})

const sheetUrl =
	'https://docs.google.com/spreadsheets/d/1AVu1C-kfLCle-jHfPbu95fF1y2q9xJ6gVxpehcaWMRI/edit?usp=sharing'
const sheetId = '1AVu1C-kfLCle-jHfPbu95fF1y2q9xJ6gVxpehcaWMRI'

const key = 'AIzaSyBqiBqr5sQwZfIk_4qnWyFOp1TGBsMpUUs'

const sheetsApiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/'

const rangeStart = 'a2'
const rangeEnd = 'f5'
let range = `/values/${rangeStart}:${rangeEnd}`

let url = `${sheetsApiUrl}${sheetId}${range}?key=${key}`
console.log(url)
$.ajax({ url: url, key: key }).then((data) => {
	console.log(data)
	const projects = data.values
	projects.forEach((project, i) => {
		let tagsCSV = project[4]
		let tags = tagsCSV.split(',')
		$('#project1')
			// Append Image source and alt text
			.append(`<img src="${project[2]}" alt="${project[3]}"/>`)
			// Append Project title and link
			.append(`<a href="${project[5]}"><h4>${project[0]}</h4></a>`)
			// Append project descritpion
			.append(`<p>${project[1]}</p>`)
			.append('<ul class="tags"></ul>')
		// Append project tags
		tags.forEach((tag) => {
			$('#project1 ul').append(`<li>
			<img src="assets/skillsIcons/${tag}.svg" alt="${tag} icon" />
		</li>`)
		})
	})
})
