import { ClosetImg } from '../assets/images'

const howItWorks = [
  {
    id: 1,
    heading: 'Seller lists an item for sell',
    text: `Click  on
    “Sell” and add up to 4 photos, then give a description& set your price`,
  },
  {
    id: 2,
    heading: 'Buyer buys an item ',
    text: `The buyer finds an item they love, picks a delivery method and safely completes the  purchase `,
  },
  {
    id: 3,
    heading: 'iGee Closet holds payment securely',
    text: `The money is transferred to iGee Closet’s  account and safely held until the item reaches the buyer  `,
  },
  {
    id: 4,
    heading: 'Seller ships item',
    text: `The seller ships the item to the buyer, using our logistics
    partner`,
  },
  {
    id: 5,
    heading: 'Buyer receives item',
    text: `Once the item reaches the buyer  they will click “Item received“`,
  },
  {
    id: 6,
    heading: 'Seller recieves payment',
    text: `Click  on  “Sell” and add up to 4 photos, then give a description& set your price`,
  },
]
const closetCard = [
  {
    id: 1,
    coverImg: <img src={ClosetImg} alt='' />,
    name: "Maryann's Closet",
    social: '@Maryann',
    itemSize: '16 items listed',
    profileImg: <img src={ClosetImg} alt='' />,
  },
  {
    id: 2,
    coverImg: <img src={ClosetImg} alt='' />,
    name: "Maryann's Closet",
    social: '@Maryann',
    itemSize: '16 items listed',
    profileImg: <img src={ClosetImg} alt='' />,
  },
]

const faqData = [
  {
    question: 'What is iGee Closet?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'How can I sell my pre-loved items?',
    answer: 'You can install React using npm by running: npm install react.',
  },
  {
    question: 'How does iGee Closet provide Safety?',
    answer: 'You can install React using npm by running: npm install react.',
  },
  {
    question: 'What does it cost?',
    answer: 'You can install React using npm by running: npm install react.',
  },
  {
    question: 'How does delivery work',
    answer: 'You can install React using npm by running: npm install react.',
  },
  // Add more FAQ items as needed
]

export { howItWorks, closetCard, faqData }
