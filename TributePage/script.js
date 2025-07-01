const timelineItems = document.querySelectorAll('.timeline-item');

const revealTimeline = () => {
  const triggerBottom = window.innerHeight * 0.85;
  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);
