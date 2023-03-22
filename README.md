<h1>Package: nrk-api</h1>

[![npm version](https://img.shields.io/npm/v/nrk-api.svg?style=flat-square)](https://www.npmjs.org/package/nrk-api)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=nrk-api&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=nrk-api)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/nrk-api?style=flat-square)](https://bundlephobia.com/package/nrk-api@latest)
[![npm downloads](https://img.shields.io/npm/dm/nrk-api.svg?style=flat-square)](https://npm-stat.com/charts.html?package=nrk-api)
[![Node version](https://img.shields.io/node/v/nrk-api.svg "Node version")](https://www.npmjs.com/package/nrk-api)

<h2>Table of Contents</h2>
<ul>
    <li><a href="#description">Description</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#examples">Examples</a></li>
    <li><a href="#errors">Handling Errors</a></li>
    <li><a href="#api">NRK API</a></li>
    <li><a href="#disclaimer">Disclaimer</a></li>
</ul>

<h2 id="description">Description</h2>
<p>nrk-api is a simple API wrapper for the NRK API. The package uses the official NRK-API to fetch the information. (<a href="https://psapi.nrk.no/documentation/">https://psapi.nrk.no/documentation/</a>)</p>

<h2 id="features">Features</h2>
<ul>
    <li>&#x2611 Make requests to retrieve all pages and categories. (NRK TV)</li>
    <li>&#x2612 Utilities to do special operations with the category data. (NRK TV)</li>
    <li>&#x2611 Make requests to retrieve all program and series information. (NRK TV)</li>
    <li>&#x2612 Make utils to better process the program and series data. (NRK TV)</li>
    <li>&#x2612 Make requests to retrieve all pages and categories. (NRK Super)</li>
    <li>&#x2612 Utilities to do special operations with the category data. (NRK Super)</li>
    <li>&#x2612 Make requests to retrieve all program and series information. (NRK Super)</li>
    <li>&#x2612 Make utils to better process the program and series data. (NRK Super)</li>
    <li>&#x2612 Make requests to retrieve all pages and categories. (NRK Radio)</li>
    <li>&#x2612 Utilities to do special operations with the category data. (NRK Radio)</li>
    <li>&#x2612 Make requests to retrieve all program and series information. (NRK Radio)</li>
    <li>&#x2612 Make utils to better process the program and series data. (NRK Radio)</li>
</ul>

<h2 id="examples">Examples</h2>

<h2 id="errors">Handling Errors</h2>
<ul>
    <li><b>PageNotFoundError</b> - Indicates 404, the page was not found, likely due to faulty parameters.</li>
    <li><b>InvalidProgramIdError</b> - Indicates that the provided id is invalid and does not follow the NRK id-scheme.</li>
    <li><b>RateLimitError</b> - Indicates that the amount of requests have caused a 429 - Too Many Requests.</li>
</ul>

<h2 id="api">NRK API</h2>
<p>This package uses the NRK API to retrieve information, the documentation for the api can be found <a href="https://psapi.nrk.no/documentation/">here</a>.</p>

<h2 id="disclaimer">Disclaimer</h2>
<p>This package is not affiliated with NRK in any way, and is not neither developed or maintained by NRK.</p>
