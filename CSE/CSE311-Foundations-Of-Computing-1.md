# Propositional Logic

* Logic:
  * How can we describe ideas precisely?
* Formal Proofs:
  * How can we be positive we're correct?
* Number Theory:
  * How do we keep data secure?
* Relations/Relational Algebra:
  * How do we store information?
* Finite State Machines:
  * How do we design hardware and software?
* Turing Machines:
  * Are there problems computers can't solve?

## Why learn a new language?

* Natural languages can be imprecise
* Programming languages can be verbose
* We need a language of reasoning to
  * state sentences more precisely
  * state sentences more concisely
  * understand sentences more quickly
* A proposition is a statement that
  * is either true or false
  * is "well-formed"

## Logical Connectives

* Negation (not)          <code>&#172;p</code>
* Conjunction (and)       <code>p &#8743; q</code>
* Disjunction (or)        <code>p &#8744; q</code>
* Exclusive Or            <code>p &#8853; q</code>
* Implication (q if p)    <code>p &#8594; q</code>
* Biconditional (p iff q) <code>p &#8596; q</code>

"Garfield has black stripes if he is an orange cat and likes lasagna, and he is an orange cat or does not like lasagna"

* p = "Garfield has black stripes"
* q = "Garfield is an orange cat"
* r = "Garfield likes lasagna"

`(p if (q and r)) and (q or (not r))`

* Implication: q if p
* Contrapositive: not p if not q
* An implication and it's contrapositive have the same truth value!

# Boolean Algebra

Another notation for logic consisting of:
* a set of elements B={0,1}
* binary operations { + , • } (OR, AND)
* and a unary operation { ’ } (NOT)