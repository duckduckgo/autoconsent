import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lancashiretelegraph.co.uk_84y', ['https://www.lancashiretelegraph.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
