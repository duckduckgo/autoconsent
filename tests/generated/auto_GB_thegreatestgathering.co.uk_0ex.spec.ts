import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thegreatestgathering.co.uk_0ex', ['https://www.thegreatestgathering.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
