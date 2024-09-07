"use client"; // Ensure the component runs on the client-side

import React, { useEffect, useRef, useState } from 'react';

const TypingAnimation = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const typingRef = useRef(null);
  const typingTimeoutRef = useRef(null); // Ref to keep track of timeout for cleanup

  useEffect(() => {
    const handleTyping = () => {
      const typingElement = typingRef.current;
      const text = items[currentItem];
      let i = 0;

      typingElement.textContent = ''; // Clear existing text

      // Typing effect
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
          // Pause before starting to delete the text
          typingTimeoutRef.current = setTimeout(() => {
            setCurrentItem((prev) => (prev + 1) % items.length);
            typingElement.textContent = ''; // Clear text before typing next word
          }, 2000); // Pause duration before switching words
        }
      }, 100); // Typing speed

      // Cleanup function for unmount
      return () => {
        clearInterval(typeInterval);
        clearTimeout(typingTimeoutRef.current);
      };
    };

    handleTyping();

    // Cleanup on component unmount
    return () => {
      clearInterval();
      clearTimeout();
    };
  }, [currentItem, items]);

  return (
    <span className="relative flex items-center">
      <span ref={typingRef} className="text-white"></span>
      <span className="typing-cursor ml-1"></span>
    </span>
  );
};

export default TypingAnimation;
