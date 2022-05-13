// event listener to show nav menu and switch icons from menu to X
$('#menuIcon').on('click', () => {
	$('nav').css('display', 'unset')
	$('#menuIcon').css('display', 'none')
	$('#menuX').css('display', 'unset')
})
// event listener to hide nav menu and switch icons from X to menu
$('#menuX').on('click', () => {
	$('nav').css('display', 'none')
	$('#menuX').css('display', 'none')
	$('#menuIcon').css('display', 'unset')
})

const unsplashAccessKey = 'abZGgOrsF_5Hthmo9zAZKPfGQ81NZGoU4SYx6lNehKY'

$.ajax({
	method: 'get',
	url:
		'https://api.unsplash.com/photos/jVpIG7a-6JU?client_id=' + unsplashAccessKey
})
	.then((response) => {
		$('body').css('background-image', `url("${response.urls.full}")`)
		$('#photoCredit').attr('href', `${response.user.links.html}`)
		$('#photoCredit').html(`photo by ${response.user.name}`)
	})
	.catch(() => {
		console.log('error in unsplash pull request')
	})

$.ajax({
	method: 'get',
	url: `https://api.weather.gov/points/37.7,-119.6`
})
	.then((response) => {
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
				console.log('error in weather.gov 2nd pull request')
			})
	})
	.catch(() => {
		console.log('error in weather.gov 1st pull request')
	})

const sheetUrl =
	'https://docs.google.com/spreadsheets/d/1AVu1C-kfLCle-jHfPbu95fF1y2q9xJ6gVxpehcaWMRI/edit?usp=sharing'
const sheetId = '1AVu1C-kfLCle-jHfPbu95fF1y2q9xJ6gVxpehcaWMRI'

const key = 'AIzaSyBa9EX18cV6mOGrHBufTQcPw9UFDf_DzwM'

const sheetsApiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/'

// Define a function to create projects section of website based on an array.
const createProjects = (data) => {
	const skillsCSV = data.values[1][0]
	let skills = skillsCSV.split(',')
	skills.forEach((skill) => {
		$('#skills ul').append(
			`<li><img src="assets/skillsIcons/${skill}.svg" alt="${skill} icon" /></li>`
		)
	})
	const projects = data.values.slice(4)
	projects.forEach((project) => {
		// Set skill tags as a string with comma seperated values, then convert to an array of skills
		let tagsCSV = project[4]
		let tags = tagsCSV.split(',')
		// Set article name to a no-space string of all lower case for jQuery class
		let articleName = project[0].replace(/\s/g, '').toLowerCase()
		// Create jQery object for new project
		let $article = $(`<article id="${articleName}" class="project"></article>`)
		$article
			// Append image source and alt text
			.append(
				`<img class="projectImg" src="${project[2]}" alt="${project[3]}" />`
			)
			// Append project title and link
			.append(
				`<a href="${project[5]}" target="_blank"><h4>${project[0]}</h4></a>`
			)
			// Append project descritpion
			.append(`<p>${project[1]}</p>`)
		// Define ul object, then loop through each skill for the project, and add them as li's
		let $ul = $('<ul class="tags"></ul>')
		tags.forEach((tag) => {
			let $li = $(`<li><img class="projectSkillsIcon"
				src="assets/skillsIcons/${tag}.svg" alt="${tag} icon" /></li>`)
			$ul.append($li)
		})
		// Append ul to article
		$article.append($ul)
		$('.portfolioContent').append($article)
		// Make sure the view window stays at the top of the page
		window.scrollTo(0, 0)
	})
}

const defaultProjectsArray = {
	values: [
		['Current Skills'],
		['html,css,javascript,jquery,ajax'],
		[],
		[
			'Project Name',
			'Project Description',
			'Project Picture',
			'Picture Alt Text',
			'Project tags',
			'Project URL'
		],
		[
			'Project 1',
			'Lorem ipsum dolor sit amet, consectetur adipiscing… laboris nisi ut aliquip ex ea commodo consequat.',
			'https://via.placeholder.com/1024x512.png?text=Project+1',
			"Project 1's picture",
			'html,css,javascript,jquery,ajax',
			'https://docs.google.com/spreadsheets/d/1AVu1C-kfLCle-jHfPbu95fF1y2q9xJ6gVxpehcaWMRI/edit#gid=0'
		],
		[
			'Project 2',
			'Duis aute irure dolor in reprehenderit in voluptat… qui officia deserunt mollit anim id est laborum.',
			'https://via.placeholder.com/1024x512.png?text=Project+2',
			"Project 2's picture",
			'react,ajax',
			'https://docs.google.com/spreadsheets/d/1AVu1C-kfLCle-jHfPbu95fF1y2q9xJ6gVxpehcaWMRI/edit#gid=0'
		],
		[
			'Project 3',
			'Sollicitudin tempor id eu nisl nunc mi. Luctus acc…amus arcu felis bibendum ut tristique et egestas.',
			'https://via.placeholder.com/1024x512.png?text=Project+3',
			"Project 3's picture",
			'nodejs,mongodb,express',
			'https://docs.google.com/spreadsheets/d/1AVu1C-kfLCle-jHfPbu95fF1y2q9xJ6gVxpehcaWMRI/edit#gid=0'
		],
		[
			'Project 4',
			'Tristique nulla aliquet enim tortor at auctor. Qui…ibulum rhoncus est pellentesque elit ullamcorper.',
			'https://via.placeholder.com/1024x512.png?text=Project+4',
			"Project 4's picture",
			'python,sql,django',
			'https://docs.google.com/spreadsheets/d/1AVu1C-kfLCle-jHfPbu95fF1y2q9xJ6gVxpehcaWMRI/edit#gid=0'
		]
	]
}

const rangeStart = 'a1'
const rangeEnd = 'f8'
let range = `/values/${rangeStart}:${rangeEnd}`
$.ajax({
	url: `${sheetsApiUrl}${sheetId}${range}?key=${key}`,
	key: key
})
	.then((event) => {
		createProjects(event)
		console.log(event)
	})
	.catch(() => {
		createProjects(defaultProjectsArray)
		console.log('Google Sheets fetch error')
	})
