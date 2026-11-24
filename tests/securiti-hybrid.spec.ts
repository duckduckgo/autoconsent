import generateCMPTests from '../playwright/runner';

generateCMPTests('securiti-hybrid', [
    'https://www.tollbrothers.com/',
    // "Unselect All" is hidden, categories are unchecked one by one
    'https://www.tollbrothersdesignstudio.com/',
    'https://www.rplighting.com/',
    // preference center without any toggles
    'https://www.fergusonhvac.com/',
]);

// banner with a "reject" button; EU visitors get an opt-in banner instead
generateCMPTests('securiti-hybrid', ['https://www.cdmsmith.com/'], { onlyRegions: ['US'] });
