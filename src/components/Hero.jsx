import { useEffect, useRef } from "react";
import { imgSource } from "../data/heroImg.js";
import resume from "../assets/RESUME_EMIL.pdf";

let mouse = {
  x: undefined,
  y: undefined,
};

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = imgSource;

    const imgWidth = 1300; // Fixed width of the image
    const imgHeight = 1300; // Fixed height of the image
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const centerX = (canvas.width - imgWidth) / 2;
      const centerY = (canvas.height - imgHeight + 400) / 2;
      createParticles(centerX, centerY); // Recreate particles on resize
    };

    const drawImage = (x, y) => {
      ctx.drawImage(img, x, y, imgWidth, imgHeight);
    };

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.color = color;
        this.size = 9;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if (mouse.x !== undefined && mouse.y !== undefined) {
          let dx = mouse.x - this.originX;
          let dy = mouse.y - this.originY;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = 100;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * 10;
          let directionY = forceDirectionY * force * 10;

          if (distance < maxDistance) {
            this.x -= directionX;
            this.y -= directionY;
          } else {
            this.x = this.originX;
            this.y = this.originY;
          }
        } else {
          this.x = this.originX;
          this.y = this.originY;
        }
        this.draw();
      }
    }

    const createParticles = (centerX, centerY) => {
      particles = [];
      drawImage(centerX, centerY);
      let pixelData = ctx.getImageData(
        centerX,
        centerY,
        imgWidth,
        imgHeight
      ).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < imgHeight; y += 10) {
        for (let x = 0; x < imgWidth; x += 10) {
          let index = (y * imgWidth + x) * 4;
          let red = pixelData[index];
          let green = pixelData[index + 1];
          let blue = pixelData[index + 2];
          let alpha = pixelData[index + 3];
          let color = `rgb(${red},${green},${blue})`;

          if (alpha > 0) {
            particles.push(new Particle(centerX + x, centerY + y, color));
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
      });
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", resizeCanvas);

    img.onload = () => {
      resizeCanvas();
      animate();
    };

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      <div id="home" className="hero-section">
        <div className="hero-content-wrapper">
          <div class="tools">
            <div class="circle">
              <span class="red box"></span>
            </div>
            <div class="circle">
              <span class="yellow box"></span>
            </div>
            <div class="circle">
              <span class="green box"></span>
            </div>
          </div>
          <div className="card__content">
            <span>Hello, I am</span>
            <h3>Emil Jason Datuin 👋</h3>
            <div className="positions">
              <div className="position-wrapper">
                <h4>Software Developer</h4>
                <h4>Web Developer</h4>
                <h4>Frontend Developer</h4>
                <h4>Backend Developer</h4>
                <h4>IT Helpdesk</h4>
              </div>
            </div>
            <p>Let us make this world a better place.</p>
            <a id="hireBtn" href="#contact">
              <span>Hire me 👍</span>
            </a>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/emil-jason-datuin-3b169b176">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/EmilJason">
                <i className="fa-brands fa-github-alt"></i>
              </a>
            </div>
          </div>
          <div className="scroll-down-wrapper">
            <span>
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
