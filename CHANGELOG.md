# v4.3.3 (Thu Jun 22 2023)

#### 🐛 Bug Fix

- Remove wait from detectCmp step [#189](https://github.com/duckduckgo/autoconsent/pull/189) ([@sammacbeth](https://github.com/sammacbeth))

#### Authors: 1

- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v4.3.2 (Wed Jun 21 2023)

#### 🐛 Bug Fix

- Limit triggering of nba.com rule [#187](https://github.com/duckduckgo/autoconsent/pull/187) ([@sammacbeth](https://github.com/sammacbeth))

#### Authors: 1

- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v4.3.1 (Tue Jun 20 2023)

#### 🐛 Bug Fix

- Bump @typescript-eslint/eslint-plugin from 5.59.11 to 5.60.0 [#186](https://github.com/duckduckgo/autoconsent/pull/186) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @types/chai from 4.3.4 to 4.3.5 [#183](https://github.com/duckduckgo/autoconsent/pull/183) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- added nba.com notice rule and test and modified oneTrust rule class [#172](https://github.com/duckduckgo/autoconsent/pull/172) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))

#### 🔩 Dependency Updates

- Bump @typescript-eslint/parser from 5.59.2 to 5.60.0 [#185](https://github.com/duckduckgo/autoconsent/pull/185) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump eslint from 8.40.0 to 8.43.0 [#184](https://github.com/duckduckgo/autoconsent/pull/184) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Amanda RASOLOFOTSARA ([@icodebyamanda](https://github.com/icodebyamanda))
- euw-arasolofotsara1 (arasolofotsara@duckduckgo.com)

---

# v4.3.0 (Tue Jun 20 2023)

#### 🚀 Enhancement

- add batch of rules and tests for banners reported by users [#181](https://github.com/duckduckgo/autoconsent/pull/181) (arasolofotsara@duckduckgo.com [@sammacbeth](https://github.com/sammacbeth) [@icodebyamanda](https://github.com/icodebyamanda))

#### Authors: 3

- Amanda RASOLOFOTSARA ([@icodebyamanda](https://github.com/icodebyamanda))
- euw-arasolofotsara1 (arasolofotsara@duckduckgo.com)
- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v4.2.0 (Mon Jun 19 2023)

#### 🚀 Enhancement

- Bump @typescript-eslint/eslint-plugin from 5.45.1 to 5.59.2 [#143](https://github.com/duckduckgo/autoconsent/pull/143) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump web-ext from 7.4.0 to 7.6.2 [#145](https://github.com/duckduckgo/autoconsent/pull/145) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @typescript-eslint/parser from 5.51.0 to 5.59.2 [#146](https://github.com/duckduckgo/autoconsent/pull/146) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @playwright/test from 1.30.0 to 1.33.0 [#147](https://github.com/duckduckgo/autoconsent/pull/147) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### 🐛 Bug Fix

- Round 2: Add to US top sites optOut banners rules and tests [#175](https://github.com/duckduckgo/autoconsent/pull/175) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- added verification to check if user's optout on TrustArc CMP has been set [#159](https://github.com/duckduckgo/autoconsent/pull/159) ([@hyebahi](https://github.com/hyebahi) [@sammacbeth](https://github.com/sammacbeth))
- Added rule for cookiefirst [#177](https://github.com/duckduckgo/autoconsent/pull/177) ([@kunalvirk](https://github.com/kunalvirk))
- Bump @typescript-eslint/eslint-plugin from 5.59.5 to 5.59.11 [#182](https://github.com/duckduckgo/autoconsent/pull/182) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump tslib from 2.5.0 to 2.5.3 [#179](https://github.com/duckduckgo/autoconsent/pull/179) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @types/chrome from 0.0.235 to 0.0.237 [#173](https://github.com/duckduckgo/autoconsent/pull/173) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @rollup/plugin-typescript from 11.1.0 to 11.1.1 [#161](https://github.com/duckduckgo/autoconsent/pull/161) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- rewrote CMP Ketch to include US in the rules [#171](https://github.com/duckduckgo/autoconsent/pull/171) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- added 2 US CMP optOut rules and tests [#168](https://github.com/duckduckgo/autoconsent/pull/168) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- Round 2: added 5 notice banner rules and tests top US sites [#167](https://github.com/duckduckgo/autoconsent/pull/167) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- added 4 notice banner rules and tests top sites [#164](https://github.com/duckduckgo/autoconsent/pull/164) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- Add xhamster.com custom US notice banner rule and test [#154](https://github.com/duckduckgo/autoconsent/pull/154) (arasolofotsara@duckduckgo.com [@muodov](https://github.com/muodov) [@icodebyamanda](https://github.com/icodebyamanda))
- Add youporn custom notice banner's rule and test [#158](https://github.com/duckduckgo/autoconsent/pull/158) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- Add pornpics custom US notice banner rule and test [#156](https://github.com/duckduckgo/autoconsent/pull/156) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- Add whitepages custom US notice banner rule and test [#155](https://github.com/duckduckgo/autoconsent/pull/155) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- Add the cmp wpcc rule and test to notice banners [#157](https://github.com/duckduckgo/autoconsent/pull/157) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- Bump @types/chrome from 0.0.234 to 0.0.235 [#149](https://github.com/duckduckgo/autoconsent/pull/149) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @types/chrome from 0.0.206 to 0.0.234 [#144](https://github.com/duckduckgo/autoconsent/pull/144) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Tweak the Civic rule [#131](https://github.com/duckduckgo/autoconsent/pull/131) ([@muodov](https://github.com/muodov))

#### 🔩 Dependency Updates

- Bump auto from 10.42.0 to 10.46.0 [#162](https://github.com/duckduckgo/autoconsent/pull/162) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump eslint from 8.36.0 to 8.40.0 [#153](https://github.com/duckduckgo/autoconsent/pull/153) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @typescript-eslint/eslint-plugin from 5.59.2 to 5.59.5 [#152](https://github.com/duckduckgo/autoconsent/pull/152) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @rollup/plugin-typescript from 11.0.0 to 11.1.0 [#151](https://github.com/duckduckgo/autoconsent/pull/151) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 7

- [@dependabot[bot]](https://github.com/dependabot[bot])
- [@hyebahi](https://github.com/hyebahi)
- Amanda RASOLOFOTSARA ([@icodebyamanda](https://github.com/icodebyamanda))
- euw-arasolofotsara1 (arasolofotsara@duckduckgo.com)
- Kunal Virk ([@kunalvirk](https://github.com/kunalvirk))
- Maxim Tsoy ([@muodov](https://github.com/muodov))
- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v4.1.3 (Tue Feb 14 2023)

#### 🐛 Bug Fix

- Reduce triggering of coinbase and theverge rules [#101](https://github.com/duckduckgo/autoconsent/pull/101) ([@sammacbeth](https://github.com/sammacbeth))

#### 🔩 Dependency Updates

- Bump tslib from 2.4.1 to 2.5.0 [#97](https://github.com/duckduckgo/autoconsent/pull/97) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump auto from 10.37.6 to 10.42.0 [#98](https://github.com/duckduckgo/autoconsent/pull/98) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump eslint from 8.31.0 to 8.34.0 [#100](https://github.com/duckduckgo/autoconsent/pull/100) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v4.1.2 (Thu Feb 09 2023)

#### 🐛 Bug Fix

- New rules [#95](https://github.com/duckduckgo/autoconsent/pull/95) ([@sammacbeth](https://github.com/sammacbeth))

#### 🔩 Dependency Updates

- Bump mocha from 10.1.0 to 10.2.0 [#64](https://github.com/duckduckgo/autoconsent/pull/64) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @playwright/test from 1.24.2 to 1.30.0 [#92](https://github.com/duckduckgo/autoconsent/pull/92) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump typescript from 4.8.4 to 4.9.5 [#93](https://github.com/duckduckgo/autoconsent/pull/93) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @rollup/plugin-typescript from 10.0.1 to 11.0.0 [#89](https://github.com/duckduckgo/autoconsent/pull/89) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @typescript-eslint/parser from 5.46.1 to 5.51.0 [#94](https://github.com/duckduckgo/autoconsent/pull/94) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v4.1.1 (Tue Jan 24 2023)

#### 🐛 Bug Fix

- Add a test cosmetic rule [#91](https://github.com/duckduckgo/autoconsent/pull/91) ([@muodov](https://github.com/muodov))

#### Authors: 1

- Maxim Tsoy ([@muodov](https://github.com/muodov))

---

# v4.1.0 (Tue Jan 17 2023)

#### 🚀 Enhancement

- Cosmetic rules [#67](https://github.com/duckduckgo/autoconsent/pull/67) ([@muodov](https://github.com/muodov))
- Extension Devtools [#42](https://github.com/duckduckgo/autoconsent/pull/42) ([@sammacbeth](https://github.com/sammacbeth) [@muodov](https://github.com/muodov))

#### 🐛 Bug Fix

- Cleaning up invalid tests [#49](https://github.com/duckduckgo/autoconsent/pull/49) ([@sammacbeth](https://github.com/sammacbeth))
- Fix type warning on bundle. [#83](https://github.com/duckduckgo/autoconsent/pull/83) ([@sammacbeth](https://github.com/sammacbeth))
- Add broken site issue template [#69](https://github.com/duckduckgo/autoconsent/pull/69) ([@sammacbeth](https://github.com/sammacbeth))

#### 🔩 Dependency Updates

- Bump @rollup/plugin-json from 5.0.2 to 6.0.0 [#72](https://github.com/duckduckgo/autoconsent/pull/72) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @types/chrome from 0.0.204 to 0.0.206 [#85](https://github.com/duckduckgo/autoconsent/pull/85) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump eslint from 8.29.0 to 8.31.0 [#84](https://github.com/duckduckgo/autoconsent/pull/84) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Maxim Tsoy ([@muodov](https://github.com/muodov))
- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v4.0.0 (Wed Dec 14 2022)

#### 💥 Breaking Change

- Bump @rollup/plugin-json from 4.1.0 to 5.0.2 [#61](https://github.com/duckduckgo/autoconsent/pull/61) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @rollup/plugin-typescript from 8.3.2 to 10.0.1 [#58](https://github.com/duckduckgo/autoconsent/pull/58) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### 🚀 Enhancement

- Bump @typescript-eslint/parser from 5.42.1 to 5.45.1 [#60](https://github.com/duckduckgo/autoconsent/pull/60) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @typescript-eslint/eslint-plugin from 5.42.1 to 5.45.1 [#59](https://github.com/duckduckgo/autoconsent/pull/59) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Add cookiealert CMP (cookiebot variant) [#47](https://github.com/duckduckgo/autoconsent/pull/47) ([@sammacbeth](https://github.com/sammacbeth))

#### 🐛 Bug Fix

- Bump @typescript-eslint/parser from 5.45.1 to 5.46.1 [#65](https://github.com/duckduckgo/autoconsent/pull/65) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @types/chrome from 0.0.188 to 0.0.204 [#63](https://github.com/duckduckgo/autoconsent/pull/63) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Fix Sourcepoint CCPA popup handling [#57](https://github.com/duckduckgo/autoconsent/pull/57) ([@muodov](https://github.com/muodov))
- Fix typescript warnings [#56](https://github.com/duckduckgo/autoconsent/pull/56) ([@sammacbeth](https://github.com/sammacbeth))
- Bump tslib from 2.4.0 to 2.4.1 [#52](https://github.com/duckduckgo/autoconsent/pull/52) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump chai from 4.3.6 to 4.3.7 [#51](https://github.com/duckduckgo/autoconsent/pull/51) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Lint all code and rules in CI [#44](https://github.com/duckduckgo/autoconsent/pull/44) ([@sammacbeth](https://github.com/sammacbeth))
- Reduce triggering of affinity.serif.com rule [#45](https://github.com/duckduckgo/autoconsent/pull/45) ([@sammacbeth](https://github.com/sammacbeth))

#### 🔩 Dependency Updates

- Bump eslint from 8.28.0 to 8.29.0 [#62](https://github.com/duckduckgo/autoconsent/pull/62) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump mocha and @types/mocha [#53](https://github.com/duckduckgo/autoconsent/pull/53) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump web-ext from 7.3.0 to 7.4.0 [#54](https://github.com/duckduckgo/autoconsent/pull/54) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Maxim Tsoy ([@muodov](https://github.com/muodov))
- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v3.0.4 (Mon Nov 21 2022)

#### 🐛 Bug Fix

- Fix sourcepoint prehiding; Remove sourcepoint-top. [#50](https://github.com/duckduckgo/autoconsent/pull/50) ([@sammacbeth](https://github.com/sammacbeth))

#### Authors: 1

- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v3.0.3 (Fri Nov 18 2022)

#### 🐛 Bug Fix

- Fix borlabs tests. [#43](https://github.com/duckduckgo/autoconsent/pull/43) ([@sammacbeth](https://github.com/sammacbeth))
- Fix reddit [#46](https://github.com/duckduckgo/autoconsent/pull/46) ([@sammacbeth](https://github.com/sammacbeth))
- Add extra options for Jenkins to improve test reliability. [#48](https://github.com/duckduckgo/autoconsent/pull/48) ([@sammacbeth](https://github.com/sammacbeth))
- Fix popup showing after opt-out complete on stackoverflow.com [#41](https://github.com/duckduckgo/autoconsent/pull/41) ([@sammacbeth](https://github.com/sammacbeth))

#### Authors: 1

- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v3.0.2 (Fri Nov 04 2022)

#### 🐛 Bug Fix

- Ignore Sourcepoint cookie paywall [#40](https://github.com/duckduckgo/autoconsent/pull/40) ([@sammacbeth](https://github.com/sammacbeth))

#### Authors: 1

- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))

---

# v3.0.1 (Thu Nov 03 2022)

#### 🐛 Bug Fix

- Use auto to automate releases on PR merge. [#37](https://github.com/duckduckgo/autoconsent/pull/37) ([@sammacbeth](https://github.com/sammacbeth))
- Remove asus rule [#38](https://github.com/duckduckgo/autoconsent/pull/38) ([@sammacbeth](https://github.com/sammacbeth))
- Slow down consentmanager popup check to prevent false positive. [#36](https://github.com/duckduckgo/autoconsent/pull/36) ([@sammacbeth](https://github.com/sammacbeth))
- Fix unwrapping of eval result array. [#33](https://github.com/duckduckgo/autoconsent/pull/33) ([@sammacbeth](https://github.com/sammacbeth))
- A bunch of site-specific rules + extension improvements [#30](https://github.com/duckduckgo/autoconsent/pull/30) ([@muodov](https://github.com/muodov) [@adewes](https://github.com/adewes))
- Optin hotfix [#31](https://github.com/duckduckgo/autoconsent/pull/31) ([@muodov](https://github.com/muodov))
- privacymanager.io + onetrust fix [#28](https://github.com/duckduckgo/autoconsent/pull/28) ([@muodov](https://github.com/muodov))
- Add rules for Sibbo (CMP) [#24](https://github.com/duckduckgo/autoconsent/pull/24) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- Add rules for Pubtech (CMP) [#25](https://github.com/duckduckgo/autoconsent/pull/25) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- Add more rules for IAB-supporting CMPs [#27](https://github.com/duckduckgo/autoconsent/pull/27) ([@muodov](https://github.com/muodov))
- Add rules for Axeptio (CMP) [#23](https://github.com/duckduckgo/autoconsent/pull/23) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- New rules [#26](https://github.com/duckduckgo/autoconsent/pull/26) ([@muodov](https://github.com/muodov))
- Added rules to monzo.com (US coverage) [#22](https://github.com/duckduckgo/autoconsent/pull/22) (arasolofotsara@duckduckgo.com [@icodebyamanda](https://github.com/icodebyamanda))
- Add rule for affinity.serif.com [#21](https://github.com/duckduckgo/autoconsent/pull/21) ([@muodov](https://github.com/muodov))
- Use new jenkins node [#20](https://github.com/duckduckgo/autoconsent/pull/20) ([@sammacbeth](https://github.com/sammacbeth))
- Fix manifest copy paths [#19](https://github.com/duckduckgo/autoconsent/pull/19) ([@muodov](https://github.com/muodov))
- 2.1.0 [#18](https://github.com/duckduckgo/autoconsent/pull/18) ([@muodov](https://github.com/muodov))
- Support for MV2 on Firefox. [#16](https://github.com/duckduckgo/autoconsent/pull/16) ([@sammacbeth](https://github.com/sammacbeth))
- Opt in improvements [#17](https://github.com/duckduckgo/autoconsent/pull/17) ([@muodov](https://github.com/muodov))
- 2.0.0 [#15](https://github.com/duckduckgo/autoconsent/pull/15) ([@muodov](https://github.com/muodov))
- Fat content script architecture [#14](https://github.com/duckduckgo/autoconsent/pull/14) ([@muodov](https://github.com/muodov))
- Setup Jenkins multibranch testing [#13](https://github.com/duckduckgo/autoconsent/pull/13) ([@sammacbeth](https://github.com/sammacbeth))
- More UK coverage [#12](https://github.com/duckduckgo/autoconsent/pull/12) ([@jdorweiler](https://github.com/jdorweiler))
- v1.0.7 [#11](https://github.com/duckduckgo/autoconsent/pull/11) ([@muodov](https://github.com/muodov))
- Some cosmetic fixes [#10](https://github.com/duckduckgo/autoconsent/pull/10) ([@muodov](https://github.com/muodov))
- Convert OneTrust rule to JS [#9](https://github.com/duckduckgo/autoconsent/pull/9) ([@muodov](https://github.com/muodov))
- Fix popup detection [#4](https://github.com/duckduckgo/autoconsent/pull/4) ([@muodov](https://github.com/muodov))
- revert visible change [#8](https://github.com/duckduckgo/autoconsent/pull/8) ([@jdorweiler](https://github.com/jdorweiler))
- Add more tests [#6](https://github.com/duckduckgo/autoconsent/pull/6) ([@jdorweiler](https://github.com/jdorweiler) [@sammacbeth](https://github.com/sammacbeth))
- v1.0.4 [#5](https://github.com/duckduckgo/autoconsent/pull/5) ([@jdorweiler](https://github.com/jdorweiler))
- More rules for DE sites [#3](https://github.com/duckduckgo/autoconsent/pull/3) ([@jdorweiler](https://github.com/jdorweiler))
- more CMP rules [#1](https://github.com/duckduckgo/autoconsent/pull/1) ([@jdorweiler](https://github.com/jdorweiler))

#### ⚠️ Pushed to `main`

- 3.0.0 ([@adewes](https://github.com/adewes))
- 2.2.1 ([@muodov](https://github.com/muodov))
- Minor flicker fix for uniconsent ([@muodov](https://github.com/muodov))
- 2.2.0 ([@muodov](https://github.com/muodov))
- 2.1.2 ([@sammacbeth](https://github.com/sammacbeth))
- 2.1.1 ([@muodov](https://github.com/muodov))
- 1.0.8 ([@jdorweiler](https://github.com/jdorweiler))
- 1.0.6 ([@muodov](https://github.com/muodov))
- 1.0.5 ([@jdorweiler](https://github.com/jdorweiler))
- v1.0.3 ([@jdorweiler](https://github.com/jdorweiler))
- Publish to duckduckgo's npm. ([@sammacbeth](https://github.com/sammacbeth))
- 1.0.2 ([@sammacbeth](https://github.com/sammacbeth))
- Onetrust fixes. ([@sammacbeth](https://github.com/sammacbeth))
- 1.0.1 ([@sammacbeth](https://github.com/sammacbeth))
- Wait longer before unhiding on Consent-o-matic CMPs ([@sammacbeth](https://github.com/sammacbeth))
- 1.0.0 ([@sammacbeth](https://github.com/sammacbeth))
- cancer.org -> Onetrust ([@sammacbeth](https://github.com/sammacbeth))
- forums.cpanel.net -> cookiebot ([@sammacbeth](https://github.com/sammacbeth))
- Add prehide selectors to rules ([@sammacbeth](https://github.com/sammacbeth))
- Support for prehide rules ([@sammacbeth](https://github.com/sammacbeth))
- Support auto-optout in test addon. ([@sammacbeth](https://github.com/sammacbeth))
- Add klaro ([@sammacbeth](https://github.com/sammacbeth))
- Prepare to support prehiding. ([@sammacbeth](https://github.com/sammacbeth))
- 0.10.0 ([@sammacbeth](https://github.com/sammacbeth))
- Revert "expatica.com changed CMP." ([@sammacbeth](https://github.com/sammacbeth))
- Sourcepoint: unhide elements after rule completes ([@sammacbeth](https://github.com/sammacbeth))
- Add undohide rule for removing CSS hiding rules ([@sammacbeth](https://github.com/sammacbeth))
- expatica.com changed CMP. ([@sammacbeth](https://github.com/sammacbeth))
- 0.9.4 ([@sammacbeth](https://github.com/sammacbeth))
- Cookiebot fixes ([@sammacbeth](https://github.com/sammacbeth))
- Remove uniconsent ([@sammacbeth](https://github.com/sammacbeth))
- Cookie law info fix ([@sammacbeth](https://github.com/sammacbeth))
- 0.9.3 ([@sammacbeth](https://github.com/sammacbeth))
- More region skipping ([@sammacbeth](https://github.com/sammacbeth))
- Fix rule builder ([@sammacbeth](https://github.com/sammacbeth))
- Break out of detection when an exception occurs. ([@sammacbeth](https://github.com/sammacbeth))
- Wait for popups too ([@sammacbeth](https://github.com/sammacbeth))
- 0.9.2 ([@sammacbeth](https://github.com/sammacbeth))
- Test stability improvements ([@sammacbeth](https://github.com/sammacbeth))
- Use built-in screenshotting ([@sammacbeth](https://github.com/sammacbeth))
- Remove unused CMPs ([@sammacbeth](https://github.com/sammacbeth))
- 0.9.1 ([@sammacbeth](https://github.com/sammacbeth))
- More test coverage ([@sammacbeth](https://github.com/sammacbeth))
- Sourcepoint DNS fix. ([@sammacbeth](https://github.com/sammacbeth))
- Account for regional differences in tests ([@sammacbeth](https://github.com/sammacbeth))
- Test spec tweaks ([@sammacbeth](https://github.com/sammacbeth))
- Skip some tests based on region. ([@sammacbeth](https://github.com/sammacbeth))
- Update test runner to use describe ([@sammacbeth](https://github.com/sammacbeth))
- Add region to test names ([@sammacbeth](https://github.com/sammacbeth))
- Puppeteer frame detection fixes ([@sammacbeth](https://github.com/sammacbeth))
- 0.9.0 ([@sammacbeth](https://github.com/sammacbeth))
- Playwright tests ([@sammacbeth](https://github.com/sammacbeth))
- 0.8.1 ([@sammacbeth](https://github.com/sammacbeth))
- Fix for Onetrust on stack exchange sites. ([@sammacbeth](https://github.com/sammacbeth))
- Sourcepoint fix ([@sammacbeth](https://github.com/sammacbeth))
- 0.8.0 ([@sammacbeth](https://github.com/sammacbeth))
- Batch of CMP additions and fixes for US sites. ([@sammacbeth](https://github.com/sammacbeth))
- 0.7.5 ([@sammacbeth](https://github.com/sammacbeth))
- Stricter TS config. ([@sammacbeth](https://github.com/sammacbeth))
- Drop onetrust-stackoverflow CMP ([@sammacbeth](https://github.com/sammacbeth))
- Add npm clean script ([@sammacbeth](https://github.com/sammacbeth))
- Test CMP update ([@sammacbeth](https://github.com/sammacbeth))
- 0.7.4 ([@sammacbeth](https://github.com/sammacbeth))
- Make parallel rules an AND ([@sammacbeth](https://github.com/sammacbeth))
- Onetrust fixes ([@sammacbeth](https://github.com/sammacbeth))
- 0.7.3 ([@sammacbeth](https://github.com/sammacbeth))
- Remove broken CMPs ([@sammacbeth](https://github.com/sammacbeth))
- Implement Evidon. ([@sammacbeth](https://github.com/sammacbeth))
- Consentmanager.net implementation. ([@sammacbeth](https://github.com/sammacbeth))
- Cybotcookiebot fixes and improvements. ([@sammacbeth](https://github.com/sammacbeth))
- Implement tealium CMP ([@sammacbeth](https://github.com/sammacbeth))
- TrustArc fixes and hiding. ([@sammacbeth](https://github.com/sammacbeth))
- Disable ez-cookie (broken) ([@sammacbeth](https://github.com/sammacbeth))
- Remove Sirdata (broken) ([@sammacbeth](https://github.com/sammacbeth))
- 0.7.2 ([@sammacbeth](https://github.com/sammacbeth))
- Make hideElements a noop on puppeteer. ([@sammacbeth](https://github.com/sammacbeth))
- Fix puppeteer visibility detection ([@sammacbeth](https://github.com/sammacbeth))
- 0.7.1 ([@sammacbeth](https://github.com/sammacbeth))
- Ensure everything gets built before publish ([@sammacbeth](https://github.com/sammacbeth))
- Create autoconsent rule for onetrust ([@sammacbeth](https://github.com/sammacbeth))
- 0.7.0 ([@sammacbeth](https://github.com/sammacbeth))
- More specific detection for cookiebot ([@sammacbeth](https://github.com/sammacbeth))
- Add API for disabling CMPs ([@sammacbeth](https://github.com/sammacbeth))
- 0.6.3 ([@sammacbeth](https://github.com/sammacbeth))
- Make consent-o-matic action method a string ([@sammacbeth](https://github.com/sammacbeth))
- More test cases ([@sammacbeth](https://github.com/sammacbeth))
- Fixes for the puppeteer tab implementation. ([@sammacbeth](https://github.com/sammacbeth))
- Minor CMP fixes ([@sammacbeth](https://github.com/sammacbeth))
- 0.6.2 ([@sammacbeth](https://github.com/sammacbeth))
- Addon version as a date ([@sammacbeth](https://github.com/sammacbeth))
- Clear frames on main frame change. ([@sammacbeth](https://github.com/sammacbeth))
- Hide popup while clicking it. ([@sammacbeth](https://github.com/sammacbeth))
- 0.6.1 ([@sammacbeth](https://github.com/sammacbeth))
- Fix rule builder when there are no consent-o-matic overrides ([@sammacbeth](https://github.com/sammacbeth))
- Fix publishing of .js files ([@sammacbeth](https://github.com/sammacbeth))
- 0.6.0 ([@sammacbeth](https://github.com/sammacbeth))
- Preparing for cross-platform support ([@sammacbeth](https://github.com/sammacbeth))
- Bump version ([@sammacbeth](https://github.com/sammacbeth))
- Add Google funding choices CMP ([@sammacbeth](https://github.com/sammacbeth))
- Cleanup broken CMPs ([@sammacbeth](https://github.com/sammacbeth))
- Add watch build script ([@sammacbeth](https://github.com/sammacbeth))
- Add update url ([@sammacbeth](https://github.com/sammacbeth))
- Fix sourcepoint implementation. ([@sammacbeth](https://github.com/sammacbeth))
- Bump consent-o-matic rules ([@sammacbeth](https://github.com/sammacbeth))
- Change extension ID and bump version ([@sammacbeth](https://github.com/sammacbeth))
- Add page action icons ([@sammacbeth](https://github.com/sammacbeth))
- Return early on detection if one returns true ([@sammacbeth](https://github.com/sammacbeth))
- Control running of opt out from a page action ([@sammacbeth](https://github.com/sammacbeth))
- 0.5.4 ([@sammacbeth](https://github.com/sammacbeth))
- Disable debugging messages in content-script. Fixes #18 ([@sammacbeth](https://github.com/sammacbeth))
- 0.5.3 ([@sammacbeth](https://github.com/sammacbeth))
- Use TCFv2 as the default test. ([@sammacbeth](https://github.com/sammacbeth))
- Updated version of quantcast ([@sammacbeth](https://github.com/sammacbeth))
- Update consent-o-matic rules ([@sammacbeth](https://github.com/sammacbeth))
- Google opt-out rule ([@sammacbeth](https://github.com/sammacbeth))
- Add privacy-mgmt CMP - new on theguardian.com ([@sammacbeth](https://github.com/sammacbeth))
- 0.5.2 ([@sammacbeth](https://github.com/sammacbeth))
- 0.5.1 ([@sammacbeth](https://github.com/sammacbeth))
- Update web-ext ([@sammacbeth](https://github.com/sammacbeth))
- Remove cosmetic rule breaking condor.de ([@sammacbeth](https://github.com/sammacbeth))
- Remove #cookiebanner - breaking on bamf.de ([@sammacbeth](https://github.com/sammacbeth))
- 0.5.0 ([@sammacbeth](https://github.com/sammacbeth))
- Extra bracket ([@sammacbeth](https://github.com/sammacbeth))
- Remove rule that breaks www.nomanssky.com ([@sammacbeth](https://github.com/sammacbeth))
- Remove rule that breaks www.huk.de ([@sammacbeth](https://github.com/sammacbeth))
- Remove rule breaking congstar.de ([@sammacbeth](https://github.com/sammacbeth))
- Remove problematic cosmetic rule ([@sammacbeth](https://github.com/sammacbeth))
- 0.4.0 ([@sammacbeth](https://github.com/sammacbeth))
- Export web module as cjs ([@sammacbeth](https://github.com/sammacbeth))
- Add rule exception for tommy.de ([@sammacbeth](https://github.com/sammacbeth))
- 0.3.3 ([@sammacbeth](https://github.com/sammacbeth))
- Fix rule is undefined error. ([@sammacbeth](https://github.com/sammacbeth))
- 0.3.2 ([@sammacbeth](https://github.com/sammacbeth))
- More new cosmetics ([@sammacbeth](https://github.com/sammacbeth))
- Add another future site. ([@sammacbeth](https://github.com/sammacbeth))
- New cosmetics rules for sites in issue #6 ([@sammacbeth](https://github.com/sammacbeth))
- Add Drupal CMP ([@sammacbeth](https://github.com/sammacbeth))
- Add InternetBrands CMP ([@sammacbeth](https://github.com/sammacbeth))
- Add Cevent ([@sammacbeth](https://github.com/sammacbeth))
- Improve Sourcepoint reliability. ([@sammacbeth](https://github.com/sammacbeth))
- Add Clarip CMP ([@sammacbeth](https://github.com/sammacbeth))
- Fix case where non-Cookiebot providers use the CookieConsent global ([@sammacbeth](https://github.com/sammacbeth))
- Add Sourcepoint CMP ([@sammacbeth](https://github.com/sammacbeth))
- Add .gdprPopup cosmetic rule. Fixes #3. ([@sammacbeth](https://github.com/sammacbeth))
- Add cookies-overlay rule. Fixes #4 ([@sammacbeth](https://github.com/sammacbeth))
- Hotfix medium scroll-lock ([@sammacbeth](https://github.com/sammacbeth))
- Remove chip and focus specific cosmetics ([@sammacbeth](https://github.com/sammacbeth))
- Disable cmsCookieNotification ([@sammacbeth](https://github.com/sammacbeth))
- 0.3.1 ([@sammacbeth](https://github.com/sammacbeth))
- Fix tagcommander CMP not detecting frame. ([@sammacbeth](https://github.com/sammacbeth))
- Update readme.md ([@sammacbeth](https://github.com/sammacbeth))
- Fix the test extension. ([@sammacbeth](https://github.com/sammacbeth))
- Updated cosmetics. ([@sammacbeth](https://github.com/sammacbeth))
- Add Civic CMP. ([@sammacbeth](https://github.com/sammacbeth))
- Implement termly consent banner. ([@sammacbeth](https://github.com/sammacbeth))
- More cosmetic improvements. ([@sammacbeth](https://github.com/sammacbeth))
- Cosmetic fix for bussgeldkatalog.de ([@sammacbeth](https://github.com/sammacbeth))
- 0.3.0 ([@sammacbeth](https://github.com/sammacbeth))
- Defer rule resolution on checkTab function. Use `checked` method to wait ([@sammacbeth](https://github.com/sammacbeth))
- Additional cookie banner cosmetics. ([@sammacbeth](https://github.com/sammacbeth))
- Don't auto-reload test extension ([@sammacbeth](https://github.com/sammacbeth))
- Fix admiral consent. ([@sammacbeth](https://github.com/sammacbeth))
- Testing sidebar improvements. ([@sammacbeth](https://github.com/sammacbeth))
- Fix catch eval errors. ([@sammacbeth](https://github.com/sammacbeth))
- Fix screenshot paths ([@sammacbeth](https://github.com/sammacbeth))
- Catch eval errors. ([@sammacbeth](https://github.com/sammacbeth))
- Remove protocol from screenshot path. ([@sammacbeth](https://github.com/sammacbeth))
- Add job summary output. ([@sammacbeth](https://github.com/sammacbeth))
- Add admiral CMP. ([@sammacbeth](https://github.com/sammacbeth))
- More cosmetics. ([@sammacbeth](https://github.com/sammacbeth))
- Add CMP for entrepreneur.com ([@sammacbeth](https://github.com/sammacbeth))
- Add w18lara cmp ([@sammacbeth](https://github.com/sammacbeth))
- Future cmp. ([@sammacbeth](https://github.com/sammacbeth))
- Add Sirdata CMP. ([@sammacbeth](https://github.com/sammacbeth))
- Tagcommander fixes ([@sammacbeth](https://github.com/sammacbeth))
- Add faktor.io CMP ([@sammacbeth](https://github.com/sammacbeth))
- Improve testing extension with cosmetics. ([@sammacbeth](https://github.com/sammacbeth))
- Add new cosmetic rules ([@sammacbeth](https://github.com/sammacbeth))
- 0.2.0 ([@sammacbeth](https://github.com/sammacbeth))
- npm audit fix ([@sammacbeth](https://github.com/sammacbeth))
- Make content script messaging pluggable ([@sammacbeth](https://github.com/sammacbeth))
- Remove 'frame' message and use webNavigation API instead. ([@sammacbeth](https://github.com/sammacbeth))
- 0.1.0 ([@sammacbeth](https://github.com/sammacbeth))
- Fix the crawler. ([@sammacbeth](https://github.com/sammacbeth))
- Add cosmetic rules in JSON form. ([@sammacbeth](https://github.com/sammacbeth))
- Fix asus opt-out. ([@sammacbeth](https://github.com/sammacbeth))
- 0.0.7 ([@sammacbeth](https://github.com/sammacbeth))
- Remove cosmetics from project ([@sammacbeth](https://github.com/sammacbeth))
- Add Wikia CMP ([@sammacbeth](https://github.com/sammacbeth))
- Fix some issues on tagcommander ([@sammacbeth](https://github.com/sammacbeth))
- Add sidebar to test extension ([@sammacbeth](https://github.com/sammacbeth))
- 0.0.6 ([@sammacbeth](https://github.com/sammacbeth))
- Make webextension listener sync ([@sammacbeth](https://github.com/sammacbeth))
- 0.0.5 ([@sammacbeth](https://github.com/sammacbeth))
- Cleaning. ([@sammacbeth](https://github.com/sammacbeth))
- Revert to cosmetic opt-out for trustarc. ([@sammacbeth](https://github.com/sammacbeth))
- 0.0.4 ([@sammacbeth](https://github.com/sammacbeth))
- Avoid preinstall hook ([@sammacbeth](https://github.com/sammacbeth))
- Bump version. ([@sammacbeth](https://github.com/sammacbeth))
- Test extension for testing and debugging autoconsent rules. ([@sammacbeth](https://github.com/sammacbeth))
- 0.0.2 ([@sammacbeth](https://github.com/sammacbeth))
- Add license and readme. ([@sammacbeth](https://github.com/sammacbeth))
- Mark sites where popup was not detected. ([@sammacbeth](https://github.com/sammacbeth))
- Make app gdpr popup detection less aggressive. ([@sammacbeth](https://github.com/sammacbeth))
- Also check if popup is detected during crawl. ([@sammacbeth](https://github.com/sammacbeth))
- Further coverage improvements. ([@sammacbeth](https://github.com/sammacbeth))
- Fix techradar opt-out. ([@sammacbeth](https://github.com/sammacbeth))
- Split dynamic and static cosmetics. ([@sammacbeth](https://github.com/sammacbeth))
- Move tabs implementations into module. ([@sammacbeth](https://github.com/sammacbeth))
- Add recommended rules to report. ([@sammacbeth](https://github.com/sammacbeth))
- Make sandboxing toggleable. ([@sammacbeth](https://github.com/sammacbeth))
- WIP dockerized puppeteer. ([@sammacbeth](https://github.com/sammacbeth))
- Add auto crawl deployment ([@sammacbeth](https://github.com/sammacbeth))
- Fix errors with missing elements. ([@sammacbeth](https://github.com/sammacbeth))
- Support frame creation after first load. ([@sammacbeth](https://github.com/sammacbeth))
- Crawler html report. ([@sammacbeth](https://github.com/sammacbeth))
- Implement tab.goto ([@sammacbeth](https://github.com/sammacbeth))
- More fixes. ([@sammacbeth](https://github.com/sammacbeth))
- Didomi fix. ([@sammacbeth](https://github.com/sammacbeth))
- app_gdpr fixes and new entries. ([@sammacbeth](https://github.com/sammacbeth))
- Crawling with opt-out test. ([@sammacbeth](https://github.com/sammacbeth))
- Initial commit: autoconsent rules from re:consent plus crawler implementation. ([@sammacbeth](https://github.com/sammacbeth))

#### 🔩 Dependency Updates

- Bump terser from 5.13.1 to 5.15.1 [#34](https://github.com/duckduckgo/autoconsent/pull/34) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 7

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Amanda RASOLOFOTSARA ([@icodebyamanda](https://github.com/icodebyamanda))
- Andreas Dewes ([@adewes](https://github.com/adewes))
- euw-arasolofotsara1 (arasolofotsara@duckduckgo.com)
- Jason ([@jdorweiler](https://github.com/jdorweiler))
- Maxim Tsoy ([@muodov](https://github.com/muodov))
- Sam Macbeth ([@sammacbeth](https://github.com/sammacbeth))
