import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hackthebox.com_3g1', ['https://www.hackthebox.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
