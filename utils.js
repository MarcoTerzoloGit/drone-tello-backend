const delay = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

const parseMessage = (message = '') => {
  return (message
    .split(';')
    .map(item => item.split(':'))
    .reduce((acc, cur) => {
      acc[cur[0]] = cur[1];
      return acc;
    }, {})
  )
}

module.exports = {
  delay,
  parseMessage
}