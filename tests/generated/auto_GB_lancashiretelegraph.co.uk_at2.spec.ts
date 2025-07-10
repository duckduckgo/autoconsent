import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lancashiretelegraph.co.uk_at2', ['https://www.lancashiretelegraph.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
