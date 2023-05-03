//var stripe = require('stripe')('sk_test_51N3dEXSIFrSCf4gkkWZuHKaH1miYlkx1CYHByGlT2f4gG9pS8g3gPFYBQ6MKLpHRPCcpOIxa2bhUyGkxHZTdHLoH00JAjTtffA');
const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()

var Publishable_Key = 'pk_test_51N3dEXSIFrSCf4gkw4rU7UXc7pwint8GkpMB5DtFOE6W3lihmAsrrQwqOLPddhsGbg8k7qOYRb1CazBwl0XuHeTa00fiE72GBJ'
var Secret_Key = 'sk_test_51N3dEXSIFrSCf4gkkWZuHKaH1miYlkx1CYHByGlT2f4gG9pS8g3gPFYBQ6MKLpHRPCcpOIxa2bhUyGkxHZTdHLoH00JAjTtffA'

const stripe = require('stripe')(Secret_Key)

const port = process.env.PORT || 3000

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('Home', {
	key: Publishable_Key
	})
})

app.post('/payment', function(req, res){

	// Moreover you can take more details from user
	// like Address, Name, etc from form
	stripe.customers.create({
		email: req.body.stripeEmail,
		source: req.body.stripeToken,
		name: 'Salil Apte',
		address: {
			line1: 'TC 9/4 Old MES colony',
			postal_code: '452331',
			city: 'Indore',
			state: 'Madhya Pradesh',
			country: 'India',
		}
	})
	.then((customer) => {

		return stripe.charges.create({
			amount: 2500,	 // Charging Rs 25
			description: 'Web Development Product',
			currency: 'INR',
			customer: customer.id
		});
	})
	.then((charge) => {
		res.send("Success") // If no error occurs
	})
	.catch((err) => {
		res.send(err)	 // If some error occurs
	});
})

app.listen(port, function(error){
	if(error) throw error
	console.log("Server created Successfully")
})


