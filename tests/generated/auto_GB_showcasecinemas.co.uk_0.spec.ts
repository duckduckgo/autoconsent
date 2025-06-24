import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_showcasecinemas.co.uk_0', ['https://www.showcasecinemas.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
