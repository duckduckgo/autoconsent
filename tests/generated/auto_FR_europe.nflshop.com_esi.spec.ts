import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_europe.nflshop.com_esi', ['https://europe.nflshop.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
