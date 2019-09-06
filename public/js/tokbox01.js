// replace these values with those generated in your TokBox Account
var apiKey = "46362522";
var sessionId = "2_MX40NjM2MjUyMn5-MTU2Njk4MzQ0NDAzNH5EZXAvY0JEYm1YOC9oUno4ZFNBbG9WOXZ-fg";
var token = "T1==cGFydG5lcl9pZD00NjM2MjUyMiZzaWc9YjM5MDNiNDAzM2E0OTQ5ODFiZThhNGQ4OTdkZDI5MmQzZDMzZjEwNzpzZXNzaW9uX2lkPTJfTVg0ME5qTTJNalV5TW41LU1UVTJOams0TXpRME5EQXpOSDVFWlhBdlkwSkVZbTFZT0M5b1VubzRaRk5CYkc5V09YWi1mZyZjcmVhdGVfdGltZT0xNTY2OTgzNDU5Jm5vbmNlPTAuMjEzMDMyMDQwNDg4OTM4MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTY3MDY5ODU4JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function (event) {
    session.subscribe(event.stream, 'subscriber', {    //subscriber is a tag
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {        //publisher is a tag
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function (error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}


