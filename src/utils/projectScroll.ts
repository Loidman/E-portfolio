let projectsScrollPosition = 0;

export function rememberProjectsScrollPosition() {
  projectsScrollPosition = window.scrollY;
}

export function scrollImmediately(top: number) {
  // The site uses smooth scrolling, but route changes need an immediate jump.
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo({ top, left: 0, behavior: 'auto' });
  root.style.scrollBehavior = previousBehavior;
}

export function restoreProjectsScrollPosition() {
  scrollImmediately(projectsScrollPosition);
}
