import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_alivewestnorfolk.co.uk_jm3', ['https://alivewestnorfolk.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
