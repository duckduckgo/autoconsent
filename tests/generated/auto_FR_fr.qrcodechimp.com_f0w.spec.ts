import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.qrcodechimp.com_f0w', ['https://fr.qrcodechimp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
