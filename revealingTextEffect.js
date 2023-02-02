import './revealingText.css'

const effectElement = document.querySelector(".revealingText")

effectElement.addEventListener("mouseenter", applyEffect)

const originalText = effectElement.dataset.text

let playing = false

function applyEffect(e) {

    if (playing) return

    playing = true

	console.log("mmmm")
	const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let i = 0
	
	const interval = setInterval(() => {
			// effectElement.innerText = originalText
			// 	.split("")
			// 	.map((c, idx) => {
			// 			if (idx < i) return originalText[idx]
			// 			return alphabets[Math.floor(Math.random() * 26)]
			// 	})
			// 	.join("")

			effectElement.innerHTML = originalText
				.split("")
				.map((c, idx) => {
						if (idx < i) return `<span class="inactive done">${c}</span>`
						return `<span class="inactive">${alphabets[Math.floor(Math.random() * 26)]}</span>`
				})
				.join("")
		
		if(i >= originalText.length) clearInterval(interval)
		i += 1 / 3
		
		
	}, 75)

    playing = false
}