const email = {
    poppy: "swantonpoppycp@gmail.com",
    jms: "jmscaramo@calpoly.edu",
};

const libguide = {
    swanton: "https://guides.lib.calpoly.edu/swanton",
    calpoppy: "https://guides.lib.calpoly.edu/calpoppy",
    poppychatbot: "https://guides.lib.calpoly.edu/poppychatbot",
};

const contactIntro = [
    `Poppy the Swanton Chatbot is part of a larger faculty research program called the `,
    `Cal Poppy Research Project`,
    ` at California Polytechnic State University, San Luis Obispo. Contact the Poppy Project Team at ${email.poppy} or the Cal Poppy Research Project PI, Jeanine M. Scaramozzino at ${email.jms}.`
]

const contactPoppy = [
    `If you have questions, feedback, corrections, etc.  about Poppy please email ${ email.poppy } and a team member will get back to you.`
]

const contactJMS = [
    `Jeanine Scaramozzino is a tenured Librarian (i.e. Professor), at California Polytechnic State University, San Luis Obispo. She currently serves as the Librarian for the College of Science and Mathematics & School of Education. She co-created a Science Café speaker series, created a Data Studio speaker series as well as a STEAM series with a local art museum. Her current research focuses on the sharing of history and research through Artificial Intelligence. Ms. Scaramozzino has served as the Cal Poly Academic and Scholarly Communications (ASC) Coordinator, Institutional Repository Librarian, and Data and GIS Services Librarian. She has previously worked as a Physics, Astronomy and Mathematics Librarian and an adjunct reference and instructional librarian, and at Stanford University. Ms. Scaramozzino has a Bachelors in Biology and graduate degrees in Biology, Information Sciences, and History.`,
    `If you have questions about the Cal Poppy Research Program, started in 2013, please contact the Principle Investigator, Jeanine Scaramozzino,  at ${ email.jms }, or refer to this libguide: `,
];

const creatorIntro = [
    `More than 50 Cal Poly undergraduate and graduate students, representing the College of Engineering (CENG), College of Agriculture, Food & Environmental Science (CAFES), College of Science & Mathematics (CSM), College of Architecture & Environmental Design (CAED), College of Liberal Arts (CLA), Orfalea College of Business (OCOB), and the Computer Science & Artificial Intelligence (CSAI) Club, have contributed to the creation of Poppy the Swanton Chatbot.`
]

const calPoppyResearchTeam = {
    scaramozzino: "Jeanine M. Scaramozzino, Robert E. Kennedy Library, Cal Poly, Principal Investigator (PI) & Lead Cultivator",
    kurfess: "Dr. Franz J. Kurfess, Computer Science Department, Cal Poly, Co-PI & Cultivator",
    hayes: "Dr. Grey F. Hayes, Swanton Pacific Ranch, Cal Poly, Co-PI & Cultivator",
}

const poppy21_22 = {
    advisors: {
        slivovsky: "Dr. Lynne Slivovsky, Computer Engineering Department (CPE)",
        kurfess: "Dr. Franz J. Kurfess, Computer Science Department (CSC)",
    },
    poppy: {
        barruel: `Evangeline “Eva” Mae Pangan Barruel, CPE Capstone & Senior Project`,
        chang: "Norman Chang, CPE Capstone & Senior Project",
        chekhanovsky: "Edik S. Chekhanovsky, CPE Capstone",
        mccoy: "Lolia O. McCoy, CPE Capstone & Senior Project",
        thurman: "Matthew Thurman, CSC Master’s Degree",
        wesolowski: "Melissa J. Wesolowski, CPE Capstone & Senior Project",
    }
}

export {
    email,
    libguide,
    contactIntro,
    contactPoppy,
    contactJMS,
    creatorIntro,
    calPoppyResearchTeam
};