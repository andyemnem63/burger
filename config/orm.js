// Get the connection to mysql 
let connection = require('./connection');


	// Show everything from table
	let selectAll () => {
	  connection.query("SELECT * FROM burgerstable;", (err,data) => {
	    if (err) {
	      throw err;
	    }
	  });
	}

	// Inserts into table
	let insertOne () => {
		let query = //Something; 
	  connection.query('INSERT INTO burgerstable (burger_name) VALUES (?)', [query],, (err,data) => {
	    if (err) {
	      throw err;
	    }
	  });
	}

	// Update table
	let updateOne () => {
		let query = //Something;
	  connection.query('UPDATE plans SET plan = ? WHERE id = ?', [query,query],(err,data) => {
	    if (err) {
	      throw err;
	    }
	  });
	}