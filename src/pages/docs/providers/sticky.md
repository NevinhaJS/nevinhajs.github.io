---
title: "Sticky Provider"
description: "Sticky provider is a way to fix your component in the screen until the height of it parent finish."
layout: "guide"
icon: "arrow-right-rod"
weight: 1
---

###### {$page.description}

<article id="1">

## How to use
In NevinhaJs, there's two ways to use providers in your application. Depending on how the provider has been implemented, you can use it as a inline provider, or as a component provider.

In the case of the sticky provider, it has been implemented as a inline provider, so the way for using it is very simple, you just need to parse `sticky` as a props of your component or HTML element. You can see a use case of the sticky provider in the code bellow:

```javascript
const MyComponent = (props, children) => (
  <section>
    <header sticky>
      This is my header fixed until the end of this section
    </header>
    <article>
      <p>Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. Lorem Ipsum har tålt tidens tann usedvanlig godt, og har i tillegg til å bestå gjennom fem århundrer også tålt spranget over til elektronisk typografi uten vesentlige endringer. Lorem Ipsum ble gjort allment kjent i 1960-årene ved lanseringen av Letraset-ark med avsnitt fra Lorem Ipsum, og senere med sideombrekkingsprogrammet Aldus PageMaker som tok i bruk nettopp Lorem Ipsum for dummytekst.</p>

      <br />

      <p>Det er et velkjent faktum at lesere distraheres av lesbart innhold på en side når man ser på dens layout. Poenget med å bruke Lorem Ipsum er at det har en mer eller mindre normal fordeling av bokstaver i ord, i motsetning til 'Innhold her, innhold her', og gir inntrykk av å være lesbar tekst. Mange webside- og sideombrekkingsprogrammer bruker nå Lorem Ipsum som sin standard for provisorisk tekst, og et søk etter 'Lorem Ipsum' vil avdekke mang en uferdig webside. Ulike versjoner har sprunget frem i senere år, noen ved rene uhell og andre mer planlagte (med humor o.l.).</p>
    </article>
  </section>
)
```

***Ps**: In that example above, we're using a state-less component, but you can use a state-full component as you prefer.*

### Custom sticky configuration

You can also configure your sticky position, all that you need is informing an object as value of your sticky props with your configuration values. For example:

```javascript
const MyComponent = (props, children) => (
  <section>
    <header sticky={{
      top: "20px"
    }}>
      This is my header fixed until the end of this section
    </header>
    <article>(...)</article>
  </section>
)
```

### What's next?
Now that you know how to use Sticky Provider, you can learn about [Parallax Provider in the next sextion](/docs/providers/parallax.html)
</article>