import { Selector } from 'testcafe'

fixture `List`
  .page `https://dry-ocean-41976.herokuapp.com/`

test("should be able to create a new list", async t => {
  await t
    .typeText("#list_name", "List1")
    .click("button")
    .expect(Selector("h1.mt-5").innerText)
    .eql("List: List1");
})
