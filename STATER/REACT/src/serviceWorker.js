const pushServerPublicKey =
  'BIN2Jc5Vmkmy-S3AUrcMlpKxJpLeVRAfu9WBqUbJ70SJOCWGCGXKY-Xzyh7HDr6KbRDGYHjqZ06OcS3BjD7uAm8';

export async function askUserPermission() {
  return await Notification.requestPermission();
}

export async function createNotificationSubscription() {
  const serviceWorker = await navigator.serviceWorker.ready;

  return await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: pushServerPublicKey,
  });
}

export function getUserSubscription() {
  return navigator.serviceWorker.ready
    .then(function (serviceWorker) {
      return serviceWorker.pushManager.getSubscription();
    })
    .then(function (pushSubscription) {
      return pushSubscription;
    });
}

export function isPushNotificationSupported() {
  return 'serviceWorker' in navigator && 'PushManager' in window;
}
