Feature: Go to the Automation Practice site
    As User I want to be check wheter the page is working
    and check if the contact us page is working

    Background:
        Given the browser is at the "home" page

    @smoke
    Scenario Outline: Quick smoke test to confirm page has correctly loaded
        Then I verify page title which should be "<title>"
        And I verify the "<button>" button exist

        Examples:
            | title    | button     |
            | My Store | Contact us |

    @correctFill
    Scenario Outline: Filling the Contact us form correctly
        When I click on the "contact us" button
        And I verify page title which should be "<title>"
        Then I fill "<subject>", "<email>", "<order>" and "message"
        And I click on the "send" button

        Examples:
            | title                 | subject          | email                 | order | message                  |
            | Contact us - My Store | Customer service | example@example.com   | 01    | This is a test           |
            | Contact us - My Store | Customer service | enroute@enroute.com   | 02    | Enrouters are killing it |
            | Contact us - My Store | Webmaster        | cucumber@cucumber.com | 03    | Automating must be fun   |

    @incorrectFill
    Scenario Outline: Filling the Contact us form incorrectly
        When I click on the "contact us" button
        And I verify page title which should be "<title>"
        Then I fill "<subject>", "<email>", "<order>" and "<message>"
        And I click on the "send" button
        And I verify if the error message "<error>" is what I expected

        Examples:
            | title                 | subject          | email               | order | message        | error                        |
            | Contact us - My Store | Customer service | null                | 01    | This is a test | Invalid email address.       |
            | Contact us - My Store | Customer service | enroute@enroute.com | 02    |                | The message cannot be blank. |
            | Contact us - My Store | Webmaster        | null                | null  | null           | Invalid email address.       |