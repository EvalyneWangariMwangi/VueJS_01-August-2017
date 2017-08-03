window.Vue = require('./node_modules/vue/dist/vue.js')
require("!style-loader!css-loader!./style.css"); 

var NavigationBar = {
	 template: '<div class="row"><div class="large-4 columns"><ul class="menu align-right"><li><a href="">Home</a></li><li><a href="">Book Appoinment</a></li><li><a href="">Contact Us</a></li></ul></div></div>'
}

Vue.component('individual-comment', {
  template: 
  '<li> {{ commentpost }} </li>',
  props: ['commentpost']
});

new Vue({

	el: '#app',

	data () {
		return {
			message: 'Kiera Leashea',
			appointment: {},
			appointments: [],
			newComment: '',
			comments: [
		      'I wish you could serve tea to your customers'
		    ],
	      activeColor: 'red',
	      fontSize: 30,
	      question: '',
	      answer: 'Tell Me what you are looking for:',
	      isActive: true,
  		hasError: false,
  		itemsInStock: ''
		}
	}, 

	watch: {
			question: function (val) {
				this.answer = val + ':  is hard to find here Kiera will get back to you shortly'
			}
		},

	components: {
		"my-header": NavigationBar
	},

	computed: {
		swag: function () {
			return itemsInStock = 50 - 10
		},
		reversedMessage: function () {
			return this.message.split('').reverse().join('')
		}
	},

	methods: {
		addNewAppointment: function() {
			 this.appointments.push(this.appointment)
      		this.appointment = {}
		},
		addComment: function () {
	      this.comments.push(this.newComment)
	      this.newComment = ''
	    },
		remove: function () {
      		this.appointment.splice()
    	}
	}
});