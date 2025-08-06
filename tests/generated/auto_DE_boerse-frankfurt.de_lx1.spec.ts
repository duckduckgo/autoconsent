import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_boerse-frankfurt.de_lx1', ['https://www.boerse-frankfurt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
