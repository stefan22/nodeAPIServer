const dataPath = "./data/users.json";

const userRoutes = (app, fs) => {

  //helper method
  const readFile = (callback,returnJson = false, filePath = dataPath, encoding = "utf8"
  ) => {

    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }
      callback(returnJson ? JSON.parse(data) : data);
    });

  };

  //helper method
  const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8'
    ) => {

    fs.writeFile(filePath, fileData, encoding, (err) => {
      if(err) {
        throw err;
      }
      callback();
    })
  }


  //read
  app.get("/users", (req, res) => {

    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });

  });


  //create
  app.post('/users', (req, res) => {

    readFile(data => {
      let userId = Object.keys(data).length + 1;
      
      //add new user
      data[userId.toString()] = req.body;
      
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('added new user');
      });

    }, true);
  
  });

  
  //update
  app.put('/users/:id', (req, res) => {

    readFile(data => {

      //add user
      let userId = req.params["id"];
      data[userId.toString()] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`user ${userId} updated`);
      });

    }, true);
  });


  //delete
  app.delete('/users/:id', (req, res) => {

    readFile(data => {

      //delete user
      let userId = req.params["id"];
      delete data[userId.toString()];

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`user id ${userId} deleted`);
      })
    }, true);
  })

};

module.exports = userRoutes;
