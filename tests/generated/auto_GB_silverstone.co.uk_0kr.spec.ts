import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_silverstone.co.uk_0kr', ['https://www.silverstone.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
