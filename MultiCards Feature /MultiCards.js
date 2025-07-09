const users = [
    {
      fullName: "Aarav Sharma",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      position: "Frontend Developer",
      company: "TechNova",
      skills: ["JavaScript", "React", "CSS", "HTML", "TypeScript", "Redux"],
      description: "Creative developer focused on building interactive web interfaces.",
      ratePerHour: 35,
      status: true
    },
    {
      fullName: "Meera Patel",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      position: "Data Scientist",
      company: "DataWave",
      skills: ["Python", "Pandas", "TensorFlow", "SQL", "Scikit-learn", "Numpy", "Keras"],
      description: "Loves extracting insights from complex datasets using ML techniques.",
      ratePerHour: 50,
      status: false
    },
    {
      fullName: "Rohan Mehta",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      position: "Backend Engineer",
      company: "CloudNet",
      skills: ["Node.js", "Express", "MongoDB", "Docker", "Redis", "PostgreSQL"],
      description: "Backend expert building scalable APIs and microservices.",
      ratePerHour: 42,
      status: true
    },
    {
      fullName: "Isha Kapoor",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      position: "UI/UX Designer",
      company: "PixelCraft",
      skills: ["Figma", "Sketch", "Adobe XD", "CSS", "HTML", "Design Systems"],
      description: "Designs intuitive and delightful user experiences for digital products.",
      ratePerHour: 38,
      status: false
    },
    {
      fullName: "Karan Verma",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      position: "Full Stack Developer",
      company: "CodeVerse",
      skills: ["React", "Node.js", "GraphQL", "TypeScript", "MySQL", "Docker", "Jest"],
      description: "Bridges frontend and backend with clean, functional code.",
      ratePerHour: 48,
      status: true
    },
    {
      fullName: "Sneha Desai",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      position: "Mobile App Developer",
      company: "AppWorx",
      skills: ["Flutter", "Dart", "Firebase", "Kotlin", "Java", "SQLite"],
      description: "Builds high-performance cross-platform mobile applications.",
      ratePerHour: 40,
      status: true
    },
    {
      fullName: "Anuj Joshi",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      position: "DevOps Engineer",
      company: "InfraTech",
      skills: ["AWS", "Terraform", "Kubernetes", "CI/CD", "Ansible", "Bash"],
      description: "Automates deployments and manages cloud infrastructure efficiently.",
      ratePerHour: 55,
      status: false
    },
    {
      fullName: "Tanya Rao",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      position: "Machine Learning Engineer",
      company: "NeuroNet",
      skills: ["Python", "PyTorch", "NLP", "OpenCV", "MLflow", "Transformers"],
      description: "Applies machine learning to real-world problems with innovative models.",
      ratePerHour: 60,
      status: true
    },
    {
      fullName: "Vikram Singh",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      position: "Cybersecurity Analyst",
      company: "SecureLine",
      skills: ["Wireshark", "Python", "Nmap", "Metasploit", "Firewalls", "Linux"],
      description: "Secures systems through penetration testing and vulnerability analysis.",
      ratePerHour: 45,
      status: false
    },
    {
      fullName: "Nidhi Chawla",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      position: "Cloud Architect",
      company: "SkyLayer",
      skills: ["Azure", "AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      description: "Designs cloud systems with high availability and performance.",
      ratePerHour: 65,
      status: true
    }
  ];

  var sum = ''

  users.forEach(function(elem,indx){
    sum = sum + `<div class="card">
            <div class="top">
                ${elem.status ? '<button>Available</button>' : '<h1></h1>'}
                <h4>$${elem.ratePerHour}/hr</h1>
            </div>

            <img src=${elem.image} alt="">
            <h1 class="name">${elem.fullName}</h1>
            <h1 class="profession">${elem.position}</h1>
            <h1 class="com">${elem.company}</h1>

            <div class="skills">
                <h4>${elem.skills[0]}</h4>
                <h4>${elem.skills[1]}</h4>
                <h4>${elem.skills[2]}</h4>
                <h5>+${elem.skills.length-3}</h5>
            </div>

            <p>${elem.description}</p>
            <div class="line"></div>
            <button id="${indx}">View Profile</button>
        </div>`
  })

var main = document.querySelector('#main')
main.innerHTML = sum 

var full1 = document.querySelector('#full1')
var cross = document.querySelector('.cross')

main.addEventListener('click',function(dets){
  if(dets.target.id && dets.target.id!="main"){
    var gold = users[dets.target.id]
    full1.style.display = 'flex'
    full1.childNodes[3].innerHTML=gold.fullName
    full1.childNodes[5].src=gold.image
  }

})


cross.addEventListener('click',function(){
    full1.style.display = 'none'
})

