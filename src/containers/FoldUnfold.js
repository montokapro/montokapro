
import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled from 'styled-components'
import FoldUnfoldBody from '../components/FoldUnfoldBody';
//

const natBody = {
  common: [
    '(Nat → a)',
    '(a → Nat)'
  ],
  rows: [
    [
      '(a → a) → a →',
      ''
    ],
    [
      '(a → a) → (1 → a) →',
      '(a → 1) → (a → a) →'
    ], 
    [
      '(a → a) × (1 → a) →',
      '(a → 1) × (a → a) →'
    ],
    [
      '(a + 1 → a) →',
      '(a → a + 1) →'
    ],
    [
      '(Maybe a → a) →',
      '(a → Maybe a) →'
    ],
    [
      '(NatF a → a) →',
      '(a → NatF a) →'
    ]
  ]
};

const listBody = {
  common: [
    '([a] → b)',
    '(b → [a])'
  ],
  rows: [
    [
      '(a → b → b) → b →',
      ''
    ],
    [
      '(a × b → b) → b →',
      ''
    ],
    [
      '(a × b → b) → (1 → b) →',
      '(b → 1) → (b → a × b) →'
    ], 
    [
      '(a × b → b) × (1 → b) →',
      '(b → 1) × (b → a × b) →'
    ],
    [
      '((a × b) + 1 → b) →',
      '(b → (a × b) + 1) →'
    ],
    [
      '(Maybe (a × b) → b) →',
      '(b → Maybe (a × b)) →'
    ],
    [
      '(ListF a b → b) →',
      '(b → ListF a b) →'
    ]
  ]
};

const treeBody = {
  common: [
    '(T a → b)',
    '(b → T a)'
  ],
  rows: [
    [
      '(b → b → b) → (a → b) →',
      '(b → b → b) → (b → a) →'
    ],
    [
      '(b × b → b) × (a → b) →',
      '(b → b x b) × (b → a) →'
    ],
    [
      '((b × b) + a → b) →',
      '(b → (b × b) + a) →'
    ], 
    [
      '(Either a (b × b) → b) →',
      '(b → Either a (b × b)) →'
    ]
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
    <Table>
      <thead>
        <tr>
          <th><H1>Fold</H1></th>
          <th><H1>Unfold</H1></th>
        </tr> 
      </thead>
    </Table>

    <H2>Naturals</H2>
    <Table>
      <FoldUnfoldBody body={natBody}/>
    </Table>

    <H2>Lists</H2>
    <Table>
      <FoldUnfoldBody body={listBody}/>
    </Table>
    
    <H2>Trees</H2>
    <Table>
      <FoldUnfoldBody body={treeBody}/>
    </Table>

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
    <p><a>http://conal.net/talks/folds-and-unfolds.pdf</a></p>
    <p><a>https://en.wikipedia.org/wiki/Hylomorphism_(computer_science)</a></p>
    <p><a>https://gist.github.com/yuwki0131/db2dcc08d8b6b086d055182dc32c0300</a></p>
    <p>CHARITABLE THOUGHTS by Robin Cockett</p>
  </Div>
)
