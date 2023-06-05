# CI/CD Pipeline Phase 1

## What is currently functional
- Homepage 
- Settings Page Button
- Today's horoscope text box pop-up

## What is Planned/In Progress
- Learn more page
- Check your compatability 
- "Your horoscope is..." feature


## CI/CD Pipeline Diagram
![CICD Pipeline Diagram](phase1.png)
<!---  Use phase1.png, phase1.drawio.png doesn't have some icons show up for some reason, and if you want to make edits, export as .drawio file and import into https://app.diagrams.net/ -->

## Linting and Code Style Enforcement
We are using VSCode as our linter. It will analyze our source code for us and flag programming errors, stylistic errors, bugs, inconsistencies, and other problems in general. 

## code quality via tool
We are using **CodeClimate** to enforce code quality. Maintainability([see config here](https://github.com/cse110-sp23-group14/cse110-sp23-group14/blob/fortune-telling-dev/.codeclimate.yml)) is an estimate of technical debt in the repo based on a standardized 10-point assessment of Duplication, Cyclomatic Complexity, Cognitive Complexity, and structural issues. We currently deploy Mantainability checks that rates according to:
- Argument count
- Complex logic
- File length
- identical blocks of code
- Method count, length, and complexity
- Nested control flow
- Return statements
- Similar block of code

## Code Quality Via Human Review
We are also checking code quality manually. For example, PULL REQUESTS. 

## Unit Tests Via Automation
We are using Jest to write our unit tests. It is important to write unit tests to make sure our code works as expected. We need to make sure there are no bugs, edge cases, or other bad things that the user could encounter. 

## Documentation Generation Via Automation
We are using JSDocs to automatically generate documentation for all `.js` file in `sources` and save the documentation to a new branch called `documentation`. It's important to keep documentation for our code because it increases readability and extensibility, and automating this process can save a lot of time.


