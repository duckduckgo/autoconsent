import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_familyhandyman.com_8yq', ['https://www.familyhandyman.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
