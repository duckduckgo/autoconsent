import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_john-clark.co.uk_fnv', ['https://www.john-clark.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
