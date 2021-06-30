---
title: B4LL Application - Settings
sidebar_label: Settings
---
import useBaseUrl from '@docusaurus/useBaseUrl';

1.	The applications settings can be accessed via the **“Settings”** menu on the bottom navigation of the application.
2.	The settings menu provides certain options to increase the application’s security and offers options to exercise control over your biometric data.

### Manage confidence level

:::note
Note: Confidence level can be modified only for Voice and Face authentication options.
:::

1.	Click on **Manage confidence level** option on the Settings menu.
2.	You will be displayed with your **enrolled biometric options**. By default voice authentication will have the confidence level set at **87%** and face authentication will have the confidence level set at **75%**. This can be increased upto 100% to increase the authentication security.  
3.	Click on **Edit** to change the defined **Confidence Level**.

<div style={{textAlign: 'center'}}>
<img alt="Confidence Screen1" src={useBaseUrl('img/app-manual/conflevel1.png')} />
<img alt="Confidence Screen2" src={useBaseUrl('img/app-manual/conflevel2.png')} />
<img alt="Confidence Screen3" src={useBaseUrl('img/app-manual/conflevel3.png')} />
</div>

4.	If you don't have either voice or face recognition enrolled, on clicking the **Manage confidence level** option, you will be displayed with a toast message **“Confidence level cannot be managed for fingerprint authentication”**.

<div style={{textAlign: 'center'}}>
<img alt="Confidence Screen4" src={useBaseUrl('img/app-manual/conflevel4.png')} />
</div>

### Manage my authentications

You can enroll for multiple biometric options as well as disable/delete any enrolled biometric option. In addition, you can also enroll multiple passphrases for voice recognition so that you would be displayed with any random enrolled passphrase for voice authentication. These features increase the security of the application.

#### Enroll to a biometric option

1.	Click on **Manage my authentication** menu within Settings menu
2.	The **enrolled biometric** options will have a **wedge icon** next to them whereas **un-enrolled biometric** options will have an **italicized text displayed** underneath them **“You are not enrolled !!”** with an option to **“Enroll”**.
3.	On clicking **“Enroll”**, you will be shown a **pop-up message** indicating that the option is currently **un-enrolled**. Click on the **“Enroll now”** button on the pop-up to continue the enrollment process.
4.	You will now be navigated to the enrollment process similar to that of the registration process.
5.	On successful enrollment of the selected biometric option, the enrollment will be reflected in your account and you will now be able to use that biometric option **for any authentication**.

<div style={{textAlign: 'center'}}>
<img alt="Manage Bio Screen1" src={useBaseUrl('img/app-manual/managebio1.png')} />
<img alt="Manage Bio Screen2" src={useBaseUrl('img/app-manual/managebio2.png')} />
</div>

#### Manage Passphrases

:::note
Note: This feature can be used only if voice recognition is enabled
:::

##### Enroll additional passphrase

1.	You can increase the **security** of your voice authentication by opting to **enroll for multiple passphrases**.
2.	Click on **Manage my authentication** menu within the Settings menu.
3.	Click on the **wedge icon next to the Voice authentication option**.
4.	Select the **Manage passphrases** option.

<div style={{textAlign: 'center'}}>
<img alt="Passphrase Screen1" src={useBaseUrl('img/app-manual/passphrase1.png')} />
</div>

5.	You will now be displayed with the list of **enrolled passphrases**.
6.	Click on the **Add passphrase** option available on the screen.

<div style={{textAlign: 'center'}}>
<img alt="Passphrase Screen2" src={useBaseUrl('img/app-manual/passphrase2.png')} />
</div>

7.	A list of **available passphrases** that you have **not yet enrolled** with will be shown.
8.	**Choose** any one passphrase to enroll.
9.	Click the **Continue** button to continue the enrollment process.

<div style={{textAlign: 'center'}}>
<img alt="Passphrase Screen3" src={useBaseUrl('img/app-manual/passphrase3.png')} />
</div>

10.	You will now be navigated to the voice recording screen similar to that of the voice registration process. The process of enrollment is **the same** to that of the voice registration process.
11.	Once the additional passphrase is successfully enrolled, your account will be updated with the additional passphrase.
12.	During voice authentication, the application would display any **random** enrolled passphrase.

<div style={{textAlign: 'center'}}>
<img alt="Passphrase Screen4" src={useBaseUrl('img/app-manual/passphrase4.png')} />
</div>

### Disable Biometric Recognition

:::note
Note: If you have only one biometric option enrolled, you will  not be able to disable that biometric option
:::

1.	You can **disable any biometric option** temporarily provided you have **another active biometric option** enabled. 
2.	Click on **“Manage my authentication”** menu within the **Settings** menu
3.	The enrolled biometric options have a **wedge** icon which provides the options to control the settings of the biometric.
4.	Click on the **“Disable”** option in the dropdown to disable the biometric option.
5.	On clicking the *“Disable”* option, you will be shown a pop-up message indicating the data retention. Click on the **“Confirm”** button on the pop-up to continue the disable process.
6.	On confirmation, the biometric option would be **disabled**.

<div style={{textAlign: 'center'}}>
<img alt="Disable Bio Screen1" src={useBaseUrl('img/app-manual/disablebio1.png')} />
<img alt="Disable Bio Screen2" src={useBaseUrl('img/app-manual/disablebio2.png')} />
</div>

### Enable biometric recognition

1.	You can **enable** any biometric option that you may have disabled. 
2.	Click on **“Manage my authentication”** within **Settings** menu
3.	Click on the **wedge** icon next to the enrolled biometric option. 
4.	Click on the **“Enable”** option in the dropdown to enable the biometric option.
5.	You will be shown a pop-up message confirming the reactivation of the biometric option. Click on the **“Confirm”** button to continue the reactivation process.
6.	On confirmation, the biometric option would be reactivated and would be available for authentication.

<div style={{textAlign: 'center'}}>
<img alt="Enable Bio Screen1" src={useBaseUrl('img/app-manual/enablebio1.png')} />
<img alt="Enable Bio Screen2" src={useBaseUrl('img/app-manual/enablebio2.png')} />
</div>

### Delete biometric recognition

:::note
Note: If you have only one biometric option enrolled, you will  not be able to delete that biometric option
:::

1.	You can **delete** any biometric option provided you have **another active biometric option** enabled. 
2.	Click on **“Manage my authentication”** menu within **Settings** menu
3.	The enrolled biometric options have a **wedge** icon which provides the options to control the settings of the biometric.
4.	Click on the **“Delete”** option in the dropdown to delete the biometric option.
5.	On clicking the **“Delete”** option, you will be shown a pop-up message indicating that the data would be r**emoved from the system**. Click on the **“Confirm”** button on the pop-up to continue the delete process.
6.	On confirmation, the biometric option would be deleted.

<div style={{textAlign: 'center'}}>
<img alt="Delete Bio Screen1" src={useBaseUrl('img/app-manual/deletebio1.png')} />
<img alt="Delete Bio Screen2" src={useBaseUrl('img/app-manual/deletebio2.png')} />
</div>

### Deactivate account

1.	You can temporarily **deactivate** your account.
2.	Click on **“Account”** settings within the **Settings** menu. 
3.	Click on the **“Deactivate”** option in the dropdown.
4.	You will be shown a pop-up message indicating that the data would be **retained in the system**. Click on the **“Confirm”** button on the pop-up to continue the account deactivation process. 
5.	On successful account deactivation, you will be navigated back to the registration screen

<div style={{textAlign: 'center'}}>
<img alt="Deactivate Screen1" src={useBaseUrl('img/app-manual/deactivate1.png')} />
<img alt="Deactivate Screen2" src={useBaseUrl('img/app-manual/deactivate2.png')} />
</div>

### Reactivate account

1.	You can **reactivate** your account if it is temporarily deactivated.
2.	Enter your **registered mobile number**.
3.	The application will validate your mobile number.
4.	You would be displayed a pop-up message stating that your account is “**Inactive”** and would you like to activate the same.
5.	Click on **Confirm** button on the pop-up to continue the reactivation process
6.	You would be shown your active enrolled biometric options to **validate your account**.
7.	Once authenticated, your account would be activated and you would be navigated to the home screen.

<div style={{textAlign: 'center'}}>
<img alt="Reactivate Screen1" src={useBaseUrl('img/app-manual/reactivate1.png')} />
</div>

### Delete account

1.	You can **delete** your account if you no longer need to use the application and all your biometric options would also be removed.
2.	Click on **“Account”** menu within **Settings** menu
3.	Click on the **“Delete”** option in the dropdown to delete your account.
4.	On clicking the **“Delete”** option, you will be shown a pop-up message indicating that the data would be removed from the system. Click on the **“Confirm”** button on the pop-up to continue the account delete process. 

<div style={{textAlign: 'center'}}>
<img alt="Delete Screen1" src={useBaseUrl('img/app-manual/delete1.png')} />
<img alt="Delete Screen2" src={useBaseUrl('img/app-manual/delete2.png')} />
</div>

5.	On successful account deletion, you will be navigated back to the registration screen.