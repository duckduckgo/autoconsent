import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_erasmus-plus.ec.europa.eu_ojh', ['https://erasmus-plus.ec.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
