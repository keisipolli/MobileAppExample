import React, { useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Signin from "./src/screens/auth/SignIn";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";

/*const WEB_CLIENT_ID = '' 
const IOS_CLIENT_ID = ''*/

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
      /*webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: IOS_CLIENT_ID,*/
    })
  }, [])
  return (
    <ScrollView>
  <SafeAreaView>
    <Signin />
  </SafeAreaView>
    </ScrollView>

  );
};

export default React.memo(App)