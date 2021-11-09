const { notificationSuccess } = require('./notification');

const text = process.argv[2];

notificationSuccess(`${text}`, () => {});
