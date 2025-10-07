import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_erasmus-plus.ec.europa.eu_qvm', ['https://erasmus-plus.ec.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
