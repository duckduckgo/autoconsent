import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_john-clark.co.uk_lme', ['https://www.john-clark.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
