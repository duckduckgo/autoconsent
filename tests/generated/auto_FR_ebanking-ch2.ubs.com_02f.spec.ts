import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_ebanking-ch2.ubs.com_02f',
    ['https://secure.ubs.com/global/en/digital-banking/operational-messages/browser-outdated.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
