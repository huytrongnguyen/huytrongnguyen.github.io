# DDD and Onion Architecture

In order to create good software, you have to know what that software is all about. You cannot create a banking software system unless you have a good understanding of what banking is all about, one must understand the domain of banking.

## What is Domain-Driven Design

> Domain-driven design (DDD) is an approach to developing software for complex needs by deeply connecting the implementation to an evolving model of the core business concepts.
>
>  Its premise is:
>
>   * Place the project’s primary focus on the core domain and domain logic
>   * Base complex designs on a model
>   * Initiate a creative collaboration between technical and domain experts to iteratively cut ever closer to the conceptual heart of the problem.
>
> The premise is simple, but pulling it off in the messy real world is hard. It calls for new skills and discipline, and a systematic approach.
>
> Domain-driven design is not a technology or a methodology. DDD provides a structure of practices and terminology for making design decisions that focus and accelerate software projects dealing with complicated domains.

As the definition implies, DDD is suitable for you if you’re building a software that has complexity on its business process (business domain). So, not every software is suitable for DDD (e.g.: CRUD application doesn’t suitable for it since it’s not quite complex).

## DDD Concepts

Usually data model is the first thing that an architect/developer would start to design. They always consider that data is the most important thing because data is all what we need to report. If you start with DDD, you must change this mindset. Data on its own is meaningless. **Only logic gives data a meaning !!!, and the same data can have different meaning in different contexts**. Therefore, we must start with **context** and **logic** instead of data.

![Concept](https://dotnetcodr.files.wordpress.com/2015/07/ddd-diagram-example.png)

  * **Entity**
    * An object that is not defined by its attributes, but rather by a thread of continuity and its *identity*.
  * **Value Object**
    * An object that contains attributes but has no conceptual identity. They should be treated as *immutable*.
  * **Aggregate**
    * A collection of objects that are bound together by a root entity, otherwise known as an aggregate root. The aggregate root guarantees the consistency of changes being made within the aggregate by forbidding external objects from holding references to its members.
  * **Domain Event**
    * A domain object that defines an event (something that happens). A domain event is an event that domain experts care about.
  * **Service**
    * When an operation does not conceptually belong to any object. Following the natural contours of the problem, you can implement these operations in services.
  * **Repository**
    * Methods for retrieving domain objects should delegate to a specialized Repository object such that alternative storage implementations may be easily interchanged.
  * **Factory**
    * Methods for creating domain objects should delegate to a specialized Factory object such that alternative implementations may be easily interchanged.

We should never use concepts like save, update, delete, handle, manage, etc. Those concepts are too technical or abstract concepts with no specific meaning. Instead, we must stay focus with the business concepts. Those aforementioned concepts (i.e. save, update, etc) are not related to business concepts. So, always think from the business/domain expert perspective, and give a clear context on it. Avoid generic term that can lead to different meaning in different context (i.e. use specific context).

With DDD, do not ever think about DB transactions, instead always think about the real world process such as what the possible actions (behaviors), and their possible outcome or about how to compensate the actions if some failures occurred.

## Onion Architecture

You don’t have to use Onion Architecture though you implement DDD. And you don’t forced to use DDD as well in order to apply Onion Architecture. Both are independent each other. Therefore, you are free to use other than Onion Architecture for DDD (even traditional architecture such as MVC still fit in DDD). However, Onion Architecture is a strong candidate and suited for DDD.

![Enterprise Software Architecture](https://image.slidesharecdn.com/architecturepatternsv01-160730114008/95/enterprise-software-architecture-styles-5-638.jpg?cb=1499484905)

The main goal of Onion is how it controls the coupling (meanwhile it could be easier to deploy the new framework with less changes in the other layers):

  * The "Infrastructure" layer will know about the "Application Services", "Domain Services", and "Domain Model".
  * The "Application Services" will know about the "Domain Services" and "Domain Model".
  * The "Domain Services" only know about the "Domain Model".
  * The "Domain Model" only know about itself.
  * The inner layer will not and should not know about the outer layer.
  * "Application Core" will glue all the layers like "Domain Model", "Domain Services", and "Application Services".
  * The outer layer (i.e. "Infrastructure" layer) is reserved for things that frequently changed. These things should be isolated from the "Application Core". UI, Automation Test, DatabaseAccess, NetworkAccess, FileAccess belongs to this "Infrastructure" layer.


## References
  * [http://dddcommunity.org](http://dddcommunity.org)
  * [Wikipedia - Domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design)
  * [DDD Part I - Introduction](https://medium.com/@yauritux/ddd-part-i-introduction-cabab1d2e27d)
  * [DDD Part II - DDD Building Blocks](https://medium.com/@yauritux/ddd-part-ii-b0735ba584ca)
  * [DDD Part III - DDD and Onion Architecture](https://medium.com/@yauritux/ddd-part-iii-a4ef18ef9e03)
  * [](https://www.slideshare.net/arafkarsh/software-architecture-styles-64537120)