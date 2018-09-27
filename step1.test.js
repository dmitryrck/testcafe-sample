import { Selector } from 'testcafe'

fixture `Thank you page`
  .page `http://devexpress.github.io/testcafe/example`

test("should say thank you, john doe", async t => {
  await t
    .typeText("#developer-name", "John Doe")
    .click("#submit-button")
    .expect(Selector("#article-header").innerText)
    .eql("Thank you, John Doe!");
})
