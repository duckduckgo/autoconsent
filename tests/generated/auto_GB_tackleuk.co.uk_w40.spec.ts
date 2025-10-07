import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tackleuk.co.uk_w40', ['https://www.tackleuk.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
