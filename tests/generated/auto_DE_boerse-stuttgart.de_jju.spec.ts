import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_boerse-stuttgart.de_jju', ['https://www.boerse-stuttgart.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
