import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dovenatuursteen.nl_9zq', ['https://dovenatuursteen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
