import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visitdevon.co.uk_0pu', ['https://www.visitdevon.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
