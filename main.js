// JavaScript code to handle hover effect on team members
document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll('.team .member');
  
    teamMembers.forEach(member => {
      const image = member.querySelector('img');
      const text = member.querySelector('p');
  
      member.addEventListener('mouseenter', function() {
        // Shrink image on hover
        image.style.transform = 'scale(0.9)';
        // Show text
        text.style.opacity = '1';
      });
  
      member.addEventListener('mouseleave', function() {
        // Reset image size when hover ends
        image.style.transform = 'scale(1)';
        // Hide text
        text.style.opacity = '0';
      });
    });
  });
  