const ParticlesSetting = {
  parallax: {
    autoPlay: true,
    background: {
      color: { value: '#7200a5' },
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
      opacity: 1,
    },
    backgroundMask: {
      composite: 'destination-out',
      cover: {
        color: { value: '#fff' },
        opacity: 1,
      },
      enable: false,
    },
    backgroundMode: {
      enable: false,
      zIndex: -1,
    },
    detectRetina: true,
    fpsLimit: 60,
    infection: {
      cure: false,
      delay: 0,
      enable: false,
      infections: 0,
      stages: [],
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: 'circle',
        },
        onHover: {
          enable: false,
          mode: 'grab',
          parallax: {
            enable: true,
            force: 40,
            smooth: 20,
          },
        },
        resize: true,
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          speed: 1,
        },
        bounce: { distance: 200 },
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        connect: {
          distance: 80,
          links: { opacity: 0.5 },
          radius: 60,
        },
        grab: {
          distance: 400,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        light: {
          area: {
            gradient: {
              start: { value: '#ffffff' },
              stop: { value: '#000000' },
            },
            radius: 1000,
          },
          shadow: {
            color: { value: '#000000' },
            length: 2000,
          },
        },
        push: { quantity: 4 },
        remove: { quantity: 2 },
        repulse: {
          distance: 200,
          duration: 0.4,
          speed: 1,
        },
        slow: {
          factor: 3,
          radius: 200,
        },
        trail: {
          delay: 1,
          quantity: 1,
        },
      },
    },
    manualParticles: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: false,
      },
    },
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      collisions: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        enable: false,
        mode: 'bounce',
      },
      color: {
        value: '#ffffff',
        animation: {
          enable: false,
          speed: 1,
          sync: true,
        },
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          sync: false,
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001,
          },
          value: 0,
          sync: false,
        },
      },
      links: {
        blink: false,
        color: { value: '#ffffff' },
        consent: false,
        distance: 150,
        enable: true,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: { value: '#00ff00' },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      move: {
        angle: {
          offset: 45,
          value: 90,
        },
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        direction: 'none',
        distance: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          maxSpeed: 50,
        },
        noise: {
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
          },
          enable: false,
        },
        outModes: {
          default: 'out',
          bottom: 'out',
          left: 'out',
          right: 'out',
          top: 'out',
        },
        random: false,
        size: false,
        speed: 2,
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fillColor: { value: '#000000' },
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
          factor: 1000,
        },
        limit: 100,
        value: 100,
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        value: 0.5,
        animation: {
          enable: true,
          minimumValue: 0.1,
          speed: 3,
          sync: false,
        },
      },
      reduceDuplicates: false,
      rotate: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          sync: false,
        },
        direction: 'clockwise',
        path: false,
      },
      shadow: {
        blur: 0,
        color: { value: '#000000' },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: 10,
        animation: {
          destroy: 'none',
          enable: true,
          minimumValue: 0.1,
          speed: 20,
          startValue: 'max',
          sync: false,
        },
      },
      stroke: {
        width: 0,
        color: {
          value: '#000000',
          animation: {
            enable: false,
            speed: 1,
            sync: true,
          },
        },
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: false,
    themes: [],
  },
  snow: {
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'repulse',
        },
        onHover: {
          enable: true,
          mode: 'bubble',
        },
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 0.3,
          opacity: 1,
          size: 4,
        },
        grab: {
          distance: 400,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      links: {
        color: {
          value: '#ffffff',
        },
        distance: 500,
        opacity: 0.4,
        width: 2,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        direction: 'bottom',
        enable: true,
        outModes: {
          bottom: 'out',
          left: 'out',
          right: 'out',
          top: 'out',
        },
      },
      number: {
        density: {
          enable: true,
        },
        limit: 250,
        value: 250,
      },
      opacity: {
        random: {
          enable: true,
        },
        value: 0.5,
        animation: {
          minimumValue: 0.1,
          speed: 1,
        },
      },
      size: {
        random: {
          enable: true,
        },
        value: 10,
        animation: {
          minimumValue: 0.1,
          speed: 40,
        },
      },
      stroke: {
        color: {
          value: '#000000',
          animation: {
            enable: false,
            speed: 1,
            sync: true,
          },
        },
      },
    },
  },
  stars: {
    background: {
      color: '#000',
    },
    detectRetina: false,
    fpsLimit: 60,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        resize: true,
      },
    },
    particles: {
      color: {
        value: '#fff',
      },
      number: {
        density: {
          enable: true,
          area: 1080,
        },
        limit: 500,
        value: 400,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.05,
          speed: 0.25,
          sync: false,
        },
        random: {
          enable: true,
          minimumValue: 0.05,
        },
        value: 1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: {
          enable: true,
          minimumValue: 0.5,
        },
        value: 1,
      },
    },
  },
};

export default ParticlesSetting;
