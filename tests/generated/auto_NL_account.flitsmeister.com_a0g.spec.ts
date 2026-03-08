import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NL_account.flitsmeister.com_a0g',
    ['https://account.flitsmeister.com/en/login?consentId=08daab72-7846-44ff-8c8b-b738479a7624'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] },
);
