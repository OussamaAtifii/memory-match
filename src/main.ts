import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// document.addEventListener('DOMContentLoaded', function () {
//   const snowContainer = document.querySelector('.snow-container');

//   const particlesPerThousandPixels = 0.1;
//   const fallSpeed = 1.25;
//   const pauseWhenNotActive = true;
//   const maxSnowflakes = 200;
//   const snowflakes = [];

//   let snowflakeInterval: ReturnType<typeof setInterval>;
//   let isTabActive = true;

//   function resetSnowflake(snowflake: HTMLDivElement) {
//     const size = Math.random() * 5 + 1;
//     const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
//     const viewportHeight = window.innerHeight;

//     snowflake.style.width = `${size}px`;
//     snowflake.style.height = `${size}px`;
//     snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
//     snowflake.style.top = `-${size}px`;

//     const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
//     snowflake.style.animationDuration = `${animationDuration}s`;
//     snowflake.style.animationTimingFunction = 'linear';
//     snowflake.style.animationName =
//       Math.random() < 0.5 ? 'fall' : 'diagonal-fall';

//     setTimeout(() => {
//       if (parseInt(snowflake.style.top, 10) < viewportHeight) {
//         resetSnowflake(snowflake);
//       } else {
//         snowflake.remove(); // Remove when it goes off the bottom edge
//       }
//     }, animationDuration * 1000);
//   }

//   function createSnowflake() {
//     if (snowflakes.length < maxSnowflakes) {
//       const snowflake = document.createElement('div');
//       snowflake.classList.add('snowflake');
//       snowflakes.push(snowflake);
//       snowContainer?.appendChild(snowflake);
//       resetSnowflake(snowflake);
//     }
//   }

//   function generateSnowflakes() {
//     const numberOfParticles =
//       Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
//       particlesPerThousandPixels;
//     const interval = 5000 / numberOfParticles;

//     clearInterval(snowflakeInterval);
//     snowflakeInterval = setInterval(() => {
//       if (isTabActive && snowflakes.length < maxSnowflakes) {
//         requestAnimationFrame(createSnowflake);
//       }
//     }, interval);
//   }

//   function handleVisibilityChange() {
//     if (!pauseWhenNotActive) return;

//     isTabActive = !document.hidden;
//     if (isTabActive) {
//       generateSnowflakes();
//     } else {
//       clearInterval(snowflakeInterval);
//     }
//   }

//   generateSnowflakes();

//   window.addEventListener('resize', () => {
//     clearInterval(snowflakeInterval);
//     setTimeout(generateSnowflakes, 1000);
//   });

//   document.addEventListener('visibilitychange', handleVisibilityChange);
// });
