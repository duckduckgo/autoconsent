import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hackthebox.com_gya', ['https://www.hackthebox.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
