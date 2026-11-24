import generateCMPTests from '../playwright/runner';

generateCMPTests('real-cookie-banner', [
    'https://www.schweiztipps.ch/',
    'https://www.windowspower.de/',
    'https://www.zealand.dk/',
    'https://hejmdal.dk/',
    'https://genussguide-hamburg.com/',
    'https://hausarztpraxis-am-romanplatz.de/',
    'https://auswandern-info.com/',
]);
