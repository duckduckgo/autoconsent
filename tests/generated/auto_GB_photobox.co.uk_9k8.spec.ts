import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_photobox.co.uk_9k8', ['https://www.photobox.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
