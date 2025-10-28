import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_agritechnica.com_tcp', ['https://www.agritechnica.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
