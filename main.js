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
