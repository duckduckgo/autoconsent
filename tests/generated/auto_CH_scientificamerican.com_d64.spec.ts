import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_scientificamerican.com_d64', ['https://www.scientificamerican.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
