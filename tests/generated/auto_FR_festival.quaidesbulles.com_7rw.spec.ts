import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_festival.quaidesbulles.com_7rw', ['https://festival.quaidesbulles.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
