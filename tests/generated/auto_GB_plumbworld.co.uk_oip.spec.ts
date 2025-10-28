import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_plumbworld.co.uk_oip', ['https://www.plumbworld.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
