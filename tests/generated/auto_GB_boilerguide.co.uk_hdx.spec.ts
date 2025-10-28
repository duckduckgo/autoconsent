import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boilerguide.co.uk_hdx', ['https://www.boilerguide.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
