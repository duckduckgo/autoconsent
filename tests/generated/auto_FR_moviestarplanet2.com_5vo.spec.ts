import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moviestarplanet2.com_5vo', ['https://moviestarplanet2.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
