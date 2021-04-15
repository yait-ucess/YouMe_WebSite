const child = document.querySelector('.child');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview');
    } else {
      entry.target.classList.remove('inview');
    }
  });
}
const options = {
  root: null,
  rootMargin: "-300px 0px",
  threshold: 0
};
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
