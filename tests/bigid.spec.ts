import generateCMPTests from '../playwright/runner';

generateCMPTests('bigid', [
    'https://www.bigid.com/',
    'https://about.sprouts.com/press-release/survey-by-sprouts-looks-into-new-year-eating-habits-reveals-young-americans-are-likely-to-shift-away-from-meat/',
]);
