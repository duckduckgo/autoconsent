import generateCMPTests from '../playwright/runner';

// Consent-mode sites: the settings panel lets us reject every optional category.
generateCMPTests('datasign-cmp', [
    'https://www.jfe-holdings.co.jp/investor/stock/factory_tour/index.html',
    'https://www.bridgestone.co.jp/',
]);

// Notice-mode sites offer no choice at all, so the dialog can only be dismissed and no consent state is stored.
generateCMPTests('datasign-cmp', ['https://www.billboard-japan.com/'], { testSelfTest: false });
