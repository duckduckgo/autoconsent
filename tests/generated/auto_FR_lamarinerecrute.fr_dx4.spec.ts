import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lamarinerecrute.fr_dx4', ['https://lamarinerecrute.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
