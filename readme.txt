

dropzone-local
client_id: 1ylg6axwjf36osm2q11nonpap4v6xt
client_secret: w7y40hkwnnccnoxi2ss5zd3ezkjqo6
--------------------------------------------------------------------

GET
https://id.twitch.tv/oauth2/authorize?client_id=1ylg6axwjf36osm2q11nonpap4v6xt&redirect_uri=http://localhost:9000/api/third-party/twitch/redirect&response_type=code&scope=openid user:read:email&state={"locale":"/GLOBAL/en","redirect_uri":"http://localhost:3000/return/auth/twitch"}

GET https://id.twitch.tv/oauth2/authorize?
client_id=1ylg6axwjf36osm2q11nonpap4v6xt
&redirect_uri=http://localhost:9000/api/third-party/twitch/redirect
&response_type=code
&scope=openid user:read:email
&state={  
   "locale":"/GLOBAL/en",
   "redirect_uri":"http://localhost:3000/return/auth/twitch"
}

---------------------------------------------------------------
dropzone-dev

redirect to http://localhost:3000/return/auth/twitch
GET 
https://id.twitch.tv/oauth2/authorize?client_id=l5ubhxte7n3nt9l00nk85ldlhuouav&redirect_uri=https://dz-dev.xyzcamp.com/api/third-party/twitch/redirect&response_type=code&scope=openid user:read:email&state={"locale":"/GLOBAL/en","redirect_uri":"http://localhost:3000/return/auth/twitch"}


redirect to https://dz-dev.xyzcamp.com/GLOBAL/en/coach/test001?gameId=7
https://id.twitch.tv/oauth2/authorize?client_id=l5ubhxte7n3nt9l00nk85ldlhuouav&redirect_uri=https://dz-dev.xyzcamp.com/api/third-party/twitch/redirect&response_type=code&scope=openid user:read:email&state={"locale":"/GLOBAL/en","redirect_uri":"https://dz-dev.xyzcamp.com/GLOBAL/en/coach/test001?gameId=7"}

