import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function Room() {
  // Retrieve the roomId from the URL
  const { roomID } = useParams();
 
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 239124842;
    const serverSecret = "e4b3a0347bcaabd29a412c45d873162f";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,Date.now().toString(),"ok");
   
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Personal link',
               url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                 '?roomID=' +
                 roomID,
             },
           ],
           scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
           },
      });
     };

  return (
    <div
    className="myCallContainer"
    ref={myMeeting}
    style={{ width: '100vw', height: '100vh' }}
   ></div>
  );
}

export default Room;
