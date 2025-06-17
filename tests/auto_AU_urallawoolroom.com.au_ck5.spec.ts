import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_urallawoolroom.com.au_ck5', ["https://www.urallawoolroom.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
