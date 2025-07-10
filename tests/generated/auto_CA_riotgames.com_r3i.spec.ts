import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_riotgames.com_r3i', ['https://www.riotgames.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
