const child = document.querySelector('.child');
const io = new IntersectionObserver(cb);
io.observe(child);