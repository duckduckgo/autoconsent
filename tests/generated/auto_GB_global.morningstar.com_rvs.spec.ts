import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_global.morningstar.com_rvs', ['https://global.morningstar.com/en-gb?marketID=gb'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
