import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_acondigital.com_dwf', ['https://acondigital.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
