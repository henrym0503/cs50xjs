var mongoose =  require('mongoose')
var mongoDB = mongoose.connection

mongoose.connect('mongodb://henrymorales.com/sexy')

mongoDB.on('error', console.error.bind(console, 'error'))

mongoDB.on('open', function() {
  console.log('MongoDB connection ready!')
})

module.exports.insert = function(collection, dataSet, callback) {
  if (collection.length) {

    var _collection = mongoDB.collection(collection, mongoDB)
    dataSet = dataSet || {}

    _collection.insertOne(dataSet, function(err, result) {
      if ( err ) throw err
      callback(result)
    })
  }
}

module.exports.find = function(collection, dataSet, callback) {
  if (collection.length) {

    var _collection = mongoDB.collection(collection, mongoDB)
    dataSet = dataSet || {}

    mongoDB.collection(collection).find(dataSet).toArray(callback)
  }
}

module.exports.connection = mongoDB
