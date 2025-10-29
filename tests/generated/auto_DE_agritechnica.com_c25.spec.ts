import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_agritechnica.com_c25', ['https://www.agritechnica.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
