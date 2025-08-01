import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ksk-tuebingen.de_u3o', ['https://www.ksk-tuebingen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
