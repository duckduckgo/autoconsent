import generateCMPTests from "../playwright/runner";

generateCMPTests('sibbo', [
    'https://www.europafm.com/',
    'sibboventures.com',
    'https://www.cmmedia.es/',
    'https://www.todopapas.com/'
]
);
