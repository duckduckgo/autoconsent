import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_community.virginmedia.com_0', ['https://community.virginmedia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
