import generateCMPTests from '../playwright/runner';

generateCMPTests('faphouse', [
    'https://vi.faphouse2.com/',
    'https://faphouse.com/',
    'https://ja.faphouse.com/',
    'https://tr.faphouse.com/',
]);
