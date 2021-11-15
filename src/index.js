import('./bootstrap')
  .then(({ bootstrap }) => {
    bootstrap(document.getElementById('root'));
  })
  .catch(err => {
    console.error(err);
  });
