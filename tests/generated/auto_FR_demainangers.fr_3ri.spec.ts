import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_demainangers.fr_3ri', ['https://demainangers.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
