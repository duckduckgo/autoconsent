import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_erasmus-plus.ec.europa.eu_w8t', ['https://erasmus-plus.ec.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
