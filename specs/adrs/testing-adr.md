# Testing Library + CI Decision: Jest + Code linting + Main branch protection

## Context and Problem Statement

How are we going to set up CI/CD for our project
What testing libraries are we going to use
Any Code linting?
Any branch protection

## Considered Options

* Jest
* Chai/Mocha
* Puppeteer

## Notes:

* Popular testing libraries are: Jest + puppeteer
* Jest is for function testing
* Puppeteer used for UI testing
* Code linting on push for CI/CD, research more on this
* Main branch protection

## Decision Outcome

Choosing Jest for function testing, open to seeing Puppeteer in the future, will have main branch protection + code linting on push
