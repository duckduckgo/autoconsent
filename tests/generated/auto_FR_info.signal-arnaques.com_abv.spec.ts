import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_info.signal-arnaques.com_abv', ['https://info.signal-arnaques.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
