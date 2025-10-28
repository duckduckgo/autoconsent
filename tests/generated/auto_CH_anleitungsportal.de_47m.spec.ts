import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_anleitungsportal.de_47m', ['https://www.anleitungsportal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
