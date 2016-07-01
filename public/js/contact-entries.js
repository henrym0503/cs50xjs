jQuery(document).ready(function($){

  var insertOne = function(row) {
    $('.contact-entries tbody').append(
      `<tr><td>${row._id}</td><td>${row.email}</td><td>${row.message}</td></tr>`
    )
  }

  var insertMany = function(rows) {
    rows.forEach(insertOne)
  }
  $.get('/contact-entries').done(insertMany)


})
