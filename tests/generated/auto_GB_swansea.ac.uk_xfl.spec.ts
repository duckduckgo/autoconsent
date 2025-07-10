import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_swansea.ac.uk_xfl', ['https://www.swansea.ac.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
