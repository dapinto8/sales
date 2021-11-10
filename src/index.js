import('./bootstrap')
  .then(({ default: bootstrap }) => {
    bootstrap(document.getElementById('root'));
  })
  .catch(err => {
    console.error(err);
  });
