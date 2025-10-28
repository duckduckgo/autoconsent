import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_business.parcel.royalmail.com_wdi',
    [
        'https://auth.parcel.royalmail.com/account/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dsflite%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520offline_access%26redirect_uri%3Dhttps%253A%252F%252Fbusiness.parcel.royalmail.com%252Fcallback%26state%3DZTZhMmY5MjE0OGJlNDVkMmJkZjBlNDdlMzM5MDMwZTk5NmFkNDI4ZjRkMTY0MjMyYWViYjBkMWE3M2EzNzQwZjsv%26nonce%3D251ec2bceac94a5d9143c1b3aaceb5165aba684e7c6045e2885f4747482b1223',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
