// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "GNU General Public License v3.0"){
    return "![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20GPL-blue)";
  }
  if(license == "MIT License"){
    return "![License: MIT License](https://img.shields.io/badge/License-MIT-red)";
  }
  if(license == "BSD 2-Clause 'Simplified' License"){
    return "![License: BSD 2-Clause 'Simplified' License](https://img.shields.io/badge/License-BSD_2_Clause_Simplified-green)";
  }
  if(license == "BSD 3-Clause 'New' or 'Revised' License"){
    return "![License: BSD 3-Clause 'New' or 'Revised' License](https://img.shields.io/badge/License-BSD_3_Clause_New_or_Revised-yellow)";
  }
  if(license == "Boost Software License 1.0"){
    return "![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_Software_1.0-white)";
  }
  if(license == "Creative Commons Zero v1.0 Universal"){
    return "![License: Creative Commons Zero v1.0 Universal](https://img.shields.io/badge/License-Creative_Commons_Zero-silver)";
  }
  if(license == "Eclipse Public License 2.0"){
    return "![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse-purple)";
  }
  if(license == "GNU Affero General Public License v3.0"){
    return "![License: GNU Affero General Public License v3.0](https://img.shields.io/badge/License-GNU_Affero-gold)";
  }
  if(license == "GNU General Public License v2.0"){
    return "![License: GNU General Public License v2.0](https://img.shields.io/badge/License-GNU_General_Public_License_v2.0-orange)";
  }
  if(license == "GNU Lesser General Public License v2.1"){
    return "![License: GNU Lesser General Public License v2.1](https://img.shields.io/badge/License-GNU_Lesser_General_Public_License_v2.1-teal)";
  }
  if(license == "Mozilla Public License 2.0"){
    return "![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla-magenta)";
  }
  if(license == "The Unlicense"){
    return "![License: The Unlicense](https://img.shields.io/badge/License-The_Unlicense-black)";
  }
  if(license == ""){
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ##Description
  ${data.description}

  ##Table of Contents
  * [Installation](##Installation)
  * [Usage](##Usage)
  * [Credits](##Credits)
  * [License](##License)
  * [Contributing](##Contributing)
  * [Contact-Information](##Contact-Information)
  
  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##Credits
  ${data.credits}

  ##License
  `
  +renderLicenseBadge(data.license)+

  `

  ##Contributing
  ${data.contributing}

  ##Contact-Information
  GitHub Username: ${data.userName}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;