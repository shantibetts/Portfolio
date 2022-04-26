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
const secretKey = 'bSazCXfjqQPm6t4IrICwvPSawRSXaXNcLwrrV_x-LSo'

// $.ajax({
// 	method: 'get',
// 	url: 'https://api.unsplash.com/photos/random/?client_id=' + unsplashAccessKey
// })
// 	.then((response) => {
// 		$('body').css('background-image', `url("${response.urls.full}")`)
// 	})
// 	.catch(() => {
// 		console.log('error')
// 	})
