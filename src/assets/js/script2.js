new Glide("'.glide'",{
	type: 'carousel',
	perView: 3.15,
	gap: 40,
	autoplay: 2500,
	focusAt: 'center',
	breakpoints: {
		1680:{
			perView: 2.8,
		},
		1450:{
			perView: 2.4,
		},
		1280:{
			perView: 2.1,
		},
		1030:{
			perView: 2,
		},
		560:{
			focusAt: 0,
			perView: 1,
			gap: 10,
		}
	}
}).mount();
