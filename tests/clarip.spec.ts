import generateCMPTests from '../playwright/runner';

// opt-in banners with only an accept button, or an accept button and a link to the preference center iframe
generateCMPTests('clarip', ['https://www.asplundh.com/', 'https://www.jrgm.com/', 'https://www.perrinbrewing.com/']);

// the site rejects non-US visitors
generateCMPTests('clarip', ['https://www.dollargeneral.com/'], {
    onlyRegions: ['US'],
});
