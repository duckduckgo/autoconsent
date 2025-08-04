import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_erasmus-plus.ec.europa.eu_1by', ['https://erasmus-plus.ec.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
