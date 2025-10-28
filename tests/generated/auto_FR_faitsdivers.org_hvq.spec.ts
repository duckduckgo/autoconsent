import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_faitsdivers.org_hvq', ['https://www.faitsdivers.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
