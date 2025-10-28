import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_versicherungsvergleich1.com_oco', ['https://versicherungsvergleich1.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
