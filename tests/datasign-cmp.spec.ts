import generateCMPTests from '../playwright/runner';

// Deniable consent dialog (Reject / Agree)
generateCMPTests('datasign-cmp', ['https://www.jfe-holdings.co.jp/en/']);
// Opt-out dialog: opt-out happens through the per-category settings modal
generateCMPTests('datasign-cmp', ['https://www.bridgestone.co.jp/', 'https://www.pokkasapporo-fb.jp/'], { testOptIn: false });
// Notice-only dialog, dismissed instead of accepted
generateCMPTests('datasign-cmp', ['https://www.billboard-japan.com/'], { testOptIn: false });
