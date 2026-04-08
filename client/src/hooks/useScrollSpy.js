import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../store/uiSlice';

const useScrollSpy = (sectionIds) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            dispatch(setActiveSection(id));
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds, dispatch]);
};

export default useScrollSpy;
