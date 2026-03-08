import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_annajones.co.uk_6z0', ['https://annajones.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
