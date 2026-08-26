// Local SEO landing pages — genuine local content, no keyword stuffing.
export const seoPages = [
  {
    slug: "stock-market-classes-bhopal",
    h1: "Stock Market Classes in Bhopal",
    title: "Stock Market Classes in Bhopal | Arts Of Finance",
    description:
      "Mentor-led stock market classes in Bhopal covering technical analysis, fundamental analysis, options and more — offline and online. Book a free demo at Arts Of Finance.",
    intro:
      "Bhopal's interest in the markets has never been higher — and neither has the noise around it. Arts Of Finance was built to be the city's serious answer: a dedicated institute where stock market education is structured, practical and honest about risk.",
    body: [
      "Our classroom programs run in Bhopal with live chart-based teaching, while online batches serve learners across Madhya Pradesh and beyond. Every program — from Stock Market Foundation to advanced Options Trading — follows a written curriculum that progresses from concepts to guided practice.",
      "Whether you are a student exploring markets for the first time, a working professional building an investment skill, or an aspiring trader seeking structure, the learning path starts with a free demo session so you can experience the teaching before committing.",
    ],
    highlights: [
      "Mentor-led classroom learning in Bhopal",
      "Live chart and practical-market based teaching",
      "Structured curriculum from foundation to advanced",
      "Offline and online batch options",
      "Risk management and trading psychology in every program",
    ],
    relatedCourses: ["stock-market-foundation", "technical-analysis", "fundamental-analysis"],
  },
  {
    slug: "technical-analysis-course-bhopal",
    h1: "Technical Analysis Course in Bhopal",
    title: "Technical Analysis Course in Bhopal | Arts Of Finance",
    description:
      "Learn price action, market structure, candlesticks and chart patterns with a mentor-led technical analysis course in Bhopal. Free demo available.",
    intro:
      "Technical analysis is the craft of reading price — and it is best learned on live charts with a mentor, not from recycled slides. The Technical Analysis program at Arts Of Finance, Bhopal, is built exactly that way.",
    body: [
      "The curriculum moves through thirteen structured modules: from market structure and candlestick intelligence to demand-supply mapping, breakout frameworks, multi-timeframe analysis and a complete risk management system.",
      "Students practice on real charts throughout, building the pattern memory and discipline that separate analysis from guesswork. The program suits serious beginners as well as active traders who want a rule-based framework.",
    ],
    highlights: [
      "13 premium modules from structure to execution",
      "Practice-driven learning on real market charts",
      "Price action, patterns and momentum frameworks",
      "Dedicated risk management and psychology modules",
    ],
    relatedCourses: ["technical-analysis", "options-trading", "stock-market-foundation"],
  },
  {
    slug: "fundamental-analysis-course-bhopal",
    h1: "Fundamental Analysis Course in Bhopal",
    title: "Fundamental Analysis Course in Bhopal | Arts Of Finance",
    description:
      "Master financial statements, ratios and valuation with a practical fundamental analysis course in Bhopal at Arts Of Finance. Book a free demo.",
    intro:
      "Long-term wealth in equities comes from owning good businesses at sensible prices — and that requires reading businesses, not tips. The Fundamental Analysis program at Arts Of Finance teaches exactly that, step by step.",
    body: [
      "Across twelve modules, learners decode financial statements, balance sheets, cash flows, ratios, earnings, industries and valuation — culminating in an investor decision framework you can apply to any listed company.",
      "The course is designed for investors, students of finance and professionals who want research-driven conviction rather than market noise. No finance background is required — everything is built up from first principles.",
    ],
    highlights: [
      "Statement, ratio and valuation mastery from zero",
      "Industry and competitive advantage analysis",
      "Annual report reading intelligence",
      "A complete investor decision framework",
    ],
    relatedCourses: ["fundamental-analysis", "stock-market-foundation", "nism"],
  },
  {
    slug: "options-trading-course-bhopal",
    h1: "Options Trading Course in Bhopal",
    title: "Options Trading Course in Bhopal | Arts Of Finance",
    description:
      "Learn option chains, Greeks, volatility and strategy architecture with a risk-first options trading course in Bhopal. No profit guarantees — real education.",
    intro:
      "Options are the most powerful — and most misused — instruments in the market. The Options Trading program at Arts Of Finance, Bhopal, teaches derivatives the way they deserve: rigorously, and with risk at the center.",
    body: [
      "Fifteen modules cover the full stack: derivatives core, option chain and open interest intelligence, implied volatility, the complete Greeks command center, strategy architecture, spreads, hedging and a dedicated options risk engine with position sizing.",
      "We make no profit guarantees and teach no 'no-loss' strategies — because neither exists. What we build instead is genuine understanding, structured strategy design and the discipline to survive long enough to compound skill.",
    ],
    highlights: [
      "Greeks, volatility and OI taught as a command center",
      "Strategy architecture with spreads and hedging",
      "Risk engine and position sizing frameworks",
      "Honest education — zero profit promises",
    ],
    relatedCourses: ["options-trading", "technical-analysis", "stock-market-foundation"],
  },
  {
    slug: "stock-market-training-bhopal",
    h1: "Stock Market Training in Bhopal",
    title: "Stock Market Training in Bhopal | Arts Of Finance",
    description:
      "Professional stock market training in Bhopal — share market classes from foundation to advanced, offline and online, at Arts Of Finance. Free demo session.",
    intro:
      "Training is different from information. Information is everywhere; training is a structured path with practice, feedback and mentorship. That is what Arts Of Finance provides to market learners across Bhopal and Madhya Pradesh.",
    body: [
      "Our share market classes serve every level: the Foundation program for absolute beginners, Technical and Fundamental Analysis for serious learners, and advanced tracks in Options, Crypto and Forex for those ready to specialize. NISM-oriented learning supports those building market careers.",
      "Every batch — offline in Bhopal or live online — follows the same philosophy: concepts first, charts and examples always, risk management everywhere, and honesty about what markets can and cannot promise.",
    ],
    highlights: [
      "Complete path: foundation to advanced specializations",
      "Offline batches in Bhopal and live online batches",
      "Mentor guidance and student support throughout",
      "Free demo session before any enrollment",
    ],
    relatedCourses: ["stock-market-foundation", "technical-analysis", "nism"],
  },
];

export const getSeoPage = (slug) => seoPages.find((p) => p.slug === slug);
