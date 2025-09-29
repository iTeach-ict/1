// Mobile menu
const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// read more
const fullText = `
Personal Qualities
I am known for my patience, empathy, and ability to work with students of varying abilities and learning styles. I am an effective communicator and classroom manager, able to adapt and implement new teaching methods. I help schools and individuals integrate technology into learning. My passion lies in bridging the gap between education and technology.

Legacies
As a passionate ICT teacher, I have made a lasting impact on countless students, inspiring a generation of tech-savvy individuals.

Teaching Philosophy
My philosophy is rooted in practical, project-based learning. I believe students learn best through real-world problem-solving. I focus on coding, web development, digital citizenship, and online safety.

Achievements
Improved Student Outcomes: Consistently high pass rates and student satisfaction.
Innovative Teaching: Developed and implemented project-based learning and gamification.

Key Strengths
In-depth ICT knowledge, practical experience, effective planning, assessments, classroom management, student-focused methods, and interactive sessions.
`;

    function typeText(element, text, callback) {
      element.innerHTML = "";
      let i = 0;
      const speed = 20;

      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else if (callback) {
          callback();
        }
      }
      type();
    }

    function toggleText(button) {
      const moreTextEl = button.previousElementSibling;
      const isVisible = moreTextEl.style.display === "block";

      if (!isVisible) {
        moreTextEl.style.display = "block";
        typeText(moreTextEl, fullText);
        button.textContent = "Read less";
      } else {
        moreTextEl.style.display = "none";
        button.textContent = "Read more";
      }
    }

// Testimonials slider
const testimonials = document.querySelectorAll(".testimonial");
const dotsContainer = document.querySelector(".dots");
let current = 0;

// Create dots
testimonials.forEach((_, idx) => {
  const dot = document.createElement("button");
  if (idx === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showTestimonial(idx));
  dotsContainer.appendChild(dot);
});

function showTestimonial(index) {
  testimonials[current].classList.remove("active");
  dotsContainer.children[current].classList.remove("active");
  testimonials[index].classList.add("active");
  dotsContainer.children[index].classList.add("active");
  current = index;
}

// Auto-slide
setInterval(() => {
  let next = (current + 1) % testimonials.length;
  showTestimonial(next);
}, 4000);

// Contact form

const form = document.getElementById('contactForm');
const button = form.querySelector('button');
const status = document.getElementById('status');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Reset status
    status.className = 'info';
    status.textContent = 'Sending...';
    button.disabled = true;

    // Simulate sending delay
    setTimeout(() => {
        const isSuccess = Math.random() > 0.3; // 70% chance of success

        if (isSuccess) {
            status.className = 'delivered';
            status.textContent = 'Message delivered ✅';

            // Simulate a response after delivery
            setTimeout(() => {
                status.className = 'response';
                status.textContent = 'Thank You, I will reply shortly.';
                button.disabled = false;
            }, 2000);
        } else {
            // Simulate error
            status.className = 'error';
            status.textContent = '❌ Message failed to send. Please try again.';
            button.disabled = false;
        }
    }, 1500);
});


// Blog starts here

// Blog Ends here 
