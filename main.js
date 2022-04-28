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

const key = 'hidden'

const sheetsApiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/'

const rangeStart = 'a1'
const rangeEnd = 'f8'
let range = `/values/${rangeStart}:${rangeEnd}`
$.ajax({
	url: `${sheetsApiUrl}${sheetId}${range}?key=${key}`,
	key: key
}).then((data) => {
	console.log(data)
	const skillsCSV = data.values[1][0]
	let skills = skillsCSV.split(',')
	skills.forEach((skill) => {
		$('#skills ul').append(
			`<li><img src="assets/skillsIcons/${skill}.svg" alt="${skill} icon" /></li>`
		)
	})
	const projects = data.values.slice(4)
	projects.forEach((project) => {
		let tagsCSV = project[4]
		let tags = tagsCSV.split(',')
		let articleName = project[0].replace(/\s/g, '').toLowerCase()
		let $article = $(`<article id="${articleName}" class="project"></article>`)
		$article
			// Append Image source and alt text
			.append(
				`<img class="projectImg" src="${project[2]}" alt="${project[3]}" />`
			)
			// Append Project title and link
			.append(
				`<a href="${project[5]}" target="_blank"><h4>${project[0]}</h4></a>`
			)
			// Append project descritpion
			.append(`<p>${project[1]}</p>`)
		let $ul = $('<ul class="tags"></ul>')
		tags.forEach((tag) => {
			let $li = $(`<li><img class="projectSkillsIcon"
				src="assets/skillsIcons/${tag}.svg" alt="${tag} icon" /></li>`)
			$ul.append($li)
		})
		$article.append($ul)
		$('.portfolioContent').append($article)
	})
})
