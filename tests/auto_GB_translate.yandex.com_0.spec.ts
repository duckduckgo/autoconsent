import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_translate.yandex.com_0', ["https://translate.yandex.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
