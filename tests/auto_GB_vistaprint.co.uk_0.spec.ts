import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_vistaprint.co.uk_0', ['https://www.vistaprint.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
