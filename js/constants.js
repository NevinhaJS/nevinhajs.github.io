export const animations = {
  Specials: [
    {
      name: "Pulse",
      value: "pulse"
    },
    {
      name: "Journal",
      value: "journal"
    },
    {
      name: "Dance",
      value: "dance"
    },
    {
      name: "Pulse Slow",
      value: "pulseSlow"
    },
    {
      name: "Rotate Scale",
      value: "rotateScale"
    }
  ],
  Bounce: [
    {
      name: "Enter Up Bounce",
      value: "enterUpBounce"
    },
    {
      name: "Enter Down Bounce",
      value: "enterDownBounce"
    },
    {
      name: "Enter Left Bounce",
      value: "enterLeftBounce"
    },
    {
      name: "Enter Right Bounce",
      value: "enterRightBounce"
    },
    {
      name: "Scale Bounce",
      value: "scaleBounce"
    },
    {
      name: "Jump Bounce",
      value: "jumpBounce"
    }
  ],
  "Fading Entrances": [
    {
      name: "Fade Out",
      value: "fadeOut"
    },
    {
      name: "Fade In",
      value: "fadeIn"
    }
  ],
  Agrecives: [
    {
      name: "Flash Bang",
      value: "flash"
    },
    {
      name: "Bomb",
      value: "bomb"
    },
  ]
}

export const isSafari = ()=> /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

export const isFirefox = typeof InstallTrigger !== 'undefined';
