import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kfzversicherungsvergleich1.de_73b', ['https://kfzversicherungsvergleich1.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
