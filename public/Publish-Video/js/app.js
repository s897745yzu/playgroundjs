/* global OT */

(function closure() {
  const video = document.querySelector('#video');
  if (!video.captureStream) {
    alert('This browser does not support VideoElement.captureStream(). You must use Google Chrome.');
    return;
  }

  // An addtrack  is fired when the browser adds a track to a MediaStream 
  // (such as when a RTCPeerConnection is renegotiated or a stream being captured using HTMLMediaElement.captureStream() 
  // gets a new set of tracks because the media element being captured loaded a new source.
  // captureStream是一個非同步的想法, 要用stream.addEventListener('addtrack', publish)去接MediaStreamTrackEvent

  const stream = video.captureStream();
  let publisher;
  const publish = (evt) => {
    if(evt == undefined)
    {
      console.log('evt == undefined');
        return;
    }

    const videoTracks = stream.getVideoTracks();
    const audioTracks = stream.getAudioTracks();
    console.log(publisher);
    console.log(videoTracks.length);
    console.log(audioTracks.length);
    if (!publisher && videoTracks.length > 0 && audioTracks.length > 0) {
      stream.removeEventListener('addtrack', publish);
      publisher = OT.initPublisher('publisher', {
        videoSource: videoTracks[0],
        audioSource: audioTracks[0],
        fitMode: 'contain',
        width: 320,
        height: 240
      }, (err) => {
        if (err) {
          video.pause();
          alert(err.message);
        } else {
          console.log('video.play()');
          var promise = video.play();
        }
      });
      publisher.on('destroyed', () => {
        video.pause();
      });
    }
  };
  stream.addEventListener('addtrack', publish);   //evt -> MediaStreamTrackEvent
  publish();
})();
