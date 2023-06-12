# Architecture Decision Record: Testing Library + CI 

## Context and Problem Statement

- How are we going to set up CI/CD for our project
- What testing libraries are we going to use
- Any Code linting?
- Any branch protection

## Considered Options: Testing

* Jest
* Chai/Mocha
* Puppeteer

## Considered Options: CI/CD (UPDATE: 05/21)

* Deployment with actions
* Code climate for code linting
* JSDocs for documentation

## Current Decision Outcome: Choosing Jest for Testing (05/06)

- Choosing Jest for function testing
- Open to seeing Puppeteer in the future
	- Started researching for e2e testing (05/25)

## Current Decision Outcome: CI/CD Pipeline (05/20)

- Pipeline design (unordered)
	- Have action for deployment
	- Have action for code linting
	- Deploy docs
- Main branch protection

### Reasoning: Testing

- Based on research of the testinmg libraries Jest seemed to be the easiest to set up
- Akshay recommended during a meeting
- Puppeteer seems to have steep learning curve and unnecessary at this stage
- Couldn't see much on how Chai/Mocha were different than Jest

### Reasoning: CI/CD (UPDATE 05/21 + 05/25)

- Want way to deploy multiple branches at once
	- Looking into the multibranch deployment
	- Completed this
- Code linting important because prevents bad code from getting into the repo
	- Looking at using Code Climate
	- Code climate doesn't prevent code from getting into repo need more
- Use github super linter
	- WIP
- Documentation deployment important

## Discussion Notes:

* Popular testing libraries are: Jest + puppeteer
* Jest is for function testing
* Puppeteer used for UI testing
* Code linting on push for CI/CD, research more on this
	- More research: (05/21 + 05/25)
		- Looking into Code climate
		- Code climate doesn't prevent pushing
		- Looking at github super linter
* Main branch protection

