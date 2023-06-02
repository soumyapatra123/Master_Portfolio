AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
// const exp = [
//   {
//     title: "Software Developer Engineer",
//     cardImage: "https://media.licdn.com/dms/image/C560BAQGSpT-nV4wbeQ/company-logo_200_200/0/1649936297524?e=2147483647&v=beta&t=WC_kEAZzXfYxiuvKNWGL62ALP6yV-A-7l6i4w0ujt7M",
//     place: "Eagle Technology Resources Pvt Ltd",
//     time: "(February, 2023 - Present)",
//     desp: `
//     As part of the <b>Product development</b> team, my missions were as follows:
//     <ul>
//     <li><b>Testing and validation </b>the functionality and performance of the marketplace platform's web service and APIs to ensure they met the requirements.</li>
//     <li><b>Identifying and tracking </b>defects, working closely with the development team to resolve issues and ensure timely delivery of high-quality software.</b> points.</li>
//     <li>working with the domain of <b>Python, Django, Docker, Linux, Ubuntu, AWS</b></li>
//     </ul>
//     `,
//   },
//   {
//     title: "Software Engineer Intern",
//     cardImage: "https://media.licdn.com/dms/image/C510BAQHgbiy1z_i2Tg/company-logo_200_200/0/1554267679053?e=2147483647&v=beta&t=7G4DzKwrvHaAV5wEkLzydVnqwQXuy62a2nJSk2mGa50",
//     place: "Tetrasoft Inc.",
//     time: "(June, 2022 - October, 2022)",
//     desp: `
//     working with the domain:
    
//     <ul>
//     <li><b>Duck Creek</b> technologies In P&C Insurance</li>
//     </ul>
//     `,
//   },
//   {
//     title: "Software Developer Intern",
//     cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQMGK913uOy9qPlIKAxQMsfGcedXCxPe4Jgn4Z6zun7aDICFIIU5iw4jt2CQcAg7GXmE&usqp=CAU",
//     place: "CodeKart",
//     time: "(October, 2021 - May, 2022)",
//     desp: `
//     As part of the <b>Product development</b> team, my missions were as follows:

//     <ul>
//     <li>Data Science</li>
//     <li>Machine Learning</li>
//     <li>Artificial Intelligence</li>
//     <li>Natural Language Processing</li>
//     <li>Numpy, Pandas, Scikit Learn</li>
//     <li>Deep Learning, Neural Networking</li>
//     <li>PowerBi, Tableau</li>
//     </ul>
//     `,
//   },
//   {
//     title: "Data Science & Business Analytics intern",
//     cardImage: "https://www.thesparksfoundationsingapore.org/images/logo_small.png",
//     place: "The Sparks Foundation",
//     time: "(August, 2021 - September, 2021)",
//     desp: `
//     Working with the <b>domain</b> of:
//     <ul>
//     <li>Data Science</li>
//     <li>Data Analytics</li>
//     <li>Business Analytics</li>
//     </ul>
//     `,
//   },
//   {
//     title: "Campus Ambassador",
//     cardImage: "https://education.sakshi.com/sites/default/files/images/2023/03/10/internshala-1678450352.jpg",
//     place: "INTERNSALA",
//     time: "(April, 2021 - July, 2021)",
//     desp: `
//     As part of the <b>Ambassador</b> team, my missions were as follows:
//     <ul>
//     <li>Working as a Campus Ambassador with Sales and Marketing</li>
//     </ul>
//     `,
//   },
// ];

const showCards1 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1" style="height:350px">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "sktime",
    cardImage:
      "./assets/images/experience-page/sktime.jpg",
    description: "A unified framework for Time Series Analysis and Machine Learning.",
  },
];

const showCards2 = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
    (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height:500px ;width:400px">
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// club Section

const clubsection = document.querySelector(".club-section");
const mentor = [
  {
    title: "Head at the Web Cell",
    subtitle: "Club Informatique & Télécom at INPT",
    image: "./assets/images/experience-page/cit.png",
    desp: "CIT club offers free courses given by INPT students in different sectors, mine was the web dev field in which i gave courses in the web development field for both 1st & 2nd year students at INPT.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
    (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="https://citweb.live" target="blank" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  clubsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);