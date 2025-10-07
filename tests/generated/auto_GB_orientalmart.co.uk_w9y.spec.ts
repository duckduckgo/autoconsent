import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_orientalmart.co.uk_w9y', ['https://www.orientalmart.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
