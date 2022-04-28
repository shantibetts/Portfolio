# Portfolio Project

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day       | Deliverable                                  | Status     |
| --------- | -------------------------------------------- | ---------- |
| Sat/Sun   | Project Description                          | Complete   |
| Sun/Mon   | Wireframes / Priority Matrix / Timeline      | Complete   |
| Wednesday | Core Application Structure (HTML, CSS, etc.) | Complete   |
| Thursday  | MVP & Bug Fixes                              | Complete   |
| Friday    | Final Touches                                | Complete   |
| Friday    | Present                                      | Incomplete |

## Project Description

### Design:

I want my website to create the feeling of looking out a rainy window into an overcast day. I'm going to try to create this using:

- A macro image of water droplets on glass, with tones in the grey / blue range to either:

  1.  Use it as a static background with content on top that has semi-transparent backgrounds of blue/grey
  1.  Use a background color of blue/grey and give each piece of content a copy of the semi-tranpsarent image

- Transparency and subtle animation to make it feel like the content is on glass slides that are _sliding_ on mouseover

- A soft theme that doesn't take away from the content

### Inspirations:

[Virginia Orosa](https://www.virginiaorosa.com/) does a really nice design using simple colors and shapes. I would like to do something similar but with

- widely rounded corners
- shadows + gaps to make it seem like the content is hovering slightly above the background
- I really like her skills list (using icons, having it scroll) I would like to implement something like this as a stretch goal

[Milli design agency](https://www.milli.agency/) I really love the dynamic motion of the navigation frames, with the brand in the middle. However, it breaks down on mobile, so I think I will omit it. Maybe as a stretch-stretch goal I will impliment something like this for my desktop version.

[Dr Gerogiou](https://www.orestisgeorgiou.com/) I really like the large, professional, high-quality pictures of him looking like he's having fun. I'm hoping to work in back-end, so I dont think I need this level of personal representation in my portfolio, but I felt like it was really well done. One problem is that his content stays stubbornly in 2 columns no matter how small the screen gets. I don't know that I can replicate, but I really like the landing on his home page - navigation bar along the top, picture filling the screen, plus large name along the bottom, that becomes the H1 as you scroll down.

[Kristen Lee](https://www.kristenleecalligraphy.com/services) does a really nice job with large picture examples of her work with lots of white space. Flexbox for aligning content plus a grid that shrinks from 2 columns to 1 for mobile is a must.

## Wireframes

[See wireframes PDF](https://drive.google.com/file/d/1ITKI6UD9q0miLgLvHXOe7XTP14xOMoAP/view?usp=sharing)

## Time/Priority Matrix

[See Time/Priority Matrix](https://drive.google.com/file/d/19NVF9wNiMfTp7ZFXD8Xe5JUZJzQaKnLh/view?usp=sharing)

### MVP

- HTML Backbone
- Basic CSS
- Header
- Intro section
- Portfolio section
- Footer
- Nav bar

#### PostMVP

- Skills section
- Contact section
- Animations
- Background IMG
- Slide animation
- Nav Animation
- Logo Creation

## Functional Components

Over all design: on Mobile, body has a 2 column grid with 6 sections:

| Column 1 | Column 2 |
| -------- | -------- |
| Header   | Header   |
| Nav      | Intro    |
| Nav      | Projects |
| Nav      | Contact  |
| Nav      | Skills   |
| Footer   | Footer   |

With Column 1 hiden until the hamburger menu is clicked. When the nav menu is open, the hamburger changes to an X

On Desktop, the grid will change to:

| Column 1 | Column 2 | Column 3 | Column 4 |
| -------- | -------- | -------- | -------- |
| Header   | Header   | Header   | Header   |
| Nav      | Intro    | Intro    | Skills   |
| Nav      | Projects | Projects | Projects |
| Nav      | Contact  | Contact  | Contact  |
| Footer   | Footer   | Footer   | Footer   |

Inside this, Projects will have a grid layout with 2 columns to populate the actual projects inside. Column 1 will maintain it's functionality from mobile.

#### MVP

| Component               | Priority | Estimated Time | Actual Time |
| ----------------------- | :------: | :------------: | :---------: |
| Basic HTML / CSS        |    5     |      2hr       |     1hr     |
| Header/Footer/Nav/Intro |    4     |      4hr       |     1hr     |
| Grid                    |    4     |      3hr       |     1hr     |
| Portfolio               |    3     |      6hr       |     1hr     |
| Nav Bar Hide/Show       |    3     |      4hr       |    0.5hr    |
| Social Media Icons      |    2     |      1hrs      |    0.5hr    |
| ++Dynamic styling       |    3     | not estimated  |    2hrs     |
| Total                   |          |     20hrs      |    7 hrs    |

#### PostMVP

| Component                    | Priority | Estimated Time | Actual Time |
| ---------------------------- | :------: | :------------: | :---------: |
| Skills Section               |    0     |      3hr       |   2.5hrs    |
| Contact Form                 |   2.5    |      1hr       |     1hr     |
| Background image API         |    1     |      2hr       |     1hr     |
| Nav Animation                |    2     |      2hr       |    0.5hr    |
| Animations                   |    0     |      4hr       |     2hr     |
| Make own icon                |    2     |      4hr       |    1.5hr    |
| ++Chose background img       |    4     | not estimated  |     2hr     |
| ++Reformat for design change |    6     | not estimated  |     3hr     |
| ++More CSS, round and round  |    1     | not estimated  |    2 hr     |
| ++API weather for Yosemite   |    0     | not estimated  |     2hr     |
| ++API pull from Sheets       |    0     | not estimated  |    2.5hr    |
| ++API from Sheets styling    |    0     | not estimated  |   1hr hr    |
| ++skill icons for course     |    0     | not estimated  |     2hr     |
| ++obfuscate API keys         |    5     | not estimated  |     hr      |

| Total | | 16hrs | hrs |

## Additional Libraries

CSS Reset: Remove all default formatting from HTML
jQuerry: Change the HTML to animate and for NAV functionality
Ajax: fetch a background image

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```js
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
})
	.then((data) => {
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
			// Set skill tags as a string with comma seperated values, then convert to an array of skills
			let tagsCSV = project[4]
			let tags = tagsCSV.split(',')
			// Set article name to a no-space string of all lower case for jQuery class
			let articleName = project[0].replace(/\s/g, '').toLowerCase()
			// Create jQery object for new project
			let $article = $(
				`<article id="${articleName}" class="project"></article>`
			)
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
	})
	.catch(() => {
		console.log('Google Sheets fetch error')
	})
```

This API queries my google sheet and iterates through the data, creating HTML to populate my projects section of my website, as well as generating the classes and id's so it can be properly styled. Finally, it makes sure that the window stays at the top of the site so there is no scroll on load.

## Issues and Resolutions

1. footer icons appear to have a margin below them that biases them up. It seems to be relative to the width of the viewport, but I can't figure out what element it's comming from. Noting and moving on. **I never found out why this was happening. But by displaying them inside a grid and using align-content: center, the issue has gone away.**
1. my API keys are all plain text, and have been uploaded to my changelist history. **I deleted and re-issue all keys. Still no resolution on how to permanenty include them in a website and store it publicly.**
1. my API created sections are not formatting properly. I need to add them into my CSS so they get the proper styling. **I added JS functionality to add the proper classes and ids, and added some CSS to pick up new elements that needed styling**

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object

**ERROR**
javaScript.svg:1 Failed to load resource: net::ERR_FILE_NOT_FOUND
React.svg:1 Failed to load resource: net::ERR_FILE_NOT_FOUND
Node.svg:1 Failed to load resource: net::ERR_FILE_NOT_FOUND
Mongodb.svg:1 Failed to load resource: net::ERR_FILE_NOT_FOUND
Express%20API.svg:1 Failed to load resource: net::ERR_FILE_NOT_FOUND
Python.svg:1 Failed to load resource: net::ERR_FILE_NOT_FOUND
SQL.svg:1 Failed to load resource: net::ERR_FILE_NOT_FOUND
Django.svg:1 Failed to load resource: net::ERR_FILE_NOT_FOUND
CS.svg:1 Failed to load resource: net::ERR_FILE_NOT_FOUND

\*\*RESOLUTION: I added the proper icons to the relative folder.
