import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CH_ebanking-ch2.ubs.com_309',
    ['https://secure.ubs.com/global/en/digital-banking/operational-messages/browser-outdated.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] },
);
