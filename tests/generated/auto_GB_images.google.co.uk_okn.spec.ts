import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_images.google.co.uk_okn', ['https://images.google.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
