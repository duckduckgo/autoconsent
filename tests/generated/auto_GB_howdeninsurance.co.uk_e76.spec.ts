import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_howdeninsurance.co.uk_e76', ['https://www.howdeninsurance.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
