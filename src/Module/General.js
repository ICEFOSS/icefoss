// Importing all sponsors logos from Assets
import taskade from "./Assets/sponsorsLogos/taskade.png";
import fed from "./Assets/sponsorsLogos/fed.png";
import rezoy from "./Assets/sponsorsLogos/rezoy.png";
import emvigo from "./Assets/sponsorsLogos/emvigo.svg";
import verteil from "./Assets/sponsorsLogos/verteil.svg";
import seq from "./Assets/sponsorsLogos/seq.png";
import digo from "./Assets/sponsorsLogos/do.svg";
import armia from "./Assets/sponsorsLogos/armia.png";
import net from "./Assets/sponsorsLogos/net.png";
import {FFGSVG} from "./ffscLogo";
import ninetyplus from "./Assets/sponsorsLogos/ninetyplus.png"
import xyz from "./Assets/sponsorsLogos/xyz.png"

// import sublime from "./Assets/sponsorsLogos/sublime.png";

//import ll from "./Assets/sponsorsLogos/ll.png";
//import ACF from "./Assets/sponsorsLogos/ACF.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import Siji from "./Assets/teami/siji.jpeg";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";

const TOP_SECTION = {
  TITLE: "ICEFOSS 2022",
  Typed_effect: ["36 hours of creation", "36 Hours of learning"],
  SHORT_DESCRIPTION:
    "ICEFOSS is a Free Software Conference organized by FISAT Free Software Cell (FFSC) aiming all FOSS enthusiasts and others. ICEFOSS 2022, scheduled on May 5th-7th is the 10th edition of this conference.",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK: "",
  HACKERS_REGISTRATION_FORM_LINK: "https://forms.gle/8m47qt8FYhKKSqBN6"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/icefossfisat/",
  discord: "https://discord.com/invite/8XJSzmtWPp",
  linkedin: "https://www.linkedin.com/groups/14077086",

  email: "mailto:icefoss@fisat.ac.in",
  mail: "icefoss@fisat.ac.in"
};

const MIDDLE_SECTION = {
  TITLE: "What is ICEFOSS?",
  LONG_DESCRIPTION:
    "ICEFOSS 2022 is the 10th edition  Free Software Conference organized by FISAT  Free Software Cell (FFSC). ICEFOSS 2022, is scheduled on May 5, 6 , 7 - 2022.  Throughout the weekend at ICEFOSS will have unique opportunities to learn ,develop and grow. We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO_EFFECT: true,
  LOGO: ""
};
const MIDDLE_SECTION_HackFit = {
  TITLE: "What is Hackfit?",
  LONG_DESCRIPTION:
    "ICEFOSS 2022 is the 12th edition  Free Software Conference organized by FISAT  Free Software Cell (FFSC). ICEFOSS 2022, is scheduled on May 5, 6 , 7 - 2022.  Throughout the weekend at ICEFOSS will have unique opportunities to learn ,develop and grow. We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u"
  },
  JOIN_TEAM: {
    required: false,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "overall First",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "overall Second",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Second",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      // icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
      // type: "Best Solo",
      // content:
      //   "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team"
    },
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: " Best Beginner",
      content: "Your project will qualify for this category if atleast 50% "
    },
    {}
  ]
  // [
  //   //Array 3
  //   {
  //     icon: <i class="fas fa-4x sixth fa-male"></i>,
  //     type: "Best Web App with Qoom",
  //     content: "Must use qoom in your project to win this category"
  //   },
  //   {
  //     icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
  //     type: "More prizes",
  //     content: "More prizes will be revealed later"
  //   }
  // ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Lentin Joseph",
      role: "Lentin Joseph",
      linkedin: "https://www.linkedin.com/in/lentinjoseph/",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQF6gSmZJ2S2sQ/profile-displayphoto-shrink_200_200/0/1568814341694?e=1654128000&v=beta&t=VjR7fPEGrOJFKa9_deXKkTqZS2bjLZssyRumQ9aDKf8"
    },
    {
      Name: "Sreehari C P",
      role: "Sreehari C P",
      linkedin:
        "https://www.linkedin.com/in/sreehari-c-p/?originalSubdomain=in",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQFuawb0VGvlJA/profile-displayphoto-shrink_200_200/0/1597140133262?e=1654128000&v=beta&t=hfOzY1hsGl9gmiXm5d_scr71A1mQJ4VHWNTKVxYlYEw"
    },
    {
      Name: "Binoy M.K ",
      role: "Binoy M.K ",
      linkedin: "https://www.linkedin.com/in/binoy-m-k-1747b523/",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQEId1A06Ymybg/profile-displayphoto-shrink_200_200/0/1587966071060?e=1656547200&v=beta&t=HLCZiIq6rlKqQtXCzPlg4wIzSCQ8I2x-ps5luzmuw4A"
    }
  ],
  [
    //Array 1
    {
      Name: "Sujith Sukumaran",
      role: "Sujith Sukumaran",
      linkedin: "https://www.linkedin.com/in/sukumaransujith/",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQFfqpjdELCeJQ/profile-displayphoto-shrink_200_200/0/1584864763325?e=1656547200&v=beta&t=4Xo13Pm61VoorWVD940xfyyJTpnoXPsfmvd9US6zgfM"
    },
    {
      Name: "Siji Sahadevan",
      role: "Siji Sahadevan",
      linkedin: "https://www.linkedin.com/in/siji-sahadevan-a8694826/",
      img: Siji
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside
 */

const sponsorLogos = [
  [
    {src: net, link: "https://netstratum.com/"},
    {src: fed, link: "https://www.federalbank.co.in/career"},
    {src: seq, link: "https://india.sequoiacap.com/"},
    {src: verteil, link: "https://www.verteil.com/"},
    {src: emvigo, link: "https://www.emvigotech.com/"},
    {src: rezoy, link: "https://www.rezoy.app/en/"},
    {src: taskade, link: "https://www.taskade.com/"},
    {src: digo, link: "https://www.digitalocean.com/"},
    {src: armia, link: "https://www.armia.com/careers.php"},
    {src: ninetyplus, link: "https://mytuitionapp.com/"},
    {src: xyz, link: "https://gen.xyz/"}, 
  ]
  //[{src: }, {src: ll}, {src: ACF}] //Array 4
];

const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is a Hackfit?",
        content:
          'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: "Who can attend?",
        content:
          "Hackfit is open to all undergraduate and Postgraduate students from all over India."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content:
          "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome mentors and teams which will help you get started with hackathon and hacking in general."
      },
      {
        label: "How team formation works?",
        content: "You can form team with 5 members in it at maximum."
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content:
          "All you need is to fill our form above, we will guide you through everything there"
      },
      {
        label: "I have more questions?",
        content:
          "Reach us directly at (paul.eliassojan@gmail.com  or icefoss@fisat.ac.in) we would happy to help you."
      },

      {
        label: "Will there be swag?",
        content: "Yes! Participants will recieveing swag!."
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  
  sponsorLogos,
  TeamInfo,
  MIDDLE_SECTION_HackFit,
  frequentlyAskedQuestions,
  FFGSVG
};
