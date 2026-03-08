import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_countmyshutter.com_urf', ['https://countmyshutter.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
