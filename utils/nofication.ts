import PushNotification, { Importance }  from "react-native-push-notification";

const deleteChannelId=(id:number,nameChannel:string)=>PushNotification.deleteChannel(`channelId${id}`)

const  PushLocalNotifications=( 
    title: string | undefined,
    message: string,
    soundName:string | undefined,
    id: number,
    vibrate:boolean|undefined,
    playSound:boolean|undefined,
 )=>
    PushNotification.localNotification({
        title,
        message,
        soundName,
        id,
        vibrate,
        playSound,
        channelId:`channelId${id}`
    })
    const CancerAllLocalNotification=PushNotification.cancelAllLocalNotifications();
    
    const localNotificationSchedule=( 
        message: string,
        soundName:string | undefined,
        id: number,
        vibrate:boolean|undefined,
        playSound:boolean|undefined,
       importance:"default" | "max" | "high" | "low" | "min" | "none" | "unspecified" | undefined,
        repeatType:"week" | "day" | "hour" | "minute" | "time" | undefined,
        date:number ,
        allowWhileIdle?:boolean|undefined,
      
        )=>PushNotification.localNotificationSchedule({
        channelId:`channelId${id}`,
        message,
        soundName,
        id,
        vibrate,
        playSound,
       importance,
        repeatType,
        date,
        allowWhileIdle,       
    });
  
  

    const createChannel=( 
        soundName:string | undefined,
        id: number,
        vibrate:boolean|undefined,
        playSound:boolean|undefined,
       )=>PushNotification.createChannel({
           channelId: `channelId${id}`,
           soundName,
           vibrate,
           playSound,
           channelName: `channelId_name:Notificaions${id}`
       },(create)=>{
        console.log(`create channel : ${create}`)
    })

const InitNotifications=()=>
    PushNotification.popInitialNotification((nofications)=>{
        console.log('notificaitons:',nofications);
    })

export {PushLocalNotifications,localNotificationSchedule,InitNotifications,createChannel,CancerAllLocalNotification}