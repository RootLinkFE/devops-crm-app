var QRCode = require('qrcode');
var md5 = require('md5');
const { notificationSuccess } = require('./notification');

/**
 * text转二维码buffer
 */
function toBuffer(text) {
  return new Promise((resolve, reject) => {
    QRCode.toBuffer(text, (error, buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer);
      }
    });
  });
}

/**
 * 发送二维码
 */
async function sendQrcode(url) {
  const buffer = await toBuffer(url);
  const base64 =
    // eslint-disable-next-line no-undef
    Buffer.from(buffer, 'utf8').toString('base64');

  notificationSuccess({
    msgtype: 'image',
    content: base64,
    md5: md5(buffer),
  });
}

module.exports = { sendQrcode };
