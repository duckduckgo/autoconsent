import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NL_televizier.nl_l0l',
    ['https://voorkeuren.tvgids.nl/consent?target=https%3A%2F%2Fwww.televizier.nl%2F&aid=bdc.v5&sid=televizier.web&v=25'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] },
);
