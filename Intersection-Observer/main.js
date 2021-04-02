const child = document.querySelector('.child');
const cb = function() {
  alert('intersecting');
}
const io = new IntersectionObserver(cb);
io.observe(child);