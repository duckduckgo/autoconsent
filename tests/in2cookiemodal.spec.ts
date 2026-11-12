import generateCMPTests from '../playwright/runner';

generateCMPTests('in2cookiemodal', [
    'https://www.oth-regensburg.de/',
    'https://www.leukaemie-hilfe.de/',
    'https://www.seeburger.com/',
    'https://www.thi.de/forschung/aimotion/',
]);

// the page reloads after saving, so the self-test result is lost
generateCMPTests('in2cookiemodal', ['https://www.hs-esslingen.de/'], {
    testSelfTest: false,
});
