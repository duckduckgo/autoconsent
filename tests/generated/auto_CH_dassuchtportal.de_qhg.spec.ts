import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dassuchtportal.de_qhg', ['https://dassuchtportal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
