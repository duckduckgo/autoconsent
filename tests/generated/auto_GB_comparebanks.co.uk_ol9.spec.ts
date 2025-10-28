import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_comparebanks.co.uk_ol9', ['https://www.comparebanks.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
