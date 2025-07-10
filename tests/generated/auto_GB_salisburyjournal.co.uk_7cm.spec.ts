import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_salisburyjournal.co.uk_7cm', ['https://www.salisburyjournal.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
