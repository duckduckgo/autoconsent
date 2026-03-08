import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.qrcodechimp.com_nx5', ['https://de.qrcodechimp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
