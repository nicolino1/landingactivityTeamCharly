 // Caught errors
 try {
    doSomething();
  } catch (e) {
    Rollbar.error("Something went wrong", e);
  }
  
  let e;

  Rollbar.error(e, function(err, data) {
      console.log(err)
      console.log(data)
    if (err) {
      console.log("Error while reporting error to Rollbar: ", e);
    } else {
      console.log("Error successfully reported to Rollbar. UUID:", data.result.uuid);
    }
  });