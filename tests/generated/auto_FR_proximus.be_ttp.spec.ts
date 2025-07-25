import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_proximus.be_ttp', ['https://www.proximus.be/en/personal/?'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
