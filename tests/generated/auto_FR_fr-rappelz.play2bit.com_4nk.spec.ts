import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr-rappelz.play2bit.com_4nk', ['https://fr-rappelz.play2bit.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
