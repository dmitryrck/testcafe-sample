import { Selector } from 'testcafe'

fixture `List`
  .page `https://dry-ocean-41976.herokuapp.com/`

test("should be able to create a new list", async t => {
  await t
    .typeText("#list_name", "List1")
    .click("button")
    .expect(Selector("h1.mt-5").innerText)
    .eql("List: List1")
})

test("should add a new user", async t => {
  await t
    .typeText("#list_name", "List1")
    .click("button")
    .click(Selector("a.btn-info"))
    .typeText("#name", "John Doe")
    .typeText("#email", "john.doe@example.com")
    .typeText("#password", "secret")
    .click(".btn-primary")
    .expect(Selector("body").innerText)
    .contains("John Doe")
})
