import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_outdooraction.co.uk_0', ['https://www.outdooraction.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
