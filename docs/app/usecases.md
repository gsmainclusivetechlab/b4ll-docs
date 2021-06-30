---
title: B4LL Application - Use Cases
sidebar_label: Use Cases
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Simulating payment transactions

:::note
Note: On registration, users will be automatically credited with $100. Any transactions will reduce the balance. When the balance reaches $0, the system will be auto-reloaded to $100.
:::

### Account balance

1.	You can check your account’s balance by using the **Account Balance** option on the home page.
2.	Once selected, you will be requested to **authenticate your identity** using any enrolled biometric option.
3.	Once successfully authenticated, your **account balance** will be displayed on the screen

<div style={{textAlign: 'center'}}>
<img alt="Balance Screen1" src={useBaseUrl('img/app-manual/balance1.png')} />
</div>

### Make a transfer

1.	You can make a transfer to a predefined account number (i.e 112233) from your account. 
2.	Click the **Make a transfer** option on the home page.
3.	Enter the **account number** and the **amount** you wish to transfer. Click on **Continue** to proceed.
4.	If the account number is **valid** (i.e. 112233) you will be requested to **authenticate your identity** using any enrolled biometric option.

<div style={{textAlign: 'center'}}>
<img alt="Transfer Screen1" src={useBaseUrl('img/app-manual/transfer1.png')} />
</div>

5.	On successful authentication, if the amount to be transferred is available in your account, the transaction would be successful and a success message will be displayed on the screen. 

<div style={{textAlign: 'center'}}>
<img alt="Transfer Screen2" src={useBaseUrl('img/app-manual/transfer2.png')} />
<img alt="Transfer Screen3" src={useBaseUrl('img/app-manual/transfer3.png')} />
</div>

6.  If the amount transferred is more than the amount in your account, the transaction would fail and an error toast message would be displayed “Sorry, you do not have the required funds in your account to make this transaction”.

<div style={{textAlign: 'center'}}>
<img alt="Transfer Screen2" src={useBaseUrl('img/app-manual/transfer4.png')} />
</div>

### Pay bill

1.	You can make a payment against a predefined bill number (i.e 12345 or 54321) from your account.
2.	Click the **Pay bill** option on the home page.
3.	Enter the **bill number** and click **Continue** to proceed.
4.	If the **bill number** is valid you will be requested to **authenticate your identity** using any enrolled biometric option.
5.	On successful authentication, if the amount to be paid against the bill is **available in your account**, the transaction will be successful.
6.	If the amount to be paid against the bill is **more than the amount available in your account**, the transaction would fail and an **error message** would be displayed;“Sorry, you do not have the required funds in your account to make this transaction”.

<div style={{textAlign: 'center'}}>
<img alt="Bill Screen1" src={useBaseUrl('img/app-manual/bill1.png')} />
<img alt="Bill Screen2" src={useBaseUrl('img/app-manual/bill2.png')} />
</div>




