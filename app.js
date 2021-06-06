const t1 = gsap.timeline({
  default: { ease: "power1.out" },
});

t1.to(".hide-text", {
  y: "0%",
  duration: 1,
  stagger: 0.25,
});
t1.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
t1.to(
  ".header-animation",
  {
    y: "-100%",
    duration: 1,
  },
  "-=1"
);
t1.fromTo(
  "nav",
  { opacity: 0 },
  { opacity: 1, duration: 1.5 }
);
t1.fromTo(
  ".main-text",
  { opacity: 0 },
  { opacity: 1, duration: 1.5 },
  "-=1"
);
t1.fromTo(
  ".main-link",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "-=1"
);
t1.fromTo(
  ".main-textTwo",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "-=0.5"
);
