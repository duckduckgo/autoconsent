import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moviestarplanet2.com_q7s', ['https://moviestarplanet2.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
