export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    question: "Who can vote in India?",
    answer: "Every citizen of India who is 18 years of age or older on the qualifying date (1st January of the year) is eligible to vote, unless disqualified by law. This is guaranteed under Article 326 of the Constitution.",
    category: "Basics",
  },
  {
    question: "What is the Election Commission of India (ECI)?",
    answer: "The ECI is an autonomous constitutional authority responsible for administering election processes in India. It conducts elections to Parliament, State Legislatures, and the offices of President and Vice President.",
    category: "Basics",
  },
  {
    question: "What is a Voter ID (EPIC)?",
    answer: "The Elector Photo Identity Card (EPIC), commonly called Voter ID, is issued by the ECI to Indian citizens above 18. It serves as proof of identity and is required for voting. You can also use alternative IDs like passport, driving license, or Aadhaar.",
    category: "Registration",
  },
  {
    question: "How do I register as a new voter?",
    answer: "You can register online through the National Voters Service Portal (NVSP) at voters.eci.gov.in by filling Form 6. Alternatively, visit your nearest Electoral Registration Officer (ERO) office or Booth Level Officer (BLO) with proof of age and address.",
    category: "Registration",
  },
  {
    question: "What is Form 6?",
    answer: "Form 6 is the application form for inclusion of name in the electoral roll. It is used by first-time voters, those who have moved constituencies, or those whose names are not on the roll.",
    category: "Registration",
  },
  {
    question: "Can I vote if I live in a different state from my hometown?",
    answer: "You can only vote in the constituency where you are registered. If you have moved, you need to transfer your voter registration to your new constituency using Form 8B, or register afresh at your new location.",
    category: "Registration",
  },
  {
    question: "What is an EVM?",
    answer: "Electronic Voting Machine (EVM) is used to record votes electronically. It consists of two units: the Control Unit (with the polling officer) and the Balloting Unit (in the voting compartment). EVMs are standalone machines not connected to any network.",
    category: "Voting Process",
  },
  {
    question: "What is VVPAT?",
    answer: "Voter Verifiable Paper Audit Trail (VVPAT) is attached to EVMs. It prints a paper slip showing the symbol of the candidate you voted for, visible for 7 seconds before it drops into a sealed box. This allows voters to verify their vote was recorded correctly.",
    category: "Voting Process",
  },
  {
    question: "What is NOTA?",
    answer: "NOTA (None of the Above) is an option on EVMs that allows voters to reject all candidates. It was introduced by the Supreme Court in 2013. However, even if NOTA gets the most votes, the candidate with the highest votes among the candidates still wins.",
    category: "Voting Process",
  },
  {
    question: "What documents do I need to bring on polling day?",
    answer: "You need any one of the following: Voter ID card (EPIC), passport, driving license, Aadhaar card, PAN card, official ID cards issued by government/PSUs, or bank/post office passbooks with photo. The ECI also accepts digital Voter ID on the Voter Helpline app.",
    category: "Documents",
  },
  {
    question: "What is proxy voting?",
    answer: "Proxy voting allows a registered voter to appoint someone else to vote on their behalf. Currently available only to service voters (armed forces, government employees posted abroad, etc.) and persons with disabilities (PwD). The proxy must be an Indian citizen registered as a voter.",
    category: "Special Cases",
  },
  {
    question: "Can postal ballots be used?",
    answer: "Postal ballots are available for service voters, voters with disabilities (PwD), senior citizens (above 85), voters under preventive detention, and essential service workers. Regular voters cannot use postal ballots.",
    category: "Special Cases",
  },
  {
    question: "What are the different types of elections in India?",
    answer: "India has: Lok Sabha (General) elections every 5 years for the lower house of Parliament, Vidhan Sabha (State Assembly) elections every 5 years for state legislatures, Rajya Sabha elections for the upper house (indirect), Presidential and Vice-Presidential elections (indirect), and Local Body (Panchayat/Municipal) elections.",
    category: "Basics",
  },
  {
    question: "What is the Model Code of Conduct?",
    answer: "The Model Code of Conduct (MCC) is a set of guidelines issued by the ECI for political parties and candidates. It comes into effect immediately when elections are announced and ensures free and fair elections by regulating campaign conduct.",
    category: "Basics",
  },
  {
    question: "What is the symbol reservation system?",
    answer: "Political parties in India are recognized as National, State, or Registered Unrecognized parties. National and State parties get reserved symbols. Unrecognized parties must choose from a pool of free symbols. Independent candidates also choose from free symbols.",
    category: "Basics",
  },
  {
    question: "How do I check if my name is in the voter list?",
    answer: "Visit voters.eci.gov.in or use the Voter Helpline mobile app. You can search by name, EPIC number, or phone number. You can also visit your local ERO office or check with your BLO.",
    category: "Registration",
  },
  {
    question: "What if my voter ID has errors?",
    answer: "Use Form 8 to correct details in the electoral roll (name, photo, address, date of birth, etc.). This can be done online through NVSP or by visiting your ERO office.",
    category: "Registration",
  },
];

export interface TimelinePhase {
  phase: string;
  title: string;
  description: string;
  steps: { step: string; detail: string }[];
}

export const timelineData: TimelinePhase[] = [
  {
    phase: "1",
    title: "Election Notification",
    description: "The ECI announces the election schedule",
    steps: [
      { step: "Schedule Announcement", detail: "ECI announces dates for polling, counting, and the election timeline" },
      { step: "Model Code of Conduct Enforced", detail: "MCC comes into effect immediately, regulating campaign activities" },
      { step: "Candidate Nominations Open", detail: "Political parties and independents can file nomination papers" },
    ],
  },
  {
    phase: "2",
    title: "Nomination & Scrutiny",
    description: "Candidates file and verify their nominations",
    steps: [
      { step: "Filing Nominations", detail: "Candidates submit nomination forms with security deposits" },
      { step: "Scrutiny of Nominations", detail: "Returning Officers verify all nomination papers for compliance" },
      { step: "Withdrawal Period", detail: "Candidates can withdraw their nominations within the specified period" },
      { step: "Final List Released", detail: "Final list of contesting candidates is published" },
    ],
  },
  {
    phase: "3",
    title: "Campaign Period",
    description: "Political campaigns and voter awareness activities",
    steps: [
      { step: "Campaigning", detail: "Parties and candidates campaign through rallies, advertisements, and door-to-door outreach" },
      { step: "Voter Awareness", detail: "ECI runs SVEEP (Systematic Voters Education and Electoral Participation) programs" },
      { step: "Campaign Silence Period", detail: "Campaigning stops 48 hours before polling begins (silence period)" },
    ],
  },
  {
    phase: "4",
    title: "Polling Day",
    description: "Citizens cast their votes at polling stations",
    steps: [
      { step: "Polling Station Setup", detail: "EVMs, VVPAT machines, and polling materials are deployed" },
      { step: "Voter Verification", detail: "Voters show ID, get verified against the electoral roll, and receive ink marking" },
      { step: "Voting", detail: "Voters enter the voting compartment, press the button next to their chosen candidate on the EVM, and verify via VVPAT" },
      { step: "EVM Sealing", detail: "At the end of polling, EVMs are sealed and transported to strong rooms" },
    ],
  },
  {
    phase: "5",
    title: "Counting & Results",
    description: "Votes are counted and results declared",
    steps: [
      { step: "EVM Retrieval", detail: "EVMs are brought from strong rooms to counting centers" },
      { step: "Vote Counting", detail: "EVMs are opened and votes are counted round by round under supervision" },
      { step: "Result Declaration", detail: "Returning Officer declares the winner for each constituency" },
      { step: "Formal Notification", detail: "Elected candidates receive formal notification of their victory" },
    ],
  },
  {
    phase: "6",
    title: "Post-Election",
    description: "Government formation and oath-taking",
    steps: [
      { step: "Government Formation", detail: "The party/coalition with majority forms the government" },
      { step: "Oath of Office", detail: "Winning candidates take oath as members of the House" },
      { step: "Election Petitions", detail: "Disputed results can be challenged in the High Court within 45 days" },
    ],
  },
];

export const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

export const unionTerritories = [
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];
