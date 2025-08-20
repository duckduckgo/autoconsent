import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_campingdirect.com_q1r', ['https://www.campingdirect.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
