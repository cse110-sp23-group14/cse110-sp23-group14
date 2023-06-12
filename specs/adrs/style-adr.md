# Decision Outcome: Chosen Style for our code

## UPDATED: 5/25/23

## Context and Problem Statement

Need a good way to style our code.
Big questions
- What comments
- Tabs vs spaces
- camel case vs snake case
- naming conventions
	- file
	- variables
- commit messages

## Considered Options

* Comments
	- JSDoc above all functions
		- Include types of inputs
	- Comments in functions give 1 line description for complex logic
* Tabs vs spaces
	- Tabs
* Camel Case vs Snake Case
	- Camel case for now
	- global constants all caps with underscores
* naming conventions
	- intuitive naming
	- for both variables + files
	- Will not do Hungarian notation
	- File names use hyphens
* commit messages
	- Descriptive commit messages
	- Say what you changed
	- add concerns if any/ problems

## Decision Outcome

* Comments
	- JSDoc above all functions
		- Include types of inputs
	- Comments in functions give 1 line description for complex logic
* Tabs vs spaces
	- Tabs
* Camel Case vs Snake Case
	- ~~Camel case for now~~ Switched to BME convention (hyphen separated strings) for HTML and CSS, while retaining camel case for JavaScript
	- global constants all caps with underscores
* naming conventions
	- intuitive naming
	- for both variables + files
	- Will not do Hungarian notation
	- File names use hyphens
* commit messages
	- Descriptive commit messages
	- Say what you changed
	- add concerns if any/ problems

* Code Conventions
	- Do not use var, utilize const and let where appropriate.
