import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bailiffgatehotel.com_2us', ['https://bailiffgatehotel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
