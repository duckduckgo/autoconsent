import generateCMPTests from '../playwright/runner';

generateCMPTests('transcend', ['https://www.verizon.com/support/account-pin-faqs/']);

// New TCF UI variant (#transcend-consent-manager-tcf-ui), shown in EU/UK regions.
generateCMPTests(
    'transcend',
    ['https://canalys.xyz/', 'https://www.nytimes.com/athletic/7232283/2026/04/27/eagles-nfl-draft-2026-picks-howie-roseman-nigeria/'],
    { testOptIn: false, testSelfTest: false, onlyRegions: ['GB', 'DE', 'FR'] },
);
