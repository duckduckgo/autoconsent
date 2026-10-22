import generateCMPTests from '../playwright/runner';

generateCMPTests('mco-consent', [
    // pop-up variant
    'https://www.kaiserlodge.at/en/getting-here.html',
    'https://www.hotel-adonis.ch/',
    'https://www.obergaisberg.at/',
    // slide-up variant
    'https://www.grundlhof.at/',
    'https://www.sommer-card.at/',
    'https://www.hotel-resch.at/',
]);
