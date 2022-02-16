var timeTrackingDashboard = new Vue({ //Cre 2AC
	el: '#app',
	data: {
		data: '',
		daily: true,
		weekly: false,
		monthly: false
	},
	methods: {
		async json() {
			await this.promise()
				.then(
					() => {
						return fetch('json/data.json')
					}
				)
				.then(
					f => {
						return f.json()
					}
				)
				.then(
					j => {
						return this.data = j
					}
				)
		},
		promise() {
			return new Promise(r => setTimeout(() => r(), 0))
		},
		log(t) {
			return console.log(t)
		},

		toggleTimeframes() {
			this.daily = this.weekly = this.monthly = false
			this[event.target.innerText.toLowerCase()] = true
		}
	},
	async created() {
		await this.json()
	},
	async mounted() {
	}
});