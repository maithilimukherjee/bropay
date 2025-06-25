# React + Vite
this template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

what bropay does:
for group expenses, it helps each person:
- enter their name
- say how many items they were involved in
- log each item's name, expected cost, and how much they actually paid
- the app automatically checks 👀:
did they overpay?
did they underpay?
or are they settled?

you get a "verdict" after each entry like:
🟢 overpaid by ₹50
🔴 underpaid by ₹30
⚪ no dues
it's not just a bill splitter — it's like a mini audit for each person in the group.
in techy terms:
- dynamically renders input fields per person & per item
- calculates payment diffs per item
- provides itemized verdicts per individual
- clean, responsive UI for both desktop + mobile
- built in React + Vite, deployed via Vercel
so yeah. it’s basically a no-nonsense bill justice tool™ 
