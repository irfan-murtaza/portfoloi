import React from "react";

function About() {
  return (
    <div className="bg-light">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-4">
              <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
              <p className="lead fw-light mb-4">My name is Irfan Murtaza and I help brands to bring them in digital world</p>
              <p className="text-muted">Hello! I'm a software engineer with 3+ years of experience in developing web / mobile applications and APIs using Ruby on Rails and MERN stack. In addition to my expertise in these technologies, I also have experience developing mobile applications with React Native. My development skills are coupled with experience in DevOps practices such as deploying applications, managing infrastructure, and automating workflows. I'm proficient in tools such as Docker, Kubernetes, and Git, and I'm comfortable working in both cloud and on-premise environments. My focus is always on creating applications that are not only high-performing and scalable but also easy to deploy, manage, and maintain. Let's work together to build something great!</p>
              <div className="d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" href="#!"><i className="bi bi-facebook"></i></a>
                <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}

export default About;