<div align="center">
 
 [![Node.js CI status](https://github.com/DevLBD/vaccines-in-world/actions/workflows/node.js.yml/badge.svg)](https://github.com/DevLBD/vaccines-in-world/actions/workflows/node.js.yml)
 [![CodeQL analysis status](https://github.com/DevLBD/vaccines-in-world/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/DevLBD/vaccines-in-world/actions/workflows/codeql-analysis.yml)
 [![Follow @VaccinesInWorld on Twitter](https://img.shields.io/twitter/follow/VaccinesInWorld?style=social)](https://twitter.com/VaccinesInWorld)
 
</div>

# COVID-19 Vaccines in the World
Source code for the Twitter Bot [@VaccinesInWorld](https://twitter.com/VaccinesInWorld).

Once a day, the bot fetches a JSON file provided by [@OWID (Our World In Data)](https://github.com/owid), and uses it to generate a tweet to post containing the percentage of people fully vaccinated in various countries in the world.

## Contributing
Wish to contribute? You're welcome to join, even if you don't know how to code.

Contributing to open source consists in helping, no matter what we can do. For example, even if you don't know how to code, you may be able to write documentation, create graphical assets, and more. For more information, [read here](https://opensource.guide/how-to-contribute/).

### Project Structure
* [`app`](app): Contains the source code;
* [`assets`](assets): Contains other useful assets for the bot (images, etc);

### Community Standards
Please remember to follow our [Code of Conduct](https://github.com/DevLBD/vaccines-in-world/blob/dev/CODE_OF_CONDUCT.md) when interacting with the community. 
Happy coding, and thank you for your contribution!

## Built using
* [Node.js](nodejs.dev)
* [TypeScript](https://www.typescriptlang.org/)
* [Twitter-API-v2](https://github.com/plhery/node-twitter-api-v2)
* [OWID/covid-19-data](https://github.com/owid/covid-19-data)
