import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hu-berlin.de_ack', ['https://www.hu-berlin.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
