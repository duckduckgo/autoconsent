import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_la-plagne.com_64g', ['https://www.la-plagne.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
