// Daily Deal
// 1. npm install
// 2. node app.js

/**
 * getDailyDeal
 * @param {Object} visitor - a visitor to the store
 * @param {string} visitor.userId - unique identifier for the user
 * @returns {string}
 */
async function getDailyDeal(visitor) {
  return `Daily Deal: A bluetooth speaker for $99!`;
}

/**
 * Simulates visitors to the store
 */
async function main() {

  const visitors = [
    { userId: 'alice',   },
    { userId: 'bob',     },
    { userId: 'charlie', },
    { userId: 'don',     },
    { userId: 'eli',     },
    { userId: 'fabio',   },
    { userId: 'gary',    },
    { userId: 'helen',   },
    { userId: 'ian',     },
    { userId: 'jill',    },
  ];

  console.log('')
  console.log('Welcome to Daily Deal, we have great deals!');
  console.log('Let\'s see what the visitors experience!\n');

  // For each visitor, let's see what deal they get!
  const deals = visitors.map(async (visitor, i) => {
    deal = await getDailyDeal(visitor)
    return deal;
  });

  const experiences = await Promise.all(deals);

  console.log(experiences.map((value, i) => (`Visitor #${i}: ${value}`)).join(`\n`))
  console.log('')

  // Count what experience each visitor got
  const freqMap = experiences.reduce((accum, text) => {
    accum[text] = accum[text] ? accum[text] + 1 : 1;
    return accum;
  }, {});

  let total = visitors.length;

  Object.keys(freqMap).forEach((text) => {
    let perc = Math.round(freqMap[text] / total * 100);
    console.log(`${freqMap[text]} visitors (~${perc}%) got the experience: '${text}'`)
  })
}

main();
