import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_viamichelin.co.uk_0', ['https://www.viamichelin.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
