// Main site interactions
// Navbar and menu animations will be initialized here.

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const navToggle = document.querySelector('#nav-toggle');
  const hamburger = document.querySelector('.hamburger');
  const topLinks = document.querySelector('.top-links');

  if (hamburger && topLinks) {
    const openNav = () => {
      body.classList.add('nav-open');
      if (navToggle) navToggle.checked = true;
    };

    const closeNav = () => {
      body.classList.remove('nav-open');
      if (navToggle) navToggle.checked = false;
    };

    const toggleNav = () => {
      if (body.classList.contains('nav-open')) {
        closeNav();
      } else {
        openNav();
      }
    };

    // Click on hamburger toggles menu
    hamburger.addEventListener('click', (e) => {
      e.preventDefault();
      toggleNav();
    });

    // Optional: clicking on any link inside the panel closes it on mobile
    topLinks.addEventListener('click', (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      if (window.innerWidth <= 820) {
        closeNav();
      }
    });

    // Keep checkbox change in sync, in case CSS uses it
    if (navToggle) {
      navToggle.addEventListener('change', () => {
        if (navToggle.checked) openNav(); else closeNav();
      });
    }
  }

  // ===================================
  // EFECTO TYPEWRITER PARA HERO SUBTITLE
  // ===================================
  const typewriterElement = document.querySelector('.typewriter-text');
  
  if (typewriterElement) {
    const text = typewriterElement.getAttribute('data-text');
    const typingSpeed = 25; // Velocidad en milisegundos (más bajo = más rápido)
    const startDelay = 1000; // Delay de 1 segundo antes de comenzar
    
    // Limpiar contenido y agregar clase de typing
    typewriterElement.textContent = '';
    typewriterElement.classList.add('typing');
    
    let charIndex = 0;
    
    // Función para escribir letra por letra
    const typeWriter = () => {
      if (charIndex < text.length) {
        typewriterElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        // Cuando termina, quitar cursor después de medio segundo
        setTimeout(() => {
          typewriterElement.classList.remove('typing');
          typewriterElement.classList.add('typing-complete');
        }, 500);
      }
    };
    
    // Iniciar después del delay
    setTimeout(typeWriter, startDelay);
  }

  // Tesseract section dynamic messages (ES / EN)
  const esMessage = document.querySelector('#tesseract-message-es');
  const esBtn = document.querySelector('#tesseract-btn-es');
  const enMessage = document.querySelector('#tesseract-message-en');
  const enBtn = document.querySelector('#tesseract-btn-en');

  const esIdeas = [
    'Si lo puedes imaginar, podemos diseñar el flujo y escribir el código para hacerlo real.',
    'Cada línea de código es un pequeño experimento para acercarnos a lo que imaginas.',
    'Una buena interfaz comienza con una buena historia: la tuya y la de tus usuarios.',
    'Los límites suelen estar más en el tiempo y el enfoque que en la tecnología.',
  ];

  const enIdeas = [
    'If you can imagine it, we can design the flow and write the code to make it real.',
    'Every line of code is a small experiment to get closer to your idea.',
    'Great interfaces start with a great story: yours and your users’ story.',
    'Most limits live more in time and focus than in technology.',
  ];

  const pickRandom = (arr, current) => {
    const filtered = current ? arr.filter((t) => t !== current) : arr;
    return filtered[Math.floor(Math.random() * filtered.length)] || current;
  };

  // Función para crear letras animadas
  const wrapTextInLetters = (text) => {
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return `<span class="letter space" data-index="${index}"> </span>`;
      }
      return `<span class="letter" data-index="${index}">${char}</span>`;
    }).join('');
  };

  // Animación de caída y aparición de texto
  const animateTextChange = (element, newText, callback) => {
    const letters = element.querySelectorAll('.letter');
    const totalLetters = letters.length;
    
    if (totalLetters === 0) {
      // Si no hay letras (primera vez), solo mostrar el texto
      element.innerHTML = wrapTextInLetters(newText);
      return;
    }

    // Fase 1: Caída de letras como edificio
    letters.forEach((letter, index) => {
      const delay = (index / totalLetters) * 0.3; // Secuencial con efecto cascada
      const randomRotate = (Math.random() - 0.5) * 90; // Rotación aleatoria entre -45 y 45
      letter.style.setProperty('--delay', `${delay}s`);
      letter.style.setProperty('--random-rotate', `${randomRotate}deg`);
      letter.classList.add('falling');
    });

    // Fase 2: Después de la caída, mostrar nueva frase
    setTimeout(() => {
      element.innerHTML = wrapTextInLetters(newText);
      
      // Animar aparición de nuevas letras
      const newLetters = element.querySelectorAll('.letter');
      newLetters.forEach((letter, index) => {
        const delay = (index / newLetters.length) * 0.5;
        letter.style.setProperty('--delay', `${delay}s`);
        letter.classList.add('appearing');
      });

      // Limpiar clases después de la animación
      setTimeout(() => {
        newLetters.forEach(letter => {
          letter.classList.remove('appearing');
          letter.style.removeProperty('--delay');
        });
      }, 1500);

    }, 1000); // Esperar a que termine la caída
  };

  if (esMessage && esBtn) {
    // Inicializar con letras
    esMessage.innerHTML = wrapTextInLetters(esMessage.textContent.trim());
    
    esBtn.addEventListener('click', () => {
      const currentText = esMessage.textContent.trim();
      const next = pickRandom(esIdeas, currentText);
      animateTextChange(esMessage, next);
    });
  }

  if (enMessage && enBtn) {
    // Inicializar con letras
    enMessage.innerHTML = wrapTextInLetters(enMessage.textContent.trim());
    
    enBtn.addEventListener('click', () => {
      const currentText = enMessage.textContent.trim();
      const next = pickRandom(enIdeas, currentText);
      animateTextChange(enMessage, next);
    });
  }

  // One-time Python-like hero typing animation (ES / EN)
  const heroEs = document.querySelector('#hero-python-es');
  const heroEn = document.querySelector('#hero-python-en');

  const snippetEs = [
    'import time',
    '',
    '# Generar un pequeño reporte con Python',
    'def generar_reporte(datos):',
    '    resumen = analizar(datos)',
    '    guardar_en_bd(resumen)',
    '    return resumen',
    '',
    'if __name__ == "__main__":',
    '    datos = cargar("transacciones.csv")',
    '    reporte = generar_reporte(datos)',
    '    print("Reporte listo ✅", reporte)',
  ];

  const snippetEn = [
    'import time',
    '',
    '# Generate a small report with Python',
    'def build_report(data):',
    '    summary = analyze(data)',
    '    save_to_db(summary)',
    '    return summary',
    '',
    'if __name__ == "__main__":',
    '    data = load("transactions.csv")',
    '    report = build_report(data)',
    '    print("Report ready ✅", report)',
  ];

  const typeSnippet = (container, lines) => {
    if (!container) return;
    let lineIndex = 0;
    let charIndex = 0;
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      container.innerHTML = '';
      step();
    };

    const step = () => {
      if (lineIndex >= lines.length) return;
      const currentLine = lines[lineIndex];
      const existing = container.querySelectorAll('.python-code-line');

      // Ensure current line element exists
      let lineEl;
      if (existing[lineIndex]) {
        lineEl = existing[lineIndex];
      } else {
        lineEl = document.createElement('div');
        lineEl.className = 'python-code-line';
        const numberSpan = document.createElement('span');
        numberSpan.textContent = String(lineIndex + 1).padStart(2, '0');
        const codeSpan = document.createElement('span');
        lineEl.appendChild(numberSpan);
        lineEl.appendChild(codeSpan);
        container.appendChild(lineEl);
      }

      const codeSpan = lineEl.children[1];
      const visible = currentLine.slice(0, charIndex);

      codeSpan.textContent = visible;

      charIndex++;
      if (charIndex > currentLine.length) {
        charIndex = 0;
        lineIndex++;
      }

      setTimeout(step, 40);
    };

    // Observer to start when hero is visible (so it runs once on entry)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(container);
  };

  typeSnippet(heroEs, snippetEs);
  typeSnippet(heroEn, snippetEn);

  // Animate highlight on main menu items (Diseño + Programación + Innovacion + IA)
  const mainPill = document.querySelector('.pill[data-main-item]');
  if (mainPill) {
    mainPill.addEventListener('mouseenter', () => mainPill.classList.add('is-hover'));
    mainPill.addEventListener('mouseleave', () => mainPill.classList.remove('is-hover'));
  }

  // Typewriter effect for tesseract title
  const typewriterTitle = (element, text, speed = 80) => {
    if (!element) return;
    
    element.textContent = '';
    let index = 0;
    
    const type = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        // Remove cursor after typing is done
        setTimeout(() => {
          element.classList.add('typing-done');
        }, 500);
      }
    };
    
    type();
  };

  // Find tesseract title in the page (works for both ES and EN)
  const tesseractTitle = document.querySelector('.tesseract-section .tesseract-title');
  if (tesseractTitle) {
    const originalText = tesseractTitle.textContent;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typewriterTitle(tesseractTitle, originalText);
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(tesseractTitle);
  }

  // Crear líneas conectoras del hipercubo (representan la 4ta dimensión)
  const createHypercubeConnectors = () => {
    const hypercube = document.querySelector('.hypercube');
    if (!hypercube) return;

    // Coordenadas de los 8 vértices del cubo exterior (200x200px)
    const outerVertices = [
      { x: 0, y: 0, z: -100 },      // 0: front-top-left
      { x: 200, y: 0, z: -100 },    // 1: front-top-right
      { x: 200, y: 200, z: -100 },  // 2: front-bottom-right
      { x: 0, y: 200, z: -100 },    // 3: front-bottom-left
      { x: 0, y: 0, z: 100 },       // 4: back-top-left
      { x: 200, y: 0, z: 100 },     // 5: back-top-right
      { x: 200, y: 200, z: 100 },   // 6: back-bottom-right
      { x: 0, y: 200, z: 100 }      // 7: back-bottom-left
    ];

    // Coordenadas de los 8 vértices del cubo interior (120x120px, centrado)
    const innerOffset = 40; // (200-120)/2 = 40
    const innerVertices = [
      { x: innerOffset, y: innerOffset, z: -10 },           // 0: front-top-left
      { x: 200-innerOffset, y: innerOffset, z: -10 },       // 1: front-top-right
      { x: 200-innerOffset, y: 200-innerOffset, z: -10 },   // 2: front-bottom-right
      { x: innerOffset, y: 200-innerOffset, z: -10 },       // 3: front-bottom-left
      { x: innerOffset, y: innerOffset, z: 110 },           // 4: back-top-left
      { x: 200-innerOffset, y: innerOffset, z: 110 },       // 5: back-top-right
      { x: 200-innerOffset, y: 200-innerOffset, z: 110 },   // 6: back-bottom-right
      { x: innerOffset, y: 200-innerOffset, z: 110 }        // 7: back-bottom-left
    ];

    // Crear las 8 líneas conectoras (una por cada par de vértices correspondientes)
    for (let i = 0; i < 8; i++) {
      const outer = outerVertices[i];
      const inner = innerVertices[i];
      
      // Calcular distancia entre los puntos
      const dx = inner.x - outer.x;
      const dy = inner.y - outer.y;
      const dz = inner.z - outer.z;
      const length = Math.sqrt(dx*dx + dy*dy + dz*dz);
      
      // Calcular ángulos de rotación
      const angleY = Math.atan2(dx, dz) * (180 / Math.PI);
      const angleX = Math.atan2(dy, Math.sqrt(dx*dx + dz*dz)) * (180 / Math.PI);
      
      // Crear la línea
      const line = document.createElement('div');
      line.className = 'connector';
      line.style.height = `${length}px`;
      line.style.left = `${outer.x}px`;
      line.style.top = `${outer.y}px`;
      line.style.transformOrigin = 'top center';
      line.style.transform = `
        translateZ(${outer.z}px)
        rotateX(${-angleX}deg)
        rotateY(${angleY}deg)
      `;
      
      hypercube.appendChild(line);
    }
  };

  // Inicializar el hipercubo
  createHypercubeConnectors();

  // Animación del título de Skills
  const skillsTitle = document.querySelector('#skills .section-title');
  if (skillsTitle) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillsTitle.style.opacity = '0';
          skillsTitle.style.transform = 'translateY(-20px)';
          
          setTimeout(() => {
            skillsTitle.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            skillsTitle.style.opacity = '1';
            skillsTitle.style.transform = 'translateY(0)';
          }, 100);
          
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(skillsTitle);
  }

  // Animación de aparición de skill cards
  const skillCards = document.querySelectorAll('.skills-card');
  if (skillCards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    skillCards.forEach((card) => observer.observe(card));
  }

  // Animación de typing effect en los h3 de skills al hacer hover
  skillCards.forEach((card) => {
    const h3 = card.querySelector('h3');
    const originalText = h3.textContent;
    
    card.addEventListener('mouseenter', () => {
      // Ya no necesitamos el efecto de typing, solo la animación CSS
    });
  });

  // Animación del título de Proyectos Realizados
  const projectsTitle = document.querySelector('#projects .section-title');
  if (projectsTitle) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectsTitle.style.opacity = '0';
          projectsTitle.style.transform = 'translateY(-30px)';
          
          setTimeout(() => {
            projectsTitle.style.transition = 'all 1s ease-out';
            projectsTitle.style.opacity = '1';
            projectsTitle.style.transform = 'translateY(0)';
          }, 100);
          
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(projectsTitle);
  }

  // Animación de aparición de project cards
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    projectCards.forEach((card) => observer.observe(card));
  }

  // ===================================
  // CARRUSEL DE IMÁGENES EN EXPERIENCIA
  // ===================================
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  
  if (carouselWrapper) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;
    let autoplayInterval;

    const showSlide = (index) => {
      // Asegurar que el índice esté en rango
      if (index >= slides.length) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = index;
      }

      // Actualizar slides
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
          slide.classList.add('active');
        }
      });

      // Actualizar indicadores
      indicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === currentSlide) {
          indicator.classList.add('active');
        }
      });
    };

    const nextSlide = () => {
      showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
      showSlide(currentSlide - 1);
    };

    // Autoplay
    const startAutoplay = () => {
      autoplayInterval = setInterval(nextSlide, 4000); // Cambiar cada 4 segundos
    };

    const stopAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    };

    // Event listeners para botones
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoplay();
        startAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoplay();
        startAutoplay();
      });
    }

    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        showSlide(index);
        stopAutoplay();
        startAutoplay();
      });
    });

    // Pausar autoplay al hacer hover
    carouselWrapper.addEventListener('mouseenter', stopAutoplay);
    carouselWrapper.addEventListener('mouseleave', startAutoplay);

    // Iniciar autoplay
    startAutoplay();

    // Observer para iniciar cuando la sección sea visible
    const experienceSection = document.querySelector('#experience');
    if (experienceSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAutoplay();
          } else {
            stopAutoplay();
          }
        });
      }, { threshold: 0.3 });

      observer.observe(experienceSection);
    }
  }

  // Animación del título de Experiencia
  const experienceTitle = document.querySelector('#experience .section-title');
  if (experienceTitle) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          experienceTitle.style.opacity = '0';
          experienceTitle.style.transform = 'translateY(-30px)';
          
          setTimeout(() => {
            experienceTitle.style.transition = 'all 1s ease-out';
            experienceTitle.style.opacity = '1';
            experienceTitle.style.transform = 'translateY(0)';
          }, 100);
          
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(experienceTitle);
  }

  // ===================================
  // ANIMACIÓN DE PALABRAS ROTATIVAS EN BANNER
  // ===================================
  const rotatingWords = document.querySelector('.rotating-words');
  if (rotatingWords) {
    const words = rotatingWords.querySelectorAll('.word');
    let currentIndex = 0;

    const rotateWords = () => {
      // Remover clase active de todas las palabras
      words.forEach(word => word.classList.remove('active'));
      
      // Agregar clase active a la palabra actual
      words[currentIndex].classList.add('active');
      
      // Incrementar índice
      currentIndex = (currentIndex + 1) % words.length;
    };

    // Iniciar rotación cada 2 segundos
    setInterval(rotateWords, 2000);
  }

  // ===================================
  // CONTROL DE FLIP AUTOMÁTICO DE TARJETAS DE CONTACTO
  // ===================================
  const contactWrappers = document.querySelectorAll('.contact-card-wrapper');
  
  if (contactWrappers.length > 0) {
    // Agregar delay escalonado a cada tarjeta
    contactWrappers.forEach((wrapper, index) => {
      const flipper = wrapper.querySelector('.contact-card-flipper');
      if (flipper) {
        // Delay de 2.5 segundos entre cada tarjeta (10s / 4 cards)
        flipper.style.animationDelay = `${index * 2.5}s`;
      }
    });

    // Pausar animación al hacer hover y reanudar al salir
    contactWrappers.forEach((wrapper) => {
      const flipper = wrapper.querySelector('.contact-card-flipper');
      
      wrapper.addEventListener('mouseenter', () => {
        if (flipper) {
          flipper.style.animationPlayState = 'paused';
        }
      });

      wrapper.addEventListener('mouseleave', () => {
        if (flipper) {
          flipper.style.animationPlayState = 'running';
        }
      });
    });
  }

  // Observer para el banner de disponibilidad
  const availabilityBanner = document.querySelector('.availability-banner');
  if (availabilityBanner) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          availabilityBanner.style.opacity = '0';
          availabilityBanner.style.transform = 'translateY(-30px) scale(0.95)';
          
          setTimeout(() => {
            availabilityBanner.style.transition = 'all 1s ease-out';
            availabilityBanner.style.opacity = '1';
            availabilityBanner.style.transform = 'translateY(0) scale(1)';
          }, 100);
          
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(availabilityBanner);
  }

  // ===================================
  // ANIMACIÓN DE ENTRADA PARA TIMELINE ITEMS (EXPERIENCIA)
  // ===================================
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  if (timelineItems.length > 0) {
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Agregar clase para activar la animación
          entry.target.classList.add('animate-in');
          // Dejar de observar este elemento una vez animado
          timelineObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2, // Se activa cuando el 20% del elemento es visible
      rootMargin: '0px 0px -50px 0px' // Se activa un poco antes de que el elemento sea totalmente visible
    });

    // Observar cada item del timeline
    timelineItems.forEach((item) => {
      timelineObserver.observe(item);
    });
  }
});
