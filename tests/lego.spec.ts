import generateCMPTests from '../playwright/runner';

// the homepage puts an age gate in front of the modal, so test pages that skip the gate
generateCMPTests('lego', [
    'https://www.lego.com/en-us/legal/notices-and-policies/privacy-policy',
    'https://www.lego.com/en-gb/legal/notices-and-policies/privacy-policy',
    'https://www.lego.com/de-de/legal/notices-and-policies/privacy-policy',
]);
