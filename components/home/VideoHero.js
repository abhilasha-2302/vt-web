'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Add this import

const stories = [
  {
    id: 'story-2',
    src: '/videos/aiml.webm',
    title: 'AI Smart Solutions',
    heading: 'Discover AI',
    subheading: 'Driving Intelligent Transformation',
    description: 'Rapid, Secure, Adaptive Innovation',
    link: '/solutions/multi-die',
    discoverText: 'Discover Smart Engineering',
    discoverLink: '/solutions/ai-ml',
    watchLink: '/videos/ai-engineering'
  },

  {
    id: 'story-1',
    src: '/videos/sdcvp.webm',
    title: 'AI Chip Verification',
    heading: 'Introducing SdCvP-X',
    headingTrademark: '™',
    subheading: 'AI- Driven Verification Automation Tool',
    description: 'Boost Verification and Productivity - First-Time Silicon Success',
    link: '/products/sdcvp-x',
    discoverText: 'Discover Advanced Verification',
    discoverLink: '/products/sdcvp-x',
    watchLink: '/videos/ai-chip-development'
  },
  // {
  //   id: 'story-2',
  //   src: '/videos/aiml.webm',
  //   title: 'AI Smart Solutions',
  //   heading: 'Discover AI',
  //   subheading: 'Driving Intelligent Transformation',
  //   description: 'Rapid, Secure, Adaptive Innovation',
  //   link: '/solutions/multi-die',
  //   discoverText: 'Discover Smart Engineering',
  //   discoverLink: '/solutions/ai-ml',
  //   watchLink: '/videos/ai-engineering'
  // },
  {
    id: 'story-3',
    src: '/videos/blockchain.webm',
    title: 'Blockchain',
    heading: 'Explore Blockchain',
    subheading: 'Accelerating Blockchain Transformation',
    description: 'Fast, Secure, Scalable Innovation',
    link: '/solutions/multi-die',
    discoverText: 'Discover Advanced Solutions',
    discoverLink: '/solutions/blockchain',
    watchLink: '/videos/blockchain'
  }
];

export default function VideoHero() {
  const [activeStory, setActiveStory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter(); // Add router hook
  
  const videoRefs = useRef([]);
  const progressBarRefs = useRef([]);
  const storyTimers = useRef([]);
  const touchStartX = useRef(0);
  const containerRef = useRef(null);
  
  const STORY_DURATION = 10000; // 10 seconds

  // Handle story navigation
  const goToStory = (index) => {
    // Reset all animations
    progressBarRefs.current.forEach(bar => {
      if (bar) {
        bar.style.animation = 'none';
        bar.offsetHeight; // Trigger reflow
        bar.style.animation = null;
      }
    });
    
    // Clear all timers
    storyTimers.current.forEach(timer => clearTimeout(timer));
    storyTimers.current = [];
    
    // Pause all videos
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    
    // Set new active story
    setActiveStory(index);
    setIsPaused(false);
  };

  const goToNextStory = () => {
    if (activeStory < stories.length - 1) {
      goToStory(activeStory + 1);
    } else {
      // Loop back to first story
      goToStory(0);
    }
  };

  const goToPrevStory = () => {
    if (activeStory > 0) {
      goToStory(activeStory - 1);
    } else {
      // Loop to last story
      goToStory(stories.length - 1);
    }
  };

  // Handle touch events for swiping
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    // If swipe distance is significant
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next story
        goToNextStory();
      } else {
        // Swipe right - previous story
        goToPrevStory();
      }
    }
  };

  // Handle story click for navigation
  const handleStoryClick = (e) => {
    // Get click position relative to container width
    const { clientX } = e;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = (clientX - rect.left) / rect.width;
    
    if (relativeX < 0.3) {
      // Left side click - previous story
      goToPrevStory();
    } else if (relativeX > 0.7) {
      // Right side click - next story
      goToNextStory();
    } else {
      // Center click - toggle pause
      setIsPaused(!isPaused);
    }
  };

  // Handle watch button click - FIXED VERSION
  const handleWatchClick = (watchLink, e) => {
    e.stopPropagation();
    
    // Option 1: Navigate in same tab (recommended for Next.js)
    router.push(watchLink);
    
    // Option 2: Open in new tab (uncomment if you prefer this)
    // window.open(watchLink, '_blank', 'noopener,noreferrer');
  };

  // Set up animation and video playback when active story changes
  useEffect(() => {
    // Clear previous timers
    storyTimers.current.forEach(timer => clearTimeout(timer));
    storyTimers.current = [];
    
    const video = videoRefs.current[activeStory];
    if (!video) return;
    
    // Reset and play the active video
    video.currentTime = 0;
    
    if (!isPaused) {
      video.play().catch(err => console.error('Error playing video:', err));
      
      // Animate the progress bar
      const progressBar = progressBarRefs.current[activeStory];
      if (progressBar) {
        progressBar.style.animation = 'none';
        progressBar.offsetHeight; // Trigger reflow
        progressBar.style.animation = `progress-animation ${STORY_DURATION/1000}s linear forwards`;
      }
      
      // Set timeout to go to next story
      const timer = setTimeout(goToNextStory, STORY_DURATION);
      storyTimers.current.push(timer);
    }
    
    // Keyboard navigation
    const handleKeydown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevStory();
      } else if (e.key === 'ArrowRight') {
        goToNextStory();
      } else if (e.key === ' ') {
        // Space to toggle pause
        setIsPaused(!isPaused);
        e.preventDefault();
      }
    };
    
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [activeStory, isPaused]);

  // Handle pause/play state
  useEffect(() => {
    const video = videoRefs.current[activeStory];
    if (!video) return;
    
    if (isPaused) {
      video.pause();
      
      // Pause the progress bar animation
      const progressBar = progressBarRefs.current[activeStory];
      if (progressBar) {
        const computedStyle = window.getComputedStyle(progressBar);
        const width = computedStyle.getPropertyValue('width');
        progressBar.style.animation = 'none';
        progressBar.style.width = width;
      }
      
      // Clear the timer
      storyTimers.current.forEach(timer => clearTimeout(timer));
      storyTimers.current = [];
    } else {
      video.play().catch(err => console.error('Error playing video:', err));
      
      // Resume the progress bar animation
      const progressBar = progressBarRefs.current[activeStory];
      if (progressBar) {
        const computedStyle = window.getComputedStyle(progressBar);
        const widthValue = computedStyle.getPropertyValue('width');
        const width = parseFloat(widthValue) / parseFloat(computedStyle.getPropertyValue('width'));
        const remainingTime = (1 - width) * STORY_DURATION;
        
        progressBar.style.animation = `progress-animation ${remainingTime/1000}s linear forwards`;
        
        // Set timeout to go to next story
        const timer = setTimeout(goToNextStory, remainingTime);
        storyTimers.current.push(timer);
      }
    }
  }, [isPaused]);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Story tabs - similar to the synopsys layout */}
      <div className="absolute top-20 left-0 right-0 z-30 px-4 md:px-8 lg:px-16">
        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-8">
          {stories.map((story, index) => (
            <div 
              key={`tab-${story.id}`}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => goToStory(index)}
            >
              <div className={`text-white text-xs md:text-sm font-medium mb-2 text-center ${
                index === activeStory ? 'text-white' : 'text-white/70'
              }`}>
                {story.title}
              </div>
              <div className="w-24 md:w-40 h-0.5 bg-white/30 rounded-full overflow-hidden">
                <div 
                  ref={el => progressBarRefs.current[index] = el}
                  className={`h-full bg-white rounded-full ${index < activeStory ? 'w-full' : index > activeStory ? 'w-0' : ''}`}
                  style={{
                    ...(index === activeStory && !isPaused 
                      ? { animation: `progress-animation ${STORY_DURATION/1000}s linear forwards` } 
                      : {})
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Story videos */}
      <div 
        className="h-full w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleStoryClick}
      >
        {stories.map((story, index) => (
          <div 
            key={`video-${story.id}`}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === activeStory ? 'opacity-100 z-10' : 'opacity-0 -z-10'
            }`}
          >
            <video
              ref={el => videoRefs.current[index] = el}
              className="h-full w-full object-cover"
              src={story.src}
              muted
              playsInline
              loop
              preload="auto"
              onError={(e) => {
                console.error(`Error loading video ${story.src}:`, e);
                // You can add fallback behavior here
              }}
            />
            
            {/* Dark gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            
            {/* Story content - Synopsys-like layout */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {story.heading}
                    {story.headingTrademark && (
                      <sup className="text-2xl md:text-3xl lg:text-4xl font-normal">{story.headingTrademark}</sup>
                    )}
                    <br />
                    <span className="text-3xl md:text-4xl lg:text-5xl font-normal">{story.subheading}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8">
                    {story.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {/* FIXED Watch button */}
                    <button 
                      className="flex items-center bg-white hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 md:py-3 md:px-6 rounded transition-colors duration-200"
                      onClick={(e) => handleWatchClick(story.watchLink, e)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Watch
                    </button>
                    <Link
                      href={story.discoverLink}
                      className="inline-flex items-center bg-transparent hover:bg-white/10 text-white border border-white font-medium py-2 px-4 md:py-3 md:px-6 rounded transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {story.discoverText}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation helpers (invisible) */}
      <div 
        className="absolute top-0 left-0 bottom-0 w-1/4 z-20 cursor-pointer" 
        onClick={goToPrevStory}
      />
      <div 
        className="absolute top-0 right-0 bottom-0 w-1/4 z-20 cursor-pointer" 
        onClick={goToNextStory}
      />
      
      {/* Play/Pause indicator */}
      {isPaused && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="bg-black/40 backdrop-blur-sm rounded-full p-3 animate-pulse">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 8L16 12L10 16V8Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
      
      {/* CSS for progress bar animation */}
      <style jsx global>{`
        @keyframes progress-animation {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}