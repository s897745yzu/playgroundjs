

dropzone-local
client_id: 1ylg6axwjf36osm2q11nonpap4v6xt
client_secret: w7y40hkwnnccnoxi2ss5zd3ezkjqo6
--------------------------------------------------------------------

GET
https://id.twitch.tv/oauth2/authorize?client_id=1ylg6axwjf36osm2q11nonpap4v6xt&redirect_uri=http://localhost:9000/api/third-party/twitch/redirect&response_type=code&scope=openid user:read:email&&state={"locale":"/GLOBAL/en","web_state":"pathname:/GLOBAL/en/coach/test001,search:?gameId=7,hash:","api_redirect_uri":"http://localhost:3000"}

GET https://id.twitch.tv/oauth2/authorize?
client_id=1ylg6axwjf36osm2q11nonpap4v6xt
&redirect_uri=http://localhost:9000/api/third-party/twitch/redirect
&response_type=code
&scope=openid user:read:email
&state={  
   "locale":"/GLOBAL/en",
   "web_state":"pathname:/GLOBAL/en/coach/test001,search:?gameId=7,hash:",
   "api_redirect_uri":"http://localhost:3000"
}

rediredt to webfront:
http://localhost:3000/GLOBAL/en/auth/twitch
#access_token=
&id_token=
&locale=
&state=

---------------------------------------------------------------
dropzone-dev


https://id.twitch.tv/oauth2/authorize?client_id=l5ubhxte7n3nt9l00nk85ldlhuouav&redirect_uri=https://dz-dev.xyzcamp.com/api/third-party/twitch/redirect&response_type=code&scope=openid user:read:email&state={"locale":"/GLOBAL/en","web_state":"pathname:/GLOBAL/en/coach/test001,search:?gameId=7,hash:","api_redirect_uri":"http://localhost:3000"}

GET 
https://id.twitch.tv/oauth2/authorize?
client_id=l5ubhxte7n3nt9l00nk85ldlhuouav
&redirect_uri=https://dz-dev.xyzcamp.com/api/third-party/twitch/redirect
&response_type=code
&scope=openid user:read:email
&state={  
   "locale":"/GLOBAL/en",
   "web_state":"pathname:/GLOBAL/en/coach/test001,search:?gameId=7,hash:",
   "api_redirect_uri":"http://localhost:3000"
}

rediredt to webfront:
http://localhost:3000/GLOBAL/en/auth/twitch
#access_token=
&id_token=
&locale=
&state=

