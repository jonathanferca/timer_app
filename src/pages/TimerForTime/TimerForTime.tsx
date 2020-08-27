import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import React from 'react';
import './TimerForTime.css';

const TimerForTime: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>

                    <IonTitle>For Time</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>

            </IonContent>
        </IonPage>
    );
}

export default TimerForTime;