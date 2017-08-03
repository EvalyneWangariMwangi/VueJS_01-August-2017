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
	      fontSize: 30
		}
	}, 

	components: {
		"my-header": NavigationBar
	},

	computed: {
		fullname: function () {
			alert("Hey, " + appointment.name + appointment.secondname + "added")
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