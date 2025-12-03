import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lamarinerecrute.fr_v1a', ['https://lamarinerecrute.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
