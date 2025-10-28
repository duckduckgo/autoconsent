import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CH_ebanking-ch4.ubs.com_9it',
    ['https://secure.ubs.com/global/en/digital-banking/operational-messages/browser-outdated.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] },
);
