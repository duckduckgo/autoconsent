import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_givenergy.co.uk_l22', ['https://givenergy.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
