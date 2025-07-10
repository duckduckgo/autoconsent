import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_superbikefactory.co.uk_ikf', ['https://superbikefactory.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
