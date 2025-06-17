import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_news.sky.com_r4s', ["https://news.sky.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
