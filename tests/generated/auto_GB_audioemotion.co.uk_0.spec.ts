import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_audioemotion.co.uk_0', ['https://www.audioemotion.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
