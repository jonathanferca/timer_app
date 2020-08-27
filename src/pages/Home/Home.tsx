import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import './Home.css';
import { RouteComponentProps } from 'react-router';

const Home: React.FC<RouteComponentProps> = (props) => {
  let name = 'Jonathan';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <p>Hi {name}</p>
        <IonButton onClick={() => props.history.push('/timer-for-time') }>For Time</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
