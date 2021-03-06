import PushNotification from "react-native-push-notification";
import PushNotificaitonIOS from "@react-native-community/push-notification-ios";
import { Platform } from "react-native";

class NotificationManager {
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log("[NotificationManager] onRegister token:", token);
      }
      onNotification: function (notification) {
        console.log("[NotificationManager] onNotification:", notification);

        // process the notification

        // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    })
  }

  _buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || "ic_launcher",
      smallIcon: options.smallIcon || "ic_launcher",
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || "high",
      importance: options.importance || "high",
      data: data
    }
  }

  _buildIOSNotification = (id, title, message, data = {}, options = {}) => {
    return {
      alertAction: options.alertAction || "view",
      category: options.category || "",
      userInfo: {
        id: id,
        item: data
      }
    }
  }

  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      ...this._buildAndroidNotification(id, title, message, data, options),
      ...this._buildIOSNotification(id, title, message, data, options),
      title: title,
      message: message,
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false
    })
  }

  cancelAllNotifications = () => {
    if (Platform.OS === "ios") {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  }

  unregister = () => {
    PushNotification.unregister()
  }
}

export const notificationManager = new NotificationManager();