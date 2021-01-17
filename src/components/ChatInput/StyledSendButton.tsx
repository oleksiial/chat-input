import React from "react";
import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { send } from "ionicons/icons";
import styled from "styled-components";

const StyledIonButton = styled(IonButton)`
  color: var(--ion-color-dark);
  background-color: var(--ion-color-primary);
  border-radius: 50%;
  width: 32px;
  margin 0;
  padding: 0;
`;

const StyledIonIcon = styled(IonIcon)`
  width: 16px;
  height: 16px;
`;

const StyledSendButton: React.FC<React.ComponentProps<typeof IonButton>> = (
  props
) => (
  <IonButtons>
    <StyledIonButton shape="round" {...props}>
      <StyledIonIcon icon={send} />
    </StyledIonButton>
  </IonButtons>
);

export default StyledSendButton;
