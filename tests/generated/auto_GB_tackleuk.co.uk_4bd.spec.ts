import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tackleuk.co.uk_4bd', ['https://www.tackleuk.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
