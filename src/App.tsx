import { IonApp, IonButton, IonLabel } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { Capacitor } from "@capacitor/core";
import { Browser } from "@capacitor/browser";
/* Theme variables */

const App: React.FC = () => (
  <IonApp>
    <IonLabel> Open URL issue</IonLabel>

    <IonButton
      onClick={async () => {
        if (Capacitor.isNativePlatform()) {
          await Browser.open({
            url: "https://capacitorjs.com/docs/v3/apis/browser",
            presentationStyle: "popover",
          });
        }
      }}
    >
      OPEN URL1
    </IonButton>
    <IonButton
      onClick={async () => {
        if (Capacitor.isNative) {
          await Browser.open({
            url: "https://ionicframework.com/docs/cli/commands/build",
            presentationStyle: "popover",
          });
        }
      }}
    >
      OPEN URL2
    </IonButton>
  </IonApp>
);

export default App;
