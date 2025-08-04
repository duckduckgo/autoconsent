import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thegreatestgathering.co.uk_8ny', ['https://www.thegreatestgathering.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
