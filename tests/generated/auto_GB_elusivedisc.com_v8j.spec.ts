import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_elusivedisc.com_v8j', ['https://elusivedisc.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
