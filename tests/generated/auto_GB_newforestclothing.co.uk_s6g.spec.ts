import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_newforestclothing.co.uk_s6g', ['https://www.newforestclothing.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
