import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_coteetciel.com_djv', ['https://eu.coteetciel.com/en-eu'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
