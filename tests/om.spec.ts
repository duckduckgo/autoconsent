import generateCMPTests from '../playwright/runner';

generateCMPTests('om', [
    'https://olli-machts.de/en/extension/cookie-manager',
    'https://www.uni-assist.de/',
    'https://www.zvshk.de/',
    'https://deutsche-alzheimer.de/',
    'https://avstumpfl.com/en/',
    'https://www.wasserwaermeluft.de/',
    'https://www.vdws.de/',
]);
