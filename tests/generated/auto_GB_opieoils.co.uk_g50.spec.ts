import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_opieoils.co.uk_g50', ['https://www.opieoils.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
