var CHANNEL_ACCESS_TOKEN = 'Kp//m6R5E/xMQevFqaP4plK41ybmmD8jDLcjOhBF2qkzD9khM3Vg0w4JWdwUJuAzMu4ivBfcA+39iUJzuEfpB9+jCC664Ufxc4GjtQdbPzdCaTRVSL4HiBhBo7+Z4HHBmfFfmZxqsLD6m611SSbShAdB04t89/1O/w1cDnyilFU=';

function doPost(e) {
  var reply_token=JSON.parse(e.postData.contents).events[0].replyToken;
  if(typeof reply_token === '何言ってるかわかんない') {
    return;
  }
  var user_message = JSON.parse(e.postData.contents).events[0].message.text;
  var url = 'https://api.line.me/v2/bot/message/reply';

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
        'replyToken': reply_token,
        'messages': [{
            'type': 'text',
            'text': user_message + 'ですかー。面白いですね。',
        }],
    }),
});
return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}