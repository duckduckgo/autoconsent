import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_es.xhamster.com_f69', ['https://es.xhamster.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
