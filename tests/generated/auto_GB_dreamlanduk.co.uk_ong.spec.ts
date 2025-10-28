import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dreamlanduk.co.uk_ong', ['https://www.dreamlanduk.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
