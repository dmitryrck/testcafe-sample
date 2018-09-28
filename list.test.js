import { Selector } from 'testcafe'

fixture `List`
  .page `https://dry-ocean-41976.herokuapp.com/`
  .before(async ctx => {
    ctx.number = function () {
      return parseInt(Math.random() * 1000)
    }
  })

test("should be able to create a new list", async t => {
  const number = t.fixtureCtx.number()
  await t
    .typeText("#list_name", `List${number}`)
    .click("button")
    .expect(Selector("h1.mt-5").innerText)
    .eql(`List: List${number}`)
})

test("should add a new user", async t => {
  const number = t.fixtureCtx.number()
  await t
    .typeText("#list_name", `List${number}`)
    .click("button")
    .click(Selector("a.btn-info"))
    .typeText("#name", "John Doe")
    .typeText("#email", "john.doe@example.com")
    .typeText("#password", "secret")
    .click(".btn-primary")
    .expect(Selector("body").innerText)
    .contains("John Doe")
})

test("should be able to delete", async t => {
  const number = t.fixtureCtx.number()
  await t
    .typeText("#list_name", `List${number}`)
    .click("button")
    .click(Selector("a.btn-info"))
    .typeText("#name", "John Doe")
    .typeText("#email", "john.doe@example.com")
    .typeText("#password", "secret")
    .click(".btn-primary")
    .click("[title='Delete']")
    .expect(Selector("body").innerText)
    .notContains("John Doe")
})

test("should be able to update", async t => {
  const number = t.fixtureCtx.number()
  await t
    .typeText("#list_name", `List${number}`)
    .click("button")
    .click(Selector("a.btn-info"))
    .typeText("#name", "John Doe")
    .typeText("#email", "john.doe@example.com")
    .typeText("#password", "secret")
    .click(".btn-primary")
    .click("[title='Edit']")
    .typeText("#name", "Alice Doe")
    .typeText("#email", "alice.doe@example.com")
    .typeText("#password", "secret")
    .click(".btn-primary")
    .expect(Selector("body").innerText)
    .contains("Alice Doe")
})

test("should be able to login", async t => {
  const number = t.fixtureCtx.number()
  await t
    .typeText("#list_name", `List${number}`)
    .click("button")
    .click(Selector("a.btn-info"))
    .typeText("#name", "John Doe")
    .typeText("#email", "john.doe@example.com")
    .typeText("#password", "secret")
    .click(".btn-primary")
    .click("[title='Login']")
    .typeText("#email", "john.doe@example.com")
    .typeText("#password", "secret")
    .click(".btn-primary")
    .expect(Selector("body").innerText)
    .contains("Welcome, John Doe")
})

test("should not be able to login", async t => {
  const number = t.fixtureCtx.number()
  await t
    .typeText("#list_name", `List${number}`)
    .click("button")
    .click(Selector("a.btn-info"))
    .typeText("#name", "John Doe")
    .typeText("#email", "john.doe@example.com")
    .typeText("#password", "secret")
    .click(".btn-primary")
    .click("[title='Login']")
    .typeText("#email", "john.doe@example.com")
    .typeText("#password", "secret2")
    .click(".btn-primary")
    .expect(Selector("body").innerText)
    .notContains("Welcome, John Doe")
})
