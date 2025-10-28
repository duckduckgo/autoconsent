import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_marquisleisure.co.uk_xd3', ['https://www.marquisleisure.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
