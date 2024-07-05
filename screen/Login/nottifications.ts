import { PushLocalNotifications,createChannel,localNotificationSchedule } from "../../utils/nofication";

createChannel('mes_mes.mp3',1,true,true);
createChannel('mes_mes.mp3',2,true,true);
createChannel('mes_mes.mp3',3,true,true);
PushLocalNotifications('SIGN IN','Succes','mes_mes.mp3',1,true,true);
PushLocalNotifications('Logout','Succes','mes_mes.mp3',2,true,true);
PushLocalNotifications('notifications','Succes','mes_mes.mp3',3,true,true);
localNotificationSchedule('hẹn giờ','mes_mes.mp3',1,true,true,"high",'day',Date.now()+60000,true);
localNotificationSchedule('hẹn giờ','hasaki.mp3',2,true,true,"high",'day',Date.now()+60000,true)
localNotificationSchedule('hẹn giờ','mes_mes.mp3',3,true,true,"high",'day',Date.now()+60000,true)