import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boerse-frankfurt.de_331', ['https://www.boerse-frankfurt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
