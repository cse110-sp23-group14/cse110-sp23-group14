# Architectural Decision Record: Documentation


## Context and Problem Statement


- We need a good way to document our code. Should we use automatic documentation generation?
	- Want something simple to use
	- not too time consuming
- What does user documentation require, and how would it look?

## Considered Options

* Markdown
* Generating docs 
* User facing docs
	- FAQs
	- About Us
* Google drive
* Project Planning tools like Atlassian Jira
* ADR wiki such as MediaWiki

## Current Decision Outcomes: Chose JSDocs for Documentation (5/25/23)

- JSDocs for code documentation
- FAQ page for user documentation

### Reasoning:

- Originally had chosen just using Markdown files to do documentation, but quickly realized it was annoying to have to both comment code as well as document it. In lecture Powell mentioned that JSDocs give you the ability to turn the code comments into documentation, so we researched how to do that and we pivoted.
- For user docs we are still going to have an FAQ page

### History of Decisions (ordered chronologically):

- Markdown files + FAQs (05/07)
	- Realized we were making more work for ourselves
	- Easier to just document once (using code comments)
	- Using JSDoc didn't look as difficult as before
	- Pivoted
- JSDoc + FAQs (05/20)

## Discussion Notes

### Round 1 Discussion Notes:

We are planning on using Markdown for our documentation, as generating docs looks difficult from preliminary research. 
Other options not on github therefore not really considering since trying to maintain single source of truth.

Pros and cons of Markdown: 
- simple to use
- we all kind of know how to use it
- can put everything on git
- however, is basic compared to other options
- fewer features than other project planning tools

For user docs, we will have FAQs, about us, and troubleshoots. 

### Round 2 Discussion Notes:

- Working with markdown annoying
- Need easier way of doing documentation
