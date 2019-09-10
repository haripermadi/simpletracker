import {useState, useEffect} from 'react'
import {Accuracy, watchPositionAsync, requestPermissionsAsync} from 'expo-location'

export default (shouldTrack ,callback) => {
  const [err, setErr] = useState(null)
  // const [subscriber, setSubscriber] = useState(null)

  
  useEffect(() => { 
    let subscriber
    const startWatching = async () => {
      try {
        await requestPermissionsAsync()
        subscriber = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        }, 
        // location=>{
        //   addLocation(location)
        // }
        callback
         )
        //  setSubscriber(sub)
      }catch(e) {
        setErr(e)
      }
    }
    if(shouldTrack){
      startWatching()
      console.log('subscriber-----', subscriber)
    }else{
      //stop
      if(subscriber){
        subscriber.remove()
      }
      // setSubscriber(null)
      subscriber=null
    }
    
    return () => {
      if(subscriber){
        subscriber.remove()
      }
    }
  },[shouldTrack, callback])

  return [err]
}