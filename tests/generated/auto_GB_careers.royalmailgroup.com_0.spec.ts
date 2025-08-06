import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.royalmailgroup.com_0', ['https://careers.royalmailgroup.com/gb/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
