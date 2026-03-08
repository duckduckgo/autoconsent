import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_colinssashwindows.co.uk_5qe', ['https://colinssashwindows.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
