import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_au.gevityrx.com_w5g', ['https://au.gevityrx.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
