import generateCMPTests from '../playwright/runner';

generateCMPTests('transcend', ['https://www.verizon.com/support/account-pin-faqs/']);

// TCF UI variant, EU/UK only.
generateCMPTests(
    'transcend',
    ['https://canalys.xyz/', 'https://www.nytimes.com/athletic/7232283/2026/04/27/eagles-nfl-draft-2026-picks-howie-roseman-nigeria/'],
    { testOptIn: false, testSelfTest: false, onlyRegions: ['GB', 'DE', 'FR'] },
);
