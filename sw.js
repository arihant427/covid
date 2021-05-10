// client/sw.js
    
self.addEventListener('push', event => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.response,
      icon:"assets/img/logo6.png",
      vibrate: [2000, 500, 1000],
    });
  });

  //notification url redirect event click
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({
            type: "window"
        })
        .then(function (clientList) {
            if (clients.openWindow) {
                return clients.openWindow("https://selfregistration.cowin.gov.in/");
            }
        })
    );
});