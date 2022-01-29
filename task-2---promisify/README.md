# Promisify function

Write the body of the function `promisify` that gets an asynchronous function
and returns promisified version of the function. 

    function promisify(fn) {

    }
    
    /**
     * Asynchronously fetches a user with the given id.
     */
    function fetchUser(id, callback) {
      if (!id) {
        return callback(new Error('id should be a non-empty string.'));
      }
    
      setTimeout(() => {
        callback(null, {
          id,
          name: 'Mikhail',
          skills: ['JavaScript', 'Node.js', 'Angular'],
        });
      }, 1000);
    }
    
    const promisifiedFetchUser = promisify(fetchUser);
    
    promisifiedFetchUser(1, console.log);
    
    promisifiedFetchUser(null, console.log);
