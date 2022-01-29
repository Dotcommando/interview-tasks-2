/**
 * Returns a promisifed version of the given callback-based asynchronous function.
 *
 * Assumes that the given function always accepts a callback as the last
 * argument.
 */
function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      }

      args.push(callback);

      fn.call(this, ...args);
    });
  };
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
