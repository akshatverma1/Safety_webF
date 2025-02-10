import React from 'react';

function WebViewComponent() {

  const mobileno = 'tel:+919131822366';
  return (
    <>
    <div>
      <a href={mobileno}>call now</a>
    </div>
    <div style={{ height: '500px', width: '100%' }}>
      <iframe
      allow="geolocation"
        src="http://localhost:1000"
        title="WebView Example"
        style={{ height: '100%', width: '100%', border: 'none' }}
      />
    </div>
    </>
  );
}

export default WebViewComponent;
