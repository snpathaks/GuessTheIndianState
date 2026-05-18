const STATES_DATA = [
  {
    answer: "Rajasthan",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "This state is famous for the Pushkar Camel Fair, the Ghoomar folk dance performed by women in colorful ghagras, and the vibrant Teej festival." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Its signature dishes include Dal Baati Churma — a hearty combination of lentil curry, baked wheat balls, and sweetened crushed wheat. Ghewar is its iconic festive sweet." },
      { icon: "🏰", label: "Iconic Monument",        text: "Home to the magnificent Amber Fort, the imposing Mehrangarh Fort in Jodhpur, and the fairy-tale Umaid Bhawan Palace. It is India's largest state by area." }
    ]
  },
  {
    answer: "Kerala",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Known as 'God's Own Country', this state celebrates Onam with elaborate Pookalam (flower carpets) and the stunning Vallamkali snake boat races on its backwaters." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Appam with coconut stew, Karimeen Pollichathu (pearl spot fish in banana leaf), and Puttu are beloved here. Coconut and curry leaves are the soul of every dish." },
      { icon: "🏰", label: "Iconic Monument",        text: "Famous for its tranquil backwaters of Alleppey, the Padmanabhaswamy Temple in Thiruvananthapuram, and lush tea gardens of Munnar in the Western Ghats." }
    ]
  },
  {
    answer: "Punjab",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "The land of Bhangra and Giddha folk dances! Baisakhi, the harvest festival celebrated in April, involves energetic Bhangra performances and processions called Nagar Kirtan." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Globally beloved for Butter Chicken, Sarson da Saag with Makki di Roti, Chole Bhature, and fluffy Amritsari kulchas baked in a tandoor oven." },
      { icon: "🏰", label: "Iconic Monument",        text: "The Golden Temple (Harmandir Sahib) in Amritsar — Sikhism's holiest shrine — gleams in the Amrit Sarovar lake. The Wagah Border ceremony here is breathtaking." }
    ]
  },
  {
    answer: "West Bengal",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Durga Puja here is not merely a festival — it is a UNESCO-recognized cultural phenomenon. Massive pandals (temporary temples) feature incredible artistic installations every October." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Macher Jhol (fish curry), Mishti Doi (sweet yogurt), Rasgulla (born right here!), and Kosha Mangsho are the pride of Bengali cuisine. Mustard oil is the kitchen king." },
      { icon: "🏰", label: "Iconic Monument",        text: "The Victoria Memorial in Kolkata — a grand white marble monument — stands as a masterpiece of Indo-Saracenic architecture. Howrah Bridge is one of the world's busiest." }
    ]
  },
  {
    answer: "Tamil Nadu",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Bharatanatyam, one of India's oldest classical dance forms, originated here. Pongal, the harvest festival in January, is celebrated with decorated kolam patterns and sugarcane." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Idli-Sambar, Dosa, Chettinad Chicken Curry, and filter coffee poured from a height are iconic here. Rice is the staple consumed in every meal." },
      { icon: "🏰", label: "Iconic Monument",        text: "The Brihadeeswarar Temple in Thanjavur — a UNESCO World Heritage site built by the Chola dynasty — features a 66-metre vimana tower. Marina Beach is the world's longest urban beach." }
    ]
  },
  {
    answer: "Gujarat",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Navratri here is the world's largest dance festival — nine nights of Garba and Dandiya Raas with thousands of participants in traditional attire. Uttarayan (kite festival) lights up January skies." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Dhokla, Thepla, Khandvi, Undhiyu (a mixed vegetable dish), and Fafda-Jalebi for breakfast are must-tries. Gujarati thali is famous for its sweet, salty, and tangy balance." },
      { icon: "🏰", label: "Iconic Monument",        text: "The Statue of Unity — the world's tallest statue (182m) — stands near Kevadia. Gir National Park is the world's only wild Asiatic lion habitat. The Rann of Kutch hosts a spectacular white salt festival." }
    ]
  },
  {
    answer: "Goa",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Famous for Carnival — a pre-Lent festival with parades, music, and floats reflecting 450 years of Portuguese influence. The Shigmo festival features traditional folk dances like Fugdi and Dhalo." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Goan Fish Curry with red rice, Prawn Balchao (spicy pickled prawns), Bebinca (layered coconut dessert), and Vindaloo (tangy pork dish) define the coastal cuisine here." },
      { icon: "🏰", label: "Iconic Monument",        text: "The Basilica of Bom Jesus — a UNESCO World Heritage site — houses the preserved remains of St. Francis Xavier. Golden beaches of Calangute and Palolem, plus Portuguese forts, draw millions annually." }
    ]
  },
  {
    answer: "Uttarakhand",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "This 'Land of Gods' (Devbhoomi) is home to Char Dham pilgrimage sites. The Kedarnath Mahotsav and Phool Dei (flower festival) celebrate the arrival of spring in the Himalayas." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Kafuli (spinach & fenugreek curry), Chainsoo (black gram dal), Aloo Gutuk, and Bal Mithai (fudge coated with white sugar balls) are the comfort foods of Kumaoni and Garhwali kitchens." },
      { icon: "🏰", label: "Iconic Monument",        text: "Kedarnath and Badrinath temples sit high in the Himalayas. Jim Corbett National Park is India's oldest national park. Valley of Flowers is a UNESCO World Heritage site of alpine blooms." }
    ]
  },
  {
    answer: "Maharashtra",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Ganesh Chaturthi is celebrated with unmatched grandeur — massive clay Ganesha idols are paraded and immersed in the sea over 10 days. The Lavani folk dance is known for its powerful rhythm and expressive performance." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Vada Pav (India's favourite street burger), Misal Pav (sprout curry with bread), Puran Poli (sweet flatbread), and Modak (Lord Ganesha's favourite sweet) are quintessential here." },
      { icon: "🏰", label: "Iconic Monument",        text: "The Ajanta and Ellora caves — UNESCO World Heritage sites — feature stunning ancient rock-cut Buddhist, Jain, and Hindu temples. The Gateway of India in Mumbai is an iconic arch monument on the Arabian Sea." }
    ]
  },
  {
    answer: "Odisha",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Odissi is one of India's oldest classical dance styles, originating in the temples here. The Rath Yatra (Chariot Festival) at Puri — where massive chariots carry Lord Jagannath — draws millions of devotees." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Dalma (lentils cooked with vegetables and coconut), Pakhala Bhata (fermented rice), Chhena Poda (caramelised cottage cheese dessert), and Machha Besara (fish in mustard sauce) are staples." },
      { icon: "🏰", label: "Iconic Monument",        text: "The Konark Sun Temple — a 13th-century marvel shaped as a colossal chariot of the Sun God — is a UNESCO World Heritage site. The Jagannath Temple at Puri is one of the four sacred Dhams of Hinduism." }
    ]
  },
  {
    answer: "Madhya Pradesh",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Known as the 'Heart of India'. The Khajuraho Dance Festival held against the backdrop of the ancient Khajuraho temples is a premier classical arts event. Lokrang and Tansen Music Festival are also beloved." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Poha (flattened rice breakfast dish) with jalebi is iconic here. Bhutte ka Kees (grated corn), Daal Bafla (MP's version of dal baati), and Chakki ki Shaak are also local favourites." },
      { icon: "🏰", label: "Iconic Monument",        text: "The Khajuraho temples (UNESCO), Sanchi Stupa (one of the world's oldest stone structures), and Gwalior Fort are treasures here. Kanha and Bandhavgarh tiger reserves are legendary." }
    ]
  },
  {
    answer: "Himachal Pradesh",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "The Kullu Dussehra is unique — seven days of international fair featuring hundreds of local deities (devtas) carried in palanquins. Losar (Tibetan New Year) is celebrated in Lahaul-Spiti." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Sidu (fermented wheat bread steamed and served with ghee & dal), Tudkiya Bhath (spiced rice), Chha Gosht (lamb in yogurt-based gravy), and Babru (deep-fried black gram pastry) are local gems." },
      { icon: "🏰", label: "Iconic Monument",        text: "Shimla's colonial Mall Road and Christ Church, Rohtang Pass, and the stunning Spiti Valley with the Key Monastery perched at 4,000m are hallmarks of this mountain state." }
    ]
  },
  {
    answer: "Assam",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Bihu — celebrated three times a year (Rongali, Kongali, Bhogali) — is the heartbeat of Assamese identity, featuring the energetic Bihu dance with drumbeats of the dhol. The festival marks the agricultural cycle." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Masor Tenga (sour fish curry), Pork with bamboo shoots, Khar (a unique alkali dish), and sticky rice cooked in bamboo (Sunga Pitha) define the earthy, indigenous flavours of this state." },
      { icon: "🏰", label: "Iconic Monument",        text: "Kaziranga National Park — a UNESCO site home to two-thirds of the world's one-horned rhinoceroses — is its jewel. The Kamakhya Temple in Guwahati is one of the most powerful Shakti Peethas in Hinduism." }
    ]
  },
  {
    answer: "Karnataka",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Mysore Dasara is a 10-day royal festival where the golden-howdah elephant procession is iconic — the Mysore Palace is illuminated with 100,000 bulbs. Yakshagana is a dramatic traditional theatre art form here." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Bisi Bele Bath (hot lentil rice), Mysore Pak (rich ghee sweet), Ragi Mudde (finger millet balls), Udupi cuisine (temple food), and Neer Dosa with coconut chutney are legendary here." },
      { icon: "🏰", label: "Iconic Monument",        text: "The Mysore Palace is India's most visited monument after the Taj Mahal. Hampi — a UNESCO site — contains ruins of the Vijayanagara Empire. Jog Falls, India's highest plunge waterfall, cascades here." }
    ]
  },
  {
    answer: "Andhra Pradesh",
    clues: [
      { icon: "🎭", label: "Culture & Festival",    text: "Kuchipudi is its classical dance form — acrobatic and expressive, performed with a water pot balanced on the head. The Ugadi festival (Telugu New Year) and Brahmotsavam at Tirupati are grand celebrations." },
      { icon: "🍛", label: "Famous Cuisine",         text: "Andhra cuisine is the spiciest in India! Gongura Mutton (red sorrel lamb), Pesarattu (green moong dosa), Hyderabadi Biryani (shared with Telangana), and Pulihora (tamarind rice) are staples." },
      { icon: "🏰", label: "Iconic Monument",        text: "Tirumala Venkateswara Temple in Tirupati — the world's most visited place of worship — receives 100,000 pilgrims daily. The ancient Amaravati stupa and coastal Araku Valley are also iconic." }
    ]
  }
];

const ALL_STATES_LIST = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const state = {
  questions:       [],    
  currentIndex:    0,     
  currentHint:     0,     
  score:           0,     
  streak:          0,     
  bestStreak:      0,     
  selectedState:   null,  
  roundLocked:     false, 
  timerInterval:   null,  
  timerStart:      null,  
  timerDuration:   25,    
  roundLog:        [],    
  totalCorrect:    0,     
  POINTS:          [30, 20, 10],  
};

const $  = id => document.getElementById(id);
const dom = {
  
  screenWelcome:  $("screen-welcome"),
  screenGame:     $("screen-game"),
  screenGameover: $("screen-gameover"),

  
  hudScore:      $("hud-score"),
  hudStreak:     $("hud-streak"),
  fireEmoji:     $("fire-emoji"),
  progressDots:  $("progress-dots"),

  
  timerBar:   $("timer-bar"),
  timerText:  $("timer-text"),

  
  gameCard:      $("game-card"),
  roundCurrent:  $("round-current"),
  roundTotal:    $("round-total"),
  cluesContainer: $("clues-container"),
  pointsBadge:   $("points-badge"),
  ptsValue:      $("pts-value"),
  answerRow:     $("answer-row"),

  
  selectWrap:      $("select-wrap"),
  selectTrigger:   $("select-trigger"),
  selectDisplay:   $("select-display"),
  selectDropdown:  $("select-dropdown"),
  stateSearch:     $("state-search"),
  stateList:       $("state-list"),

  
  btnHint:    $("btn-hint"),
  btnSubmit:  $("btn-submit"),
  btnNext:    $("btn-next"),
  btnStart:   $("btn-start"),
  btnRestart: $("btn-restart"),

  
  hintCount: $("hint-count"),

  
  feedback: $("feedback"),

  
  resultsBadge:    $("results-badge"),
  resultsTitle:    $("results-title"),
  resultsSubtitle: $("results-subtitle"),
  resScore:        $("res-score"),
  resAccuracy:     $("res-accuracy"),
  resStreak:       $("res-streak"),
  resAvg:          $("res-avg"),
  breakdownList:   $("breakdown-list"),
};

(function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  const ctx    = canvas.getContext("2d");

  
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  
  const PARTICLE_COUNT = 55;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle());

  function createParticle() {
    return {
      x:       Math.random() * window.innerWidth,
      y:       Math.random() * window.innerHeight,
      r:       Math.random() * 2.5 + .5,       
      dx:      (Math.random() - .5) * .35,      
      dy:      (Math.random() - .5) * .35,      
      alpha:   Math.random() * .35 + .05,       
      
      color:   [
        "129,140,248",  
        "167,139,250",  
        "249,115,22",   
        "56,189,248",   
      ][Math.floor(Math.random() * 4)],
    };
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();

      
      p.x += p.dx;
      p.y += p.dy;

      
      if (p.x < -5)                  p.x = canvas.width  + 5;
      if (p.x > canvas.width  + 5)   p.x = -5;
      if (p.y < -5)                  p.y = canvas.height + 5;
      if (p.y > canvas.height + 5)   p.y = -5;
    }
    requestAnimationFrame(drawParticles);
  }

  drawParticles();
})();

function showScreen(name) {
  ["screenWelcome", "screenGame", "screenGameover"].forEach(key => {
    dom[key].classList.add("hidden");
    dom[key].classList.remove("active");
  });
  dom[name].classList.remove("hidden");
  dom[name].classList.add("active");
  
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("how-it-works-toggle").addEventListener("click", () => {
  const panel = document.getElementById("how-it-works-panel");
  panel.classList.toggle("hidden");
});

dom.btnStart.addEventListener("click", startGame);
dom.btnRestart.addEventListener("click", startGame);

function startGame() {
  
  state.questions     = shuffle([...STATES_DATA]);  
  state.currentIndex  = 0;
  state.score         = 0;
  state.streak        = 0;
  state.bestStreak    = 0;
  state.totalCorrect  = 0;
  state.roundLog      = [];

  
  updateHUD();

  
  buildProgressDots();

  
  showScreen("screenGame");
  setupRound();
}

function setupRound() {
  const q = state.questions[state.currentIndex];

  
  state.currentHint  = 0;   
  state.selectedState = null;
  state.roundLocked  = false;

  
  dom.roundCurrent.textContent = state.currentIndex + 1;
  dom.roundTotal.textContent   = state.questions.length;

  
  highlightDot(state.currentIndex);

  
  dom.cluesContainer.innerHTML = "";
  hideFeedback();
  dom.btnNext.classList.add("hidden");

  
  renderClue(0);

  
  updateHintLabel();

  
  updatePointsBadge();

  
  resetDropdown();

  
  dom.btnSubmit.disabled = true;      
  dom.btnHint.disabled   = false;
  dom.btnHint.classList.remove("hidden");

  
  checkHintAvailability();

  
  startTimer();
}

function renderClue(index) {
  const q    = state.questions[state.currentIndex];
  const clue = q.clues[index];

  const card = document.createElement("div");
  card.className = `clue-card clue-${index + 1}`;
  card.innerHTML = `
    <div class="clue-icon-wrap">${clue.icon}</div>
    <div>
      <div class="clue-label">${clue.label}</div>
      <div class="clue-text">${clue.text}</div>
    </div>
  `;
  dom.cluesContainer.appendChild(card);
}

dom.btnHint.addEventListener("click", () => {
  
  if (state.currentHint >= 2 || state.roundLocked) return;

  state.currentHint++;          
  renderClue(state.currentHint); 
  updateHintLabel();
  updatePointsBadge();
  checkHintAvailability();
});

function updateHintLabel() {
  dom.hintCount.textContent = `Hint ${state.currentHint + 1} of 3`;
}

function updatePointsBadge() {
  const pts = state.POINTS[state.currentHint];
  dom.ptsValue.textContent = pts;
  dom.pointsBadge.classList.toggle("reduced", state.currentHint > 0);
}

function checkHintAvailability() {
  dom.btnHint.disabled = state.currentHint >= 2;
}

function startTimer() {
  clearInterval(state.timerInterval);   
  state.timerStart = Date.now();

  
  dom.timerBar.style.width = "100%";
  dom.timerBar.classList.remove("low", "danger");

  state.timerInterval = setInterval(tickTimer, 250); 
}

function tickTimer() {
  if (state.roundLocked) {
    clearInterval(state.timerInterval);
    return;
  }

  const elapsed  = (Date.now() - state.timerStart) / 1000;
  const remaining = Math.max(0, state.timerDuration - elapsed);
  const pct      = (remaining / state.timerDuration) * 100;

  
  dom.timerBar.style.width = pct + "%";

  
  if (pct <= 15) {
    dom.timerBar.classList.add("danger");
    dom.timerBar.classList.remove("low");
  } else if (pct <= 40) {
    dom.timerBar.classList.add("low");
    dom.timerBar.classList.remove("danger");
  }

  
  if (remaining <= 0) {
    clearInterval(state.timerInterval);
    handleTimeout();
  }
}

function stopTimer() {
  clearInterval(state.timerInterval);
}

function buildStateList() {
  dom.stateList.innerHTML = "";
  ALL_STATES_LIST.forEach(name => {
    const li = document.createElement("li");
    li.textContent    = name;
    li.dataset.value  = name;
    li.addEventListener("click", () => selectState(name, li));
    dom.stateList.appendChild(li);
  });
}
buildStateList();

dom.selectTrigger.addEventListener("click", toggleDropdown);
dom.selectTrigger.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") toggleDropdown();
});

function toggleDropdown() {
  if (state.roundLocked) return;
  const isOpen = !dom.selectDropdown.classList.contains("hidden");
  if (isOpen) closeDropdown();
  else         openDropdown();
}

function openDropdown() {
  dom.selectDropdown.classList.remove("hidden");
  dom.selectTrigger.classList.add("open");
  dom.stateSearch.value = "";
  filterStates("");        
  dom.stateSearch.focus();
}

function closeDropdown() {
  dom.selectDropdown.classList.add("hidden");
  dom.selectTrigger.classList.remove("open");
}

dom.stateSearch.addEventListener("input", e => filterStates(e.target.value.trim().toLowerCase()));

function filterStates(query) {
  dom.stateList.querySelectorAll("li").forEach(li => {
    const match = li.dataset.value.toLowerCase().includes(query);
    li.classList.toggle("hidden", !match);
  });
}

function selectState(name, li) {
  state.selectedState = name;

  
  dom.selectDisplay.textContent = name;
  dom.selectDisplay.classList.add("selected");

  
  dom.stateList.querySelectorAll("li").forEach(el => el.classList.remove("selected"));
  li.classList.add("selected");

  closeDropdown();
  dom.btnSubmit.disabled = false;   
}

function resetDropdown() {
  state.selectedState = null;
  dom.selectDisplay.textContent = "Choose a state…";
  dom.selectDisplay.classList.remove("selected");
  dom.stateList.querySelectorAll("li").forEach(li => li.classList.remove("selected"));
  dom.btnSubmit.disabled = true;
}

document.addEventListener("click", e => {
  if (!dom.selectWrap.contains(e.target)) closeDropdown();
});

dom.btnSubmit.addEventListener("click", handleSubmit);

function handleSubmit() {
  if (state.roundLocked || !state.selectedState) return;

  const q       = state.questions[state.currentIndex];
  const correct = state.selectedState === q.answer;
  const pts     = correct ? state.POINTS[state.currentHint] : 0;

  lockRound();          
  stopTimer();

  if (correct) {
    
    state.score        += pts;
    state.streak++;
    state.bestStreak    = Math.max(state.bestStreak, state.streak);
    state.totalCorrect++;

    showFeedback("correct", `✅ Correct! It's ${q.answer}! +${pts} pts`);
    dom.gameCard.classList.add("correct-flash");
    setTimeout(() => dom.gameCard.classList.remove("correct-flash"), 700);

    triggerConfetti();   

    
    state.roundLog.push({ state: q.answer, correct: true, pts, hintsUsed: state.currentHint });

  } else {
    
    state.streak = 0;    

    showFeedback("wrong", `❌ Not quite! The answer is: ${q.answer}`);
    dom.gameCard.classList.add("shake");
    setTimeout(() => dom.gameCard.classList.remove("shake"), 500);

    
    revealAllClues();

    state.roundLog.push({ state: q.answer, correct: false, pts: 0, hintsUsed: state.currentHint });
  }

  updateHUD();
  showNextButton();
}

function showFeedback(type, message) {
  dom.feedback.textContent  = message;
  dom.feedback.className    = `feedback ${type}`;
  dom.feedback.classList.remove("hidden");
}

function hideFeedback() {
  dom.feedback.classList.add("hidden");
  dom.feedback.textContent = "";
}

function handleTimeout() {
  if (state.roundLocked) return;
  const q = state.questions[state.currentIndex];

  state.streak = 0;   
  lockRound();
  stopTimer();

  showFeedback("timeout", `⏱️ Time's up! The answer was: ${q.answer}`);
  revealAllClues();

  state.roundLog.push({ state: q.answer, correct: false, pts: 0, hintsUsed: state.currentHint, timeout: true });

  updateHUD();
  showNextButton();
}

function revealAllClues() {
  const q = state.questions[state.currentIndex];
  for (let i = state.currentHint + 1; i < q.clues.length; i++) {
    renderClue(i);
  }
}

function lockRound() {
  state.roundLocked = true;
  dom.btnHint.disabled   = true;
  dom.btnSubmit.disabled = true;
  closeDropdown();
}

function showNextButton() {
  dom.btnNext.classList.remove("hidden");
}

dom.btnNext.addEventListener("click", advanceRound);

function advanceRound() {
  
  markDot(state.currentIndex, state.roundLog.at(-1));

  state.currentIndex++;

  if (state.currentIndex >= state.questions.length) {
    
    showGameOver();
  } else {
    setupRound();
  }
}

function showGameOver() {
  stopTimer();

  const total    = state.questions.length;
  const accuracy = Math.round((state.totalCorrect / total) * 100);
  const avgPts   = Math.round(state.score / total);
  const maxPts   = total * 30;
  const pct      = (state.score / maxPts) * 100;

  
  let badge, title, subtitle;
  if (pct >= 75) {
    badge    = "👑";
    title    = "Maharaja of Maps!";
    subtitle = "Extraordinary! You have mastered the cultural mosaic of India. Jai Hind!";
  } else if (pct >= 45) {
    badge    = "🏛️";
    title    = "Cultural Expert";
    subtitle = "Impressive knowledge of India's diverse heritage. Keep exploring!";
  } else {
    badge    = "🧭";
    title    = "Explorer";
    subtitle = "A good start on your journey through Incredible India. Keep learning!";
  }

  
  dom.resultsBadge.textContent    = badge;
  dom.resultsTitle.textContent    = title;
  dom.resultsSubtitle.textContent = subtitle;
  dom.resScore.textContent        = state.score;
  dom.resAccuracy.textContent     = accuracy + "%";
  dom.resStreak.textContent       = state.bestStreak;
  dom.resAvg.textContent          = avgPts;

  
  dom.breakdownList.innerHTML = "";
  state.roundLog.forEach((entry, i) => {
    const item = document.createElement("div");
    item.className = "breakdown-item";
    item.style.animationDelay = (i * 40) + "ms";

    const resultIcon = entry.correct ? "✅" : (entry.timeout ? "⏱️" : "❌");
    const hintLabel  = ["1st Clue", "2nd Clue", "3rd Clue"][entry.hintsUsed] || "3rd Clue";

    item.innerHTML = `
      <span class="bi-result">${resultIcon}</span>
      <span class="bi-state">${entry.state}</span>
      <span class="bi-hint">${hintLabel}</span>
      <span class="bi-pts">${entry.pts > 0 ? "+" + entry.pts : "0"} pts</span>
    `;
    dom.breakdownList.appendChild(item);
  });

  showScreen("screenGameover");

  
  if (pct >= 75) triggerConfetti(true);
}

function triggerConfetti(big = false) {
  if (typeof confetti === "undefined") return;  

  if (big) {
    
    const duration = 3000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 6, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#f97316","#818cf8","#38bdf8","#4ade80","#fbbf24"] });
      confetti({ particleCount: 6, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#f97316","#818cf8","#38bdf8","#4ade80","#fbbf24"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  } else {
    
    confetti({
      particleCount: 60,
      spread:        70,
      origin:        { y: 0.6 },
      colors:        ["#4ade80", "#a78bfa", "#fbbf24", "#38bdf8"],
    });
  }
}

function updateHUD() {
  
  dom.hudScore.textContent = state.score;
  dom.hudScore.classList.remove("pop");
  void dom.hudScore.offsetWidth;  
  dom.hudScore.classList.add("pop");

  
  dom.hudStreak.childNodes[0].textContent = state.streak + " ";
  const showFire = state.streak >= 3;
  dom.fireEmoji.classList.toggle("hidden", !showFire);
}

function buildProgressDots() {
  dom.progressDots.innerHTML = "";
  state.questions.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.id = `dot-${i}`;
    dom.progressDots.appendChild(dot);
  });
}

function highlightDot(index) {
  dom.progressDots.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("current", i === index);
  });
}

function markDot(index, logEntry) {
  const dot = document.getElementById(`dot-${index}`);
  if (!dot) return;
  dot.classList.remove("current");
  if (logEntry.correct)      dot.classList.add("correct");
  else if (logEntry.timeout) dot.classList.add("timeout");
  else                       dot.classList.add("wrong");
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
