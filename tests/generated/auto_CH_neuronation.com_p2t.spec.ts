import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_neuronation.com_p2t', ['https://www.neuronation.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
