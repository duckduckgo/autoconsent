import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_milwaukeetool.com_4in', ['https://www.milwaukeetool.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
