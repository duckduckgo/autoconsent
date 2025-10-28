import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_drucker-loesung.de_72i', ['https://drucker-loesung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
