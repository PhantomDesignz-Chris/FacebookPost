const FB = require('fb');

const access_token =  'ACCESS TOKEN HERE';
FB.setAccessToken(access_token);

var body = "We're going live in 5 minutes! Come on by to catch some awesome clips or send an invite to join up in the stream! http://www.twitch.tv/TWITCHUSERNAMEHERE";
FB.api('PAGENAMEHERE/feed', 'post', { message: body }, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});