var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  image: 'https://c1.staticflickr.com/8/7333/27582563315_b8ce82119a_b.jpg',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);

var roomDrawing = vRViewPlayer('#second-vr-example', {
  image: 'https://q3fb03rfy3f4ahuzu2uy6e11-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/photosphere-android.jpg',
  is_stereo: false,
});

window.addEventListener('load', roomDrawing);

var boxRoomTemplate = vRViewPlayer('#third-vr-example', {
  image: '',
  is_stereo: false,
});

window.addEventListener('load', boxRoomTemplate);
