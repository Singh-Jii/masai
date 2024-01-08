const error = (er, request, response, next) => {

  console.log(er.stack);

  if (er.name === 'ValidationError') {

    const prblms = Object.values(er.prblms).map((prblm) => prblm.message);

    return response.status(400).json({ error: prblms });

  }

  response.status(500).json({ error: 'error' });
  
};

module.exports = error;
