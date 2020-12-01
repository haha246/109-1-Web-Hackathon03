import Question from '../models/Question'
import Answer from '../models/Answer'

exports.GetContents = async (req, res) => {
  // TODO : get questions from mongodb and return to frontend
const data = await Question.find()
const db = mongoose.connection
console.log(data)

db.on('error', (error) => {
  res.status(403).send({ message: 'error', contents: [] })
})
	
db.once('open', () => {
	console.log('111')
	const data = Question.find()
	console.log(data)
	  })

	if(data == ''){
		res.status(200).send({ message: 'error', contents: [] })
	}
  else{
	  res.status(403).send({ message: 'success', contents: data })
  }
	  		
}

exports.CheckAns = async (req, res) => {
  // TODO : get answers from mongodb,
  // check answers coming from frontend and return score to frontend
}
