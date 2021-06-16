---
title: B4LL Application - Setup & Registration
sidebar_label: Setup & Registration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Download & launch

1. Download the B4LL app on your mobile device, from either the iOS app store or the Google play store
2. On launch the application will briefly display the splash screen
3. You will be shown the features of the app in a slider format
4. You can carouse through the features by clicking “Next” or click on “Skip” to register to the application.

<div style={{textAlign: 'center'}}>
<img alt="Splash Screen" src={useBaseUrl('img/app-manual/1.png')} />
<img alt="Splash Screen2" src={useBaseUrl('img/app-manual/2.png')} />
</div>

### Registration

:::note Important 
To ensure your data privacy, do not exit the application during the registration process.
If you exit the application during the registration process, you will receive a toast message “Enrollment is cancelled by user”
:::

1.	You will be displayed with the registration screen where you will need to enter your phone number
    * You can select your country code from the dropdown. You can also key in your country name to fetch the country code.
    * The mobile number entered needs to be 8 to 10 characters long. If the entered number is less than 8 characters or more than 10 characters, the application will provide a validation error in the form of a toast message “Please enter a valid 8 to 10 digit mobile number”
    * You will need to click on the continue button to proceed
    * You will be shown an option to enter your Nickname
    * You will need to accept the application’s terms and conditions

<div style={{textAlign: 'center'}}>
<img alt="Registration Screen1" src={useBaseUrl('img/app-manual/3.png')} />
<img alt="Registration Screen2" src={useBaseUrl('img/app-manual/4.png')} />
<img alt="Registration Screen3" src={useBaseUrl('img/app-manual/5.png')} />
</div>

2.	Click “Continue” to proceed with the registration process.
3.	You will be displayed with the available biometric options to register. Choose any one biometric option to register.

<div style={{textAlign: 'center'}}>
<img alt="Registration Screen4" src={useBaseUrl('img/app-manual/6.png')} />
<img alt="Registration Screen5" src={useBaseUrl('img/app-manual/7.png')} />
</div>

<Tabs
  className="unique-tabs"
  defaultValue="voice"
  values={[
    {label: 'Voice', value: 'voice'},
    {label: 'Fingerprint', value: 'fingerprint'},
    {label: 'Face', value: 'face'},
  ]}>
  <TabItem value="voice">
    <p><i>Note: It is preferable not to use earphones while registering for voice recognition</i></p>
    <p>1. Select <b>Voice recognition</b> and click <b>Continue</b> to proceed.</p>  
    <p>2. You will be displayed with a <b>list of passphrases</b> to choose from. </p>
    <p>3. You can select any <b>one</b> passphrase and click <b>Continue</b> to enroll yourself (you will have to allow the application to access the device’s microphone). </p>
    <div style={{textAlign: 'center'}}>
        <img alt="Voice Screen1" src={useBaseUrl('img/app-manual/voice1.png')} />
        <img alt="Voice Screen2" src={useBaseUrl('img/app-manual/voice2.png')} />
        <img alt="Voice Screen3" src={useBaseUrl('img/app-manual/voice3.png')} />
    </div>
    <p>5. After the permission is granted, you will be met with a <b>voice recording screen</b> which automatically records your voice. You will have <b>5 seconds</b> to recite the passphrase.</p>
    <p>6. <b>Recite the selected passphrase</b> which will be displayed on the screen. Each passphrase will be validated and a <b>success/failure message</b> will be displayed.</p>
    <p>7. <b>Repeat the process three times</b> for enrollment to voice authentication biometric option. If any enrollment is unsuccessful, the application will prompt to repeat again.</p>
    <p>8. The application will display the statement “All enrollments successful” when <b>all three enrollments are successfully completed.</b></p>
    <div style={{textAlign: 'center'}}>
        <img alt="Voice Screen4" src={useBaseUrl('img/app-manual/voice4.png')} />
        <img alt="Voice Screen5" src={useBaseUrl('img/app-manual/voice5.png')} />
    </div>
  </TabItem>
  <TabItem value="fingerprint">
    <p>1. Select <b>Fingerprint recognition</b> and click <b>Continue</b> to proceed.</p>
    <p>2. <b>Allow</b> the application to access the device's camera </p>
    <div style={{textAlign: 'center'}}>
        <img alt="Finger Screen1" src={useBaseUrl('img/app-manual/finger1.png')} />
        <img alt="Finger Screen2" src={useBaseUrl('img/app-manual/finger2.png')} />
    </div>
    <p>3. <b>Position your fingers</b> in the provided slot in the device’s screen. You will have to follow the instructions on the screen and adjust the position of your fingers. The messages for the positioning of the fingers to capture the optimal image might be to:
        i.	Move your fingers closer
        ii.	Move your fingers back
        iii. Hold your fingers steady.
    </p>
    <div style={{textAlign: 'center'}}>
        <img alt="Finger Screen3" src={useBaseUrl('img/app-manual/face3.png')} />
        <img alt="Finger Screen4" src={useBaseUrl('img/app-manual/face4.png')} />
        <img alt="Finger Screen5" src={useBaseUrl('img/app-manual/face5.png')} />
    </div>
    <p>4. <b>The application will detect</b> the optimal positioning and automtically capture the fingerprint image.</p>
    <p>5. The application will validate the captured fingerprint to complete the enrollment process. If the validation is unsuccessful, you will be displayed the following message on the registration screen <b>“Insufficient image quality”</b></p>
    <p>6. After the enrollment process is successfully completed, you will be redirected to the application’s home page.</p>
    <div style={{textAlign: 'center'}}>
        <img alt="Finger Screen6" src={useBaseUrl('img/app-manual/face3.png')} />
    </div>
    </TabItem>
    <TabItem value="face">
    <p>1. Select <b>Face recognition</b> and click <b>Continue</b> to proceed.</p>  
    <p>2. <b>Allow</b> the application to access the device's camera </p>
    <div style={{textAlign: 'center'}}>
        <img alt="Face Screen1" src={useBaseUrl('img/app-manual/face1.png')} />
        <img alt="Face Screen2" src={useBaseUrl('img/app-manual/face2.png')} />
    </div>
    <p>3. You will have to position your face in the provided slot on the device’s  screen and <b>retain the position</b> until you receive a message on the screen. Your face will be automatically captured by the application.</p>
    <p>4. The application will validate the captured face and complete the enrollment process.
        <li>a.	If the captured face is not clear, the application will provide the error message and prompt to capture the face again. The process will continue for three consecutive times, post which the application will navigate you back to the registration screen.</li>
    </p>
    <div style={{textAlign: 'center'}}>
        <img alt="Face Screen3" src={useBaseUrl('img/app-manual/face3.png')} />
        <img alt="Face Screen4" src={useBaseUrl('img/app-manual/face4.png')} />
        <img alt="Face Screen5" src={useBaseUrl('img/app-manual/face5.png')} />
    </div>
    <p>5. Click the <b>Continue</b> button to complete the registration and be redirected to the application’s home page.</p>
    <div style={{textAlign: 'center'}}>
        <img alt="Face Screen6" src={useBaseUrl('img/app-manual/face6.png')} />
    </div>    
  </TabItem>
</Tabs>

:::note
Note: If you deny any hardware permission twice, the application will not request the same and you will have to go to the application settings and provide the required permissions.
:::
 

