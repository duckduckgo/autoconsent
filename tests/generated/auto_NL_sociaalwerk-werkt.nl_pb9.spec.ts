import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sociaalwerk-werkt.nl_pb9', ['https://www.sociaalwerk-werkt.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
