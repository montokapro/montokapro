
import React from 'react';
import styled from 'styled-components';
import FoldUnfoldHeader from '../fold/Header';
import FoldUnfoldBody from '../fold/Body';

const background = 'Folds are recognizable to most programmers as MapReduce. However, the full power of folds and their neglected sibling unfold is likely unharnessed by most programmers. This chart is meant to express dualities and correlations in a succinct manner, though you may drill down in any section by clicking for context.'

const natBody = {
  name: 'Naturals',
  common: [
    '(Nat → a)',
    '(a → Nat)'
  ],
  rows: [
    {
      comment: 'A natural number is defined as any number greater than zero (we will include zero as well). We can define natural numbers using peano arithmetic: a natural number is either zero or a successor to another natural number. We will denote this by saying "data NatF a = ZeroF | SuccF a", where \'F\' refers to \'functor\'.',
      data: [
        '(NatF a → a) →',
        '(a → NatF a) →'
      ]
    },
    {
      comment: 'Using the Maybe monad is equivalent to using NatF. Maybe is defined as "Maybe a = Nothing | Just a"',
      more: 'Natural numbers are defined as the fixed point applied to Maybe',
      data: [
        '(Maybe a → a) →',
        '(a → Maybe a) →'
      ]
    },
    {
      comment: 'We can express natural numbers using algebraic structures. Here, the plus represents \'or\', and 1 represents the unit type, of which there is only one possibility.',
      data: [
        '(a + 1 → a) →',
        '(a → a + 1) →'
      ]
    },
    {
      comment: 'We can distribute implication to divide our algebraic structure into two groups. Thus a natural number is defined as an object that constains two functions: a function from a natural number to a natural number, and a function that creates a natural number from nothing, consuming only time. When unfolding, we have a continuation that consumes zero returns nothing.',
      data: [
        '(a → a) × (1 → a) →',
        '(a → 1) × (a → a) →'
      ]
    },
    {
      comment: 'We can use currying to transform products into implication.',
      data: [
        '(a → a) → (1 → a) →',
        '(a → 1) → (a → a) →'
      ]
    },
    {
      comment: 'Instead of passing a constructor that creates zero, we can pass zero itself. So far, I am unsure if continuations can be simplified in a similar manner.',
      data: [
        '(a → a) → a →',
        ''
      ]
    }    
  ]
};

const listBody = {
  name: 'Lists',
  comment: 'A list is defined similarly to natural numbers. A list can be thought of as cells indexed by the natural numbers, where each cell can hold a value. Often the [ ] notation is used to denote lists. We can fold over a list to reduce it to a value, or unfold from a seed value to create an infinite list.',
  common: [
    '([a] → b)',
    '(b → [a])'
  ],
  rows: [
    {
      comment: 'We can define lists in the same manner as the lisp language. A list is either the empty list or a cons cell with a value and a pointer to another list. We will denote this by saying "data ListF a b = NilF | ConsF a b"',
      data: [
        '(ListF a b → b) →',
        '(b → ListF a b) →'
      ]
    },
    {
      comment: 'Using the Maybe functor is equivalent to using ListF, when using a product type that represents the index and the value in a cell.',        
      data: [
        '(Maybe (a × b) → b) →',
        '(b → Maybe (a × b)) →'
      ],
    },
    {
      comment: 'We can fully express lists using algebraic structures. Here, the times represents the product type, the plus represents the sum type, and 1 represents the unit type.',
      data: [
        '((a × b) + 1 → b) →',
        '(b → (a × b) + 1) →'
      ]
    },
    {
      comment: 'After distributing the implication, we see two functions. For fold, we see a binary function and a supplier. For unfold, we see a consumer and step function',
      data: [
        '(a × b → b) × (1 → b) →',
        '(b → 1) × (b → a × b) →'
      ]
    },
    {
      comment: 'We can apply currying again.',
      data: [
        '(a × b → b) → (1 → b) →',
        '(b → 1) → (b → a × b) →'
      ]
    },
    {
      comment: 'After removing the unit type we get a weaker but common representation of unfold, which takes a binary function, a seed value, and a list, then returns a value. It is unclear to me what removing the unit type implies for unfold.',
      data: [
        '(a × b → b) → b →',
        ''
      ]
    },
    {
      comment: 'We can apply currying one more time.',      
      data: [
        '(a → b → b) → b →',
        ''
      ]
    }
  ]
};

const treeBody = {
  name: 'Trees',
  comment: 'TODO: Several kinds of trees exist. This tree is specifically a binary tree, where only the leaves contain values. We can fold over a tree to reduce it to a value, or unfold from a seed value to create an infinite tree.',
  common: [
    '(T a → b)',
    '(b → T a)'
  ],
  rows: [
    {
      comment: 'A binary tree is either a leaf with a value or a node that points to two trees. We will denote this by saying "data ListF a b = LeafF a | BranchF b b"',
      data: [
        '(TreeF a b → b) →',
        '(b → TreeF a b) →'
      ]
    },
    {
      comment: 'We can use a product type to represent branches, and use the Either monad.',
      data: [
        '(Either a (b × b) → b) →',
        '(b → Either a (b × b)) →'
      ]
    },
    {
      comment: 'We can express binary trees entirely through algebraic data types.',
      data: [
        '((b × b) + a → b) →',
        '(b → (b × b) + a) →'
      ]
    },
    {
      comment: 'We can distribute implication accross a product.',
      data: [
        '(b × b → b) × (a → b) →',
        '(b → b x b) × (b → a) →'
      ]
    },
    {
      comment: 'We can curry away the product type.',
      data: [
        '(b → b → b) → (a → b) →',
        '(b → b → b) → (b → a) →'
      ]
    }
  ]
};

const factorialHylos = [
  {
    fold: `f :: Maybe (Nat, Nat) → Nat
f Just b = a → a * b
f Nothing = a → a`,
    unfold: `g :: Nat → Maybe (Nat, Nat)
g 0 = Nothing
g n = Just (n, n - 1)`
  },
  {
    fold: `f :: ListF Nat Nat → Nat
f ConsF a b : a * b
f NilF : 1`,
    unfold: `g :: Nat → ListF Nat Nat
g 0 : NilF
g n : ConsF n (n - 1)`
  }
];

const parallelFactorialHylos = [
  {
    fold: `f :: Tree Nat (Nat, Nat) → Nat
f Branch a b = a * b
f Leaf a = a`,
    unfold: `g :: (Nat, Nat) → Tree Nat (Nat, Nat)
g (a, b) = case
  (a > b) : Leaf 1
  (a = b) : Leaf a
  (a < b) : Branch (a, avg) (avg + 1, b)
    where avg = (a + b) / 2`
  }
];

const fibonacciHylos = [
  {
    fold: `f :: Tree Nat (Nat, Nat) → Nat
f Branch a b = a + b
f Leaf a = a`,
    unfold: `g :: Nat → Tree Nat (Nat, Nat)
g 0 : Leaf 0
g 1 : Leaf 1
g n : Branch (n - 1) (n - 2)`
  }
];

const fibonacciUnfolds = [
  {
    fold: `TODO: get at index`,
    unfold: `g :: (Nat, Nat) → Maybe (Nat, (Nat, Nat))
g (a, b) = Just (a + b, (b, a + b)))`
  }
];

// const quickSortHylos = [
//   {
//     fold: `g :: Maybe (a, [a], [a]) -> [a]
// inord Just (x, l, r) = l ++ [x] ++ r
// inord Nothing = []`,
//     unfold: `f :: [a] -> Maybe (a, ([a], [a]))
// f [] = Nothing
// f (x : xs) = Just (x, filter (< x) xs, filter (> x) xs)`
//   }
// ];

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
    <FoldUnfoldHeader/>

    <p>{background}</p>

    <FoldUnfoldBody body={natBody}/>
    <FoldUnfoldBody body={listBody}/>
    <FoldUnfoldBody body={treeBody}/>

    <H1>Hylomorphisms</H1>
    <p>hylo f g = fold f . unfold g = unfold g ; fold f</p>

    <H2>factorial :: Nat → Nat</H2>
    <H3>factorial = hylo f g</H3>
    <Table>
      <tbody>
        {factorialHylos.map((pair, index) => (
          <TableRow key={index}>
            <th><CodeSpan>{pair.fold}</CodeSpan></th>
            <th><CodeSpan>{pair.unfold}</CodeSpan></th>
          </TableRow>
        ))}
      </tbody>
    </Table>
    <H3>parallelFactorial n = hylo f g (1, n)</H3>
    <Table>
      <tbody>
        {parallelFactorialHylos.map((pair, index) => (
          <TableRow key={index}>
            <th><CodeSpan>{pair.fold}</CodeSpan></th>
            <th><CodeSpan>{pair.unfold}</CodeSpan></th>
          </TableRow>
        ))}
      </tbody>
    </Table>

    <H2>fibonacci :: Nat → Nat</H2>
    <H3>fibonacci = hylo f g</H3>
    <Table>
      <tbody>
        {fibonacciHylos.map((pair, index) => (
          <TableRow key={index}>
            <th><CodeSpan>{pair.fold}</CodeSpan></th>
            <th><CodeSpan>{pair.unfold}</CodeSpan></th>
          </TableRow>
        ))}
      </tbody>
    </Table>
    <H3>fibonacci = unfold g (0, 1)</H3>
    <Table>
      <tbody>
        {fibonacciUnfolds.map((pair, index) => (
          <TableRow key={index}>
            <th><CodeSpan>{pair.fold}</CodeSpan></th>
            <th><CodeSpan>{pair.unfold}</CodeSpan></th>
          </TableRow>
        ))}
      </tbody>
    </Table>

    <H1>References</H1>
    <p><a>https://en.wikipedia.org/wiki/F-algebra</a></p>
    <p><a>http://conal.net/talks/folds-and-unfolds.pdf</a></p>
    <p><a>https://en.wikipedia.org/wiki/Hylomorphism_(computer_science)</a></p>
    <p><a>https://gist.github.com/yuwki0131/db2dcc08d8b6b086d055182dc32c0300</a></p>
    <p>CHARITABLE THOUGHTS by Robin Cockett</p>
  </Div>
)
