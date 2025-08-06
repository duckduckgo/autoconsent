import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_campingdirect.com_1al', ['https://www.campingdirect.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
