import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_watfordobserver.co.uk_01k', ['https://www.watfordobserver.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
