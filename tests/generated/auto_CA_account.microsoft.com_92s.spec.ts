import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_account.microsoft.com_92s',
    ['https://account.microsoft.com/account?ru=https%3A%2F%2Faccount.microsoft.com%2F&destrt=home.landing&pageName=Account'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] },
);
