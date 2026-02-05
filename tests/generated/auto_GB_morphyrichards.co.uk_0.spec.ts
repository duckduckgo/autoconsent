import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_morphyrichards.co.uk_0', ['https://www.morphyrichards.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
