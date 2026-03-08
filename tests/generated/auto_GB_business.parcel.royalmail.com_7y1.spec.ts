import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_business.parcel.royalmail.com_7y1',
    [
        'https://auth.parcel.royalmail.com/account/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dsflite%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520offline_access%26redirect_uri%3Dhttps%253A%252F%252Fbusiness.parcel.royalmail.com%252Fcallback%26state%3DZjcwMGI0Zjk5ZjQzNDQxM2JlM2MyZThmMTI5NTFjZjg2NzQyYzBhNzA0NTc0M2Q5YTU1N2Y1NDZkNmNiMmQxYjsv%26nonce%3Db60ebb7b5437438aa032b59c6b81ad25cba7c561b2d04dfc9bba47a954f55cd9',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
