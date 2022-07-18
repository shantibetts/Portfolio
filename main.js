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
		[
			'html,css,javascript,jquery,ajax,react,nodejs,mongodb,express,django,python,postgresql'
		],
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
			'Portfolio Website',
			'A mobile-first portfolio website utilizing Ajax to fetch data from Google Sheets to populate showcase projects and current skills. Jquery, native javascript and responsive CSS are used to create a seamless experience at any size. Ajax is used to fetch the background photo from unsplash, as well as the photo accredidation. A third Ajax call queries the weather in Yosemite Valley, where the background image was taken.',
			'./assets/pictures/portfolio-image.png',
			'Portfolio website picture',
			'html,css,javascript,jquery,ajax',
			'./assets/pictures/portfolio-image'
		],
		[
			'Tarot Reader',
			'A mobile-first React application for creating Tarot readings. Leverages dynamic React components and state to create a robust and scalable application ready for future expansion. Utilizes MUI component library and dynamic CSS to create a modern and seamless user experience from mobile to desktop.',
			'./assets/pictures/tarot-reader-image.png',
			'Tarot Reader picture',
			'react,css',
			'https://shantibetts.github.io/tarot-reader/#/'
		],
		[
			'Tracker',
			'An interactive app that tracks bugs and can assign them to users for comments and resolution. A clean, modern interface using MUI components and reactive styling to provide a mobile-first experience.',
			'./assets/pictures/tracker-image.png',
			'Tracker picture',
			'nodejs,mongodb,express,react,css',
			'https://team2-tracker.github.io/tracker-client/#/'
		],
		[
			'Burning Wheel Character Sheet',
			'A full-stack MERN application to track and update character sheets. Implemented with Mongodb, Express, React and Node.js to create a persistent database of users and their characters with RESTful API to communicate with a custom front-end to display and update character data.',
			'./assets/pictures/charcter-sheet.png',
			'Burning Wheel Character Sheet picture',
			'nodejs,mongodb,express,react,css',
			'#'
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
