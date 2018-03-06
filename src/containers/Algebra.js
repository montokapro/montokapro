
import React from 'react';
import styled from 'styled-components';
import Body from '../algebra/Body';

const comment = 'Algebras are recognizable to most programmers only as what they were taught in grade school. By using the very same properties, we can create structures we know and love, as well as discover a few more. Each of these charts defines a concept, and then iterates on that concept starting with Haskell and ending with algebraic encodings.'

const algebra = {
  header: [
    {
      name: 'Algebra',
      comment: 'An algebra contains elements and constructors. We can use algebras (specifically initial F-algebras) to formulate finite data structures.'
    },
    {
      name: 'Coalgebra',
      comment: 'A coalgebra contains elements and destructors. We can use coalgebras (specifically terminal F-coalgebras) to formulate infinite data structures.'
    }
  ],
  more: 'Specifically, we are defining F-algebras and F-coalgebras here. We will be analyzing initial F-algebras and terminal F-coalgebras.',
  references: [
    {
      name: 'Mike Gordon: Coinduction - Algebras and coalgebras',
      link: 'http://www.cl.cam.ac.uk/archive/mjcg/plans/Coinduction.html#algebras-and-coalgebras'
    },
    {
      name: 'Wikipedia: F-algebra',
      link: 'https://en.wikipedia.org/wiki/F-algebra'
    },
    {
      name: 'Gabriel Gonzalez: Morte Tutorial - Simple Types',
      link: 'https://hackage.haskell.org/package/morte-1.6.15/docs/Morte-Tutorial.html#g:4'
    }
  ],
  rows: [
    {
      comment: 'Our data structures will resemble the following forms. We will be substituting "F a" with a variety of terms.',
      data: [
        {
          name: 'F a → a',
          comment: '\'F\' is a functor. \'→\' maps a functor applied to an object to another object.'
        },
        {
          name: 'a → F a',
          comment: '\'F\' is a functor. \'→\' maps an object to a functor applied to another object.'
        }
      ]
    },
    // {
    //   data: [
    //     {
    //       name: '∀(a : *) → (F a → a) → a',
    //       comment: 'This is how F-algebras are defined in the calculus of constructions.'
    //     }
    //   ]
    // }
  ]
}

const natural = {
  header: [
    {
      name: 'Natural',
      comment: 'A natural number is defined as any number greater than or equal to zero. We can define natural numbers using peano arithmetic: a natural number is either zero or a successor to another natural number.'
    },
    {
      name: 'Conatural',
      comment: 'A conatural number is defined as any number less or equal to infinity. We can define natural numbers using the dual of peano arithmetic: a conatural number is either infinity or a predecessor to another conatural number.'
    }
  ],
  more: 'The common definitions of naturals and conaturals exclude zero and infinity. We will consider these differences akin to zero vs one indexing.',
  references: [
    {
      name: 'Mike Gordon: Coinduction - Numbers and conumbers',
      link: 'http://www.cl.cam.ac.uk/archive/mjcg/plans/Coinduction.html#numbers-and-conumbers'
    },
    {
      name: 'Gabriel Gonzalez: Morte Tutorial - Recursion',
      link: 'https://hackage.haskell.org/package/morte-1.6.15/docs/Morte-Tutorial.html#g:6'
    }
  ],
  todo: 'Should we rewrite descriptions to use one and \'co-one\' instead?',
  rows: [
    {
      comment: 'We can declare a functor that represents our structure. The difference between NatF and ConatF is purely nominal.',
      data: [
        {
          name: 'NatF a → a',
          comment: 'We can define naturals in Haskell by declaring "data NatF a = ZeroF | SuccF a".',
        },
        {
          name: 'a → ConatF a',
          comment: 'We can define conaturals in Haskell by declaring "data ConatF a = ZeroF | PredF a".',
        }
      ]
    },
    {
      comment: 'Using the Maybe monad is equivalent to using NatF or ConatF. Maybe is defined as "data Maybe a = Nothing | Just a".',
      data: [
        {
          name: 'Maybe a → a',
          comment: 'Natural numbers are defined as the least fixed point applied to Maybe.',
        },
        {
          name: 'a → Maybe a',
          comment: 'Conatural numbers are defined as the greatest fixed point applied to Maybe.',
        }
      ]
    },
    {
      comment: 'We can express our numbers more succinctly using algebraic notation. Here, the plus represents \'or\' and the sum type. 1 represents the unit type, of which there is only one possibility.',
      data: [
        {
          name: 'a + 1 → a',
          comment: 'Here we can clearly see that from a natural or zero we can generate another natural. \'1\' represents the concept of zero here.',
        },
        {
          name: 'a → a + 1',
          comment: 'Here we can clearly see that from a conatural we can extract another conatural or infinity. \'1\' represents the concept of infinity here.',
        }
      ]
    },
    {
      comment: 'We can distribute implication to formulate another representation. Here, \'×\' represents \'and\' and the product type.',
      data: [
        {
          name: '(a → a) × (1 → a)',
          comment: 'We can create the structure for a natural by suppling two functions: a function to create a number from a number, and a constructor that supplies zero.',
        },
        {
          name: '(a → a) × (a → 1)',
          comment: 'We can create the structure for a conatural by suppling two functions: a function to create a number from a number, and a destructor that consumes infinity.',
        }
      ]
    },
    {
      comment: 'We can use currying to transform products into implication. This is how dependency injection and higher order functions are used.',
      data: [
        {
          name: '(a → a) → (1 → a)',
          comment: 'Most languages will not define naturals in this form, but they may define other structures using similar techniques.'
        },
        {
          name: '(a → a) → (a → 1)',
          comment: 'Most languages will not define conaturals in this form, but they may define other structures using similar techniques.'
        }
      ]
    },
    {
      comment: 'Instead of passing a constructor or destructor, we can pass the zero number itself. This assumption must be baked into our interpreter. The same syntax can have two different meanings, depending on which interpreter is used.',
      data: [
        {
          name: '(a → a) → a',
          comment: 'This is how naturals are defined in the calculus of constructions. Here we assume that a supplier of a value is equivalent to the value itself.',
        },
        {
          name: '(a → a) → a',
          comment: 'This is how conaturals are defined in the dual to calculus of constructions. Here we assume that a consumer of a covalue is equivalent to the covalue itself.',
        }
      ]
    }
    // {
    //   data: [
    //     {
    //       name: '∀(a : *) → ∀(Succ : a → a) → ∀(Zero : a) → a',
    //       comment: 'This is how naturals are defined in the calculus of constructions.',
    //     }
    //   ]
    // }   
  ]
};

const list = {
  header: [
    {
      name: 'List',
      comment: 'A list can be thought of as cells indexed by naturals, where each cell can hold a value. List start as empty, and can have elements added.'
    },
    {
      name: 'Stream',
      comment: 'A stream can be thought of as cells indexed by conaturals, where each cell can hold a value. Streams can have elements removed until they are empty.'
    }
  ],
  references: [
    {
      name: 'Gabriel Gonzalez: Morte Tutorial - Recursion',
      link: 'https://hackage.haskell.org/package/morte-1.6.15/docs/Morte-Tutorial.html#g:6'
    }
  ],
  rows: [
    {
      comment: 'We can define lists in the same manner as the lisp language. A list is either the empty list or a cons cell with a value and a pointer to another list. To distinguish betweens lists and streams, we will use the terms \'push\' and \'pop\' for lists and streams respectively',
      data: [
        {
          name: 'ListF a b → b',
          comment: 'We can define lists in Haskell by declaring "data ListF a b = NilF | PushF a b".'
        },
        {
          name: 'b → StreamF a b',
          comment: 'We can define streams in Haskell by declaring "data StreamF a b = NilF | PopF a b".'
        }
      ]
    },
    {
      comment: 'Using the Maybe functor is equivalent to using ListF and StreamF, when using a product type that represents the index and the value in a cell.',
      data: [
        {
          name: 'Maybe (a × b) → b',
        },
        {
          name: 'b → Maybe (a × b)',
        }
      ],
    },
    {
      comment: 'We can fully express lists using algebraic structures. Here, the times represents the product type, the plus represents the sum type, and 1 represents the unit type.',
      data: [
        {
          name: '(a × b) + 1 → b',
        },
        {
          name: 'b → (a × b) + 1',
        }
      ]
    },
    {
      comment: 'After distributing the implication, we see two functions. For fold, we see a binary function and a supplier. For unfold, we see a consumer and step function.',
      data: [
        {
          name: '(a × b → b) × (1 → b)',
        },
        {
          name: '(b → a × b) × (b → 1)',
        }
      ]
    },
    {
      comment: 'We can apply currying again.',
      data: [
        {
          name: '((a → b) → b) → (1 → b)',
        },
        {
          name: '(b → (a → b)) → (b → 1)',
        }
      ]
    },
    {
      comment: 'Instead of passing a constructor or destructor, we can pass empty itself. This assumption must be baked into our interpreter. The same syntax can have two different meanings, depending on which interpreter is used.',
      data: [
        {
          name: '((a → b) → b) → b',
          comment: 'This is how lists are defined in the calculus of constructions.',
        },
        {
          name: '(b → (a → b)) → b',
          comment: 'This is how streams are defined in the dual to calculus of constructions.',
        }
      ]
    }
    // {
    //   data: [
    //     {
    //       name: 'λ(a : *) → ∀(B : *) → (∀Cons : ∀(head : a) → ∀(tail : B) → B) → ∀(Nil : B) → B',
    //       comment: 'This is how lists are defined in the calculus of constructions.',
    //     }
    //   ]
    // }
  ]
};

const tree = {
  header: 'Trees',
  comment: 'TODO: Several kinds of trees exist. This tree is specifically a binary tree, where only the leaves contain values. We can fold over a tree to reduce it to a value, or unfold from a seed value to create an infinite tree.',
  rows: [
    {
      comment: 'A binary tree is either a leaf with a value or a node that points to two trees. We will denote this by saying "data ListF a b = LeafF a | BranchF b b"',
      data: [
        {
          name: 'TreeF a b → b',
        },
        {
          name: 'TreeF a b → b',
        }
      ]
    },
    {
      comment: 'We can use a product type to represent branches, and use the Either monad.',
      data: [
        {
          name: 'Either a (b × b) → b',
        },
        {
          name: 'b → Either a (b × b)',
        }
      ]
    },
    {
      comment: 'We can express binary trees entirely through algebraic data types.',
      data: [
        {
          name: '(b × b) + a → b',
        },
        {
          name: 'b → (b × b) + a',
        }
      ]
    },
    {
      comment: 'We can distribute implication accross a product.',
      data: [
        {
          name: '(b × b → b) × (a → b)',
        },
        {
          name: '(b → b x b) × (b → a)',
        }
      ]
    },
    {
      comment: 'We can curry away the product type.',
      data: [
        {
          name: '(b → b → b) → (a → b)',
        },
        {
          name: '(b → b → b) → (b → a)',
        }
      ]
    }
  ]
};

const Div = styled.div`
  font-family: 'Inconsolata', monospace;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
`;

const TableHead = styled.thead`
  background-color: #4CAF50;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  // &:hover {
  //   background-color: #f5f5f5;
  // }
`;

const LSpan = styled.span`
  float: left;
  text-align: left;
  white-space: nowrap;
`;

const RSpan = styled.span`
  float: right;
  text-align: right;
  white-space: nowrap;
`;

const CodeSpan = styled.span`
  float: left;
  text-align: left;
  white-space: pre;
`;

const H1 = styled.h1`
  float: center;
  text-align: center;
`;

const H2 = styled.h2`
  float: center;
  text-align: center;
  margin: 0;
  border: 4px solid #4CAF50;

  background-color: #4CAF50;
  color: white;
`;

const H3 = styled.h3`
  float: center;
  text-align: center;
  margin: 0;

  background-color: #4CAF50;
  color: white;
`;

export default () => (
  <Div>
    <p>{comment}</p>

    <Body body={algebra}/>
    <Body body={natural}/>
    <Body body={list}/>
  </Div>
)
