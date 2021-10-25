const home = async () => {
    const data = await retrievePerson();
  return `
    <div class="site-start">
        <header>
        <div>
            <h1>Find the best <span>talent</span></h1>
        </div>
        <div>
            <div></div>
            <p>
                Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
            </p>
        </div>
        </header>
        <section id="home">
        <div>
            <div>
                <div></div>
                <h2>Build & manage distributed teams like no one else.</h2>
            </div>
            <div>
                <div>
                    <div>
                        <img src="./assets/icons/icon-person.svg" alt="logo"/>
                    </div> 
                    <div>
                        <span>Experienced Individuals</span>
                        <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </div>
                </div>
                <div> 
                    <div>
                        <img src="./assets/icons/icon-cog.svg" alt="logo"/>
                    </div>
                    <div>
                        <span>Easy to Implement</span>
                        <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                    </div>
                </div>
                <div> 
                    <div>
                        <img src="./assets/icons/icon-chart.svg" alt="logo"/>
                    </div>
                    <div>
                        <span>Enhanced Productivity</span>
                        <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                    </div>
                </div>
            </div>    
        </div>
        <div>
            <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
            <div>
                <div>
                    <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <span>${data.name.name1}</span>
                    <p>${data.description.description1}</p>
                    <img src="./assets/icons/avatar-aden.jpg" alt="profile">
                </div>
                <div>
                    <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                    <span>${data.name.name2}</span>
                    <p>${data.description.description2}</p>
                    <img src="./assets/icons/avatar-aiysha.jpg" alt="profile">
                </div>
                <div>
                    <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                    <span>${data.name.name3}</span>
                    <p>${data.description.description3}</p>
                    <img src="./assets/icons/avatar-arthur.jpg" alt="profile">
                </div>
            </div>
        </div>
        <div>
            <h2>Ready to get started?</h2>
            <button><a href="contact.html">contact us</a></button>
        </div>
        </section>
        <footer>
        <div>
            <h2>myteam</h2>
            <div>
                <span>home</span>
                <span>about</span>
            </div>
        </div>
        <div>
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
        </div>
        <div>
            <div>
                <img src="./assets/icons/icon-facebook.svg" alt="profile">
                <img src="./assets/icons/icon-pinterest.svg" alt="profile">
                <img src="./assets/icons/icon-twitter.svg" alt="profile">
            </div>
            <p>Copyright 2020. All Rights Reserved</p>
        </div>

        </footer>
    </div>
      `;
};
const contact = () => {
  return `
  <div class="contact">
  <section id="home">
  <div>
      <div>
          <h1>Contact</h1>
          <span>Ask us about</span>
          <div>
              <img src="./assets/icons/icon-person.svg" alt="">
              <p>The Quality of our talent network</p>
          </div>
          <div>
              <img src="./assets/icons/icon-cog.svg" alt="">
              <p>Usage & implementation of our software</p>
          </div>
          <div>
              <img src="./assets/icons/icon-chart.svg" alt="">
              <p>How we help drive innovation
              </p>
          </div>
      </div>
      <div>
          <form  id="contact-form" onsubmit=${submitForm()}>
          <input type="text" id="user_name" placeholder="Name">

          <input type="text" id="user_email" placeholder="Email">

          <input type="text" id="user_company" placeholder="Company">

          <input type="text" id="title" placeholder="Title">

          <input type="text" id="message" placeholder="Message">
              <button  
              >submit</button>
          </form>
      </div>
  </div>
</section>
<footer>
  <div>
      <h2>myteam</h2>
      <div>
          <span>home</span>
          <span>about</span>
      </div>
  </div>
  <div>
      <p>987 Hillcrest Lane</p>
      <p>Irvine, CA</p>
      <p>California 92714</p>
      <p>Call Us : 949-833-7432</p>
  </div>
  <div>
      <div>
          <img src="./assets/icons/icon-facebook.svg" alt="profile">
          <img src="./assets/icons/icon-pinterest.svg" alt="profile">
          <img src="./assets/icons/icon-twitter.svg" alt="profile">
      </div>
      <p>Copyright 2020. All Rights Reserved</p>
  </div>

</footer>
</div>
      `;
};
const about = () => {
  return `
  <div class="about">
  <header>
  
  <div>
      <h1>About</h1>
  </div>
  <div>
      <p>
          We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you. 
      </p>
  </div>
</header>
<section id="home">
  <div>
      <h2>Meet the directors</h2>
      <div>
          <div>
              <img src="/assets/icons/avatar-nikita.jpg" alt="">
              <span>Nikita Marks</span>
              <p>Founder & CEO</p>
              <div>
                  <img src="/assets/icons/icon-cross.svg"/>
              </div>
          </div>
          <div>
              <img src="/assets/icons/avatar-christian.jpg" alt="">
              <span>Cristian Duncan</span>
              <p>Co-founder & COO</p>
              <div>
                  <img src="/assets/icons/icon-cross.svg"/>
              </div>
          </div>
          <div>
              <img src="/assets/icons/avatar-cruz.jpg" alt="">
              <span>Cruz Hamer</span>
              <p>Co-founder & CTO</p>
              <div>
                  <img src="/assets/icons/icon-cross.svg"/>
              </div>
          </div>
          <div>
              <img src="/assets/icons/avatar-drake.jpg" alt="">
              <span>Drake Heaton</span>
              <p>Business Development Lead</p>
              <div>
                  <img src="/assets/icons/icon-cross.svg"/>
              </div>
          </div>
          <div>
              <img src="/assets/icons/avatar-griffin.jpg" alt="">
              <span>Griffin Wise</span>
              <p>Lead Marketing</p>
              <div>
                  <img src="/assets/icons/icon-cross.svg"/>
              </div>
          </div>
          <div>
              <img src="/assets/icons/avatar-aden.jpg" alt="">
              <span>Aden Allan</span>
              <p>Head of Talent</p>
              <div>
                  <img src="/assets/icons/icon-cross.svg"/>
              </div>
          </div>
      </div>
  </div>
</section>
<footer>

      <h2>Some of our clients</h2>
      <div>
          <img src="/assets/icons/logo-the-verge.png" alt="the verge">
          <img src="/assets/icons/logo-jakarta-post.png" alt="the">
          <img src="/assets/icons/logo-the-guardian.png" alt="guardian">
          <img src="/assets/icons/logo-tech-radar.png" alt="tech">
          <img src="/assets/icons/logo-gadgets-now.png" alt="gadgets">
      </div>

</footer>
</div>
      `;
};

const routes = {
  "/": home,
  "/contact": contact,
  "/about": about,
};

const rootDiv = document.getElementById("root");

document.getElementById("root").addEventListener("click", function(event){
    event.preventDefault()
  });

const onNavigate = async (_pathname) => {
  window.history.replaceState(null, null, _pathname);
  window.history.pushState(null, _pathname, _pathname);
  rootDiv.innerHTML = await routes[_pathname]();
 
};

const submitForm = () => {
    let tempParams;
    if(document.getElementsByClassName(".contact")){
      tempParams = {
          user_name : document.getElementById("user_name") ? document.getElementById("user_name").value : "",
          user_email : document.getElementById("user_email") ? document.getElementById("user_email").valuev : "",
          user_company : document.getElementById("user_company") ? document.getElementById("user_company").value : "",
          title : document.getElementById("title") ? document.getElementById("title").value : "",
          message : document.getElementById("message") ? document.getElementById("message").value : "",
      }
      sendMail(tempParams);
    }
}

// const createProfilePicture = () => {
//     const mainDiv = document.createElement('div');
//     const imgElement = document.createElement('img');
//     imgElement.src = .imgSrc;
//     imgElement.alt = .imgAlt;
//     const spanElement = document.createElement('span');
//     spanElement.textContent = .name;
//     mainDiv.appendChild(imgElement);
//     mainDiv.appendChild(spanElement);
//     return mainDiv;
// }

// listaPersonas.forEach(persona => {
//     sectionElement = document.querySelector('section');
//     sectionElement.appendChild(createProfilePict)
// })