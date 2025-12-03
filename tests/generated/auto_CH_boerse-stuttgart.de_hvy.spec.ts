import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boerse-stuttgart.de_hvy', ['https://www.boerse-stuttgart.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
