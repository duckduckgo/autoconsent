import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visiondirect.co.uk_xwu', ['https://www.visiondirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
