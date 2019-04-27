# Study: Local and Remote e2e Codecept Testing

> :microscope: Studying how one could use [Codecept](https://codecept.io/) to run e2e tests thought Headless browsers like WebdriverIO

<p align=center>
<img alt="controller testing" width=777 src=https://i.makeagif.com/media/11-24-2016/aamCBF.gif>
</p>

<br>
<br>

<br>
<br>

---

<br>

[![Build Status][travis-image]][travis-url]
[![Browserstack Test Status][browserstack-master-branch-status-image]][browserstack-master-branch-url]


<br>

---

<br>

[![Browserstack - Master Branch][browserstack-master-branch-matrix-image]][browserstack-master-branch-url]

Provided by :

<p align=center>
  <a href="https://www.browserstack.com" title="BrowserStack">
  <picture>
    <source srcset="./.github/Browserstack-logo.svg" type="image/svg+xml">
    <img src="./.github/Browserstack-logo@2x.png" alt="Browserstack">
  </picture>
  </a>
</p>

<br>

---

<br>



## Install

```sh
$ yarn

# Install the puppetteer runner.
$ yarn run -- lerna exec --scope=@runner/puppetteer -- yarn --frozen-lockfile
```

## Launch all tests

```sh
$ yarn test

# Run only the tests using puppetteer
$ yarn lerna run --scope=@runner/puppetteer test
```


## License

<p align=center>
<a href="./LICENSE"><img alt="licence logo" width=300 src=./.github/WTFPL_logo.svg></a>
</p>


[travis-url]: https://travis-ci.com/douglasduteil/study-local-and-remote-e2e-codecept-testing
[travis-image]: https://travis-ci.com/douglasduteil/study-local-and-remote-e2e-codecept-testing.svg?branch=master
[browserstack-master-branch-status-image](https://www.browserstack.com/automate/badge.svg?badge_key=<badge_key>)]
[browserstack-master-branch-url](https://www.browserstack.com/automate/public-build/<badge_key>)
