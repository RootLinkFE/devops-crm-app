const list = process.env.MENTION_MOBILE_LIST || '';

module.exports = {
  mentionMobileList: list.split(','),
};
