import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.uk.leonardo.com_ngt', ['https://careers.uk.leonardo.com/gb/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
