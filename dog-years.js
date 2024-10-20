console.log(dogYears('mercury', 2134835688))

function dogYears(str, age){
	let newage = age*7/3600/24/365.25
	let changement=0
	switch(str){
		case  "earth" :
			changement = 1
			break
		case "mercury":
			changement = 0.2408467
			break
		case "venus":
			changement = 0.61519726
			break
		case "mars":
			changement = 1.8808158
			break
		case "jupiter":
			changement = 11.862615
			break
		case "saturn":
			changement = 29.447498
			break
		case "uranus":
			changement = 84.016846
			break
		case "neptune":
			changement = 164.79132
			break
		default:
			changement = undefined
	}
	let res = (newage/changement).toFixed(2)
	return (Number(res))
}
