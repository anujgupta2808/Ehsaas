let currentLang = "hi"; // default Hindi
let currentCategory = null; // track active category

  const quotesData = {
  love: [
    { hi: "प्यार शब्दों का मोहताज नहीं होता ❤️", en: "Love does not depend on words ❤️" },
    { hi: "तुम्हारी आदत सी हो गई है मुझे 💕", en: "You’ve become my sweetest habit 💕" },
    { hi: "इश्क़ वो एहसास है जो लफ़्ज़ों से नहीं, दिल से महसूस होता है ❤️", en: "Love is a feeling felt by the heart, not words ❤️" },
    { hi: "तुम पास ना भी हो, फिर भी हर जगह तुम्हारा एहसास है 💕", en: "Even if you’re not near, I feel your presence everywhere 💕" },
    { hi: "प्यार जताया नहीं जाता, बस हो जाता है 💖", en: "Love is not shown, it just happens 💖" },
    { hi: "तुम्हारी एक झलक ही काफी है, दिन बनाने के लिए ❤️", en: "Just one glimpse of you makes my day ❤️" },
    { hi: "इश्क़ की कोई वजह नहीं होती, बस हो जाता है 💞", en: "Love has no reason, it just happens 💞" },
    { hi: "तुम्हारा नाम ही सुकून बन जाता है मेरे लिए 💕", en: "Your name itself becomes peace for me 💕" },
    { hi: "दिल ने जब भी सुकून ढूंढा, तुम्हारा ही नाम आया ❤️", en: "Whenever my heart sought peace, it found your name ❤️" },
    { hi: "प्यार वो नहीं जो दिखाया जाए, प्यार वो है जो निभाया जाए 💖", en: "Love is not what’s shown, it’s what’s lived 💖" },
    { hi: "तुम्हारी खामोशी भी मुझे बहुत कुछ कह जाती है 💕", en: "Even your silence speaks volumes to me 💕" },
    { hi: "इश्क़ अधूरा हो सकता है, एहसास नहीं ❤️", en: "Love can be incomplete, but feelings never ❤️" },
    { hi: "तेरी मुस्कान ही मेरी सबसे बड़ी जीत है 💕", en: "Your smile is my greatest victory 💕" },
    { hi: "तेरे बिना हर खुशी अधूरी लगती है ❤️", en: "Every joy feels incomplete without you ❤️" },
    { hi: "तेरी यादों में ही मेरी दुनिया बसती है 💖", en: "My world lives in your memories 💖" },
    { hi: "तेरे साथ बिताया हर पल, मेरी ज़िंदगी का सबसे खूबसूरत हिस्सा है 💞", en: "Every moment with you is the most beautiful part of my life 💞" },
    { hi: "तेरी आँखों में जो सुकून है, वो कहीं और नहीं 💕", en: "The peace in your eyes exists nowhere else 💕" },
    { hi: "तेरे बिना ये दिल खाली सा लगता है ❤️", en: "Without you, this heart feels empty ❤️" },
    { hi: "तेरे साथ ही मेरी हर दुआ पूरी होती है 💖", en: "With you, all my prayers are fulfilled 💖" }
  ],

  sad: [
    { hi: "खामोशी सबसे गहरी चीख होती है 💔", en: "Silence is the deepest scream 💔" },
    { hi: "हम हंसते रहे और दर्द बढ़ता गया 😔", en: "We kept smiling, but the pain kept growing 😔" },
    { hi: "कुछ दर्द ऐसे होते हैं जो आंसुओं से नहीं, खामोशी से बहते हैं 😔", en: "Some pains flow not through tears, but through silence 😔" },
    { hi: "हमने मुस्कुराना सीख लिया, ताकि कोई दर्द न पढ़ सके 💔", en: "We learned to smile so no one could read our pain 💔" },
    { hi: "टूटकर भी चुप रहना, यही सबसे बड़ा दर्द होता है 😞", en: "Breaking inside yet staying silent is the greatest pain 😞" },
    { hi: "जो समझना चाहिए था, वही सबसे ज़्यादा अनजान निकले 💔", en: "The ones who should have understood turned out the most ignorant 💔" },
    { hi: "हम हारे नहीं थे, बस थक गए थे लड़ते-लड़ते 😔", en: "We didn’t lose, we just got tired of fighting 😔" },
    { hi: "दिल आज भी मान जाता है, मगर किस्मत नहीं 💔", en: "The heart still agrees, but fate does not 💔" },
    { hi: "खुद को संभालते-संभालते, बहुत कुछ टूट गया 😞", en: "While holding myself together, much broke inside 😞" },
    { hi: "दर्द की भी एक हद होती है, उसके बाद इंसान खामोश हो जाता है 💔", en: "Pain has a limit, beyond which a person becomes silent 💔" },
    { hi: "हमने सब कुछ कह दिया था, बस दर्द कहना भूल गए 😔", en: "We said everything, except our pain 😔" },
    { hi: "कभी-कभी चुप रहना ही सबसे सही जवाब होता है 💔", en: "Sometimes silence is the best answer 💔" },
    { hi: "कभी-कभी सबसे करीब लोग ही सबसे दूर हो जाते हैं 💔", en: "Sometimes the closest people become the farthest 💔" },
    { hi: "हमने चाहा सबको, मगर हमें कोई न समझ पाया 😔", en: "We loved everyone, but no one understood us 😔" },
    { hi: "दिल टूटने की आवाज़ कोई नहीं सुनता 💔", en: "No one hears the sound of a breaking heart 💔" },
    { hi: "खामोश रहना ही अब आदत बन गई है 😞", en: "Silence has now become a habit 😞" },
    { hi: "जिनसे उम्मीद थी, वही सबसे ज़्यादा दर्द दे गए 💔", en: "The ones we expected the most hurt us the most 💔" },
    { hi: "हम हंसते रहे ताकि कोई हमारे आँसू न देख सके 😔", en: "We kept laughing so no one could see our tears 😔" },
    { hi: "कभी-कभी अकेलापन ही सबसे बड़ा साथी बन जाता है 💔", en: "Sometimes loneliness becomes the biggest companion 💔" }
  ],

  motivation: [
    { hi: "खुद पर विश्वास रखो, जीत तुम्हारी होगी 🔥", en: "Believe in yourself, victory will be yours 🔥" },
    { hi: "संघर्ष ही सफलता की पहचान है 💪", en: "Struggle is the true identity of success 💪" },
    { hi: "जो खुद पर भरोसा रखता है, वही आगे बढ़ता है 💪", en: "The one who trusts himself moves forward 💪" },
    { hi: "हार तभी होती है, जब मान लिया जाए 🔥", en: "Defeat only happens when you accept it 🔥" },
    { hi: "मेहनत आज करो, चमको कल ✨", en: "Work hard today, shine tomorrow ✨" },
    { hi: "रुकना नहीं है, यही जीत की शुरुआत है 💪", en: "Don’t stop, that’s the beginning of victory 💪" },
    { hi: "संघर्ष के बिना सफलता अधूरी होती है 🔥", en: "Success is incomplete without struggle 🔥" },
    { hi: "अपने सपनों के लिए खुद से लड़ना पड़ता है 💪", en: "You must fight yourself for your dreams 💪" },
    { hi: "कदम छोटे हो सकते हैं, पर इरादे मजबूत होने चाहिए 🔥", en: "Steps may be small, but intentions must be strong 🔥" },
    { hi: "जो थक कर बैठ गया, वही हार गया 💪", en: "The one who sits tired is the one who lost 💪" },
    { hi: "आज की मेहनत ही कल की पहचान बनेगी 🔥", en: "Today’s hard work will be tomorrow’s identity 🔥" },
    { hi: "जब हौसले बुलंद हों, तो मंज़िल खुद करीब आती है 💪", en: "When courage is high, the destination comes closer 💪" },
    { hi: "सपने वो नहीं जो सोते वक्त आते हैं, सपने वो हैं जो नींद ही छीन लें 💪", en: "Dreams are not what you see while sleeping, they are what keep you awake 💪" },
    { hi: "कठिन रास्ते ही मंज़िल तक ले जाते हैं 🔥", en: "Only tough roads lead to the destination 🔥" },
    { hi: "सफलता उन्हीं को मिलती है जो हार मानना नहीं जानते 💪", en: "Success comes to those who don’t know how to quit 💪" },
    { hi: "हर गिरावट एक नई शुरुआत का मौका है ✨", en: "Every fall is a chance for a new beginning ✨" },
{ hi: "जो मेहनत करता है, वही चमकता है 🔥", en: "The one who works hard is the one who shines 🔥" },
{ hi: "सपनों को सच करने के लिए हिम्मत चाहिए 💪", en: "Courage is needed to turn dreams into reality 💪" },
{ hi: "कभी हार मत मानो, जीत बस एक कदम दूर है 🔥", en: "Never give up, victory is just one step away 🔥" }
],
  life: [
    { hi: "ज़िंदगी वही है जो आज है 🌿", en: "Life is only what exists today 🌿" },
{ hi: "हर दिन एक नया मौका है ✨", en: "Every day is a new opportunity ✨" },
{ hi: "जो पल आज है, वही सबसे कीमती है 🌿", en: "The moment you have today is the most precious 🌿" },
{ hi: "कल की चिंता छोड़ो, आज को जीना सीखो ✨", en: "Forget tomorrow’s worries, learn to live today ✨" },
{ hi: "ज़िंदगी सवाल नहीं, एक खूबसूरत सफ़र है 🌱", en: "Life is not a question, it’s a beautiful journey 🌱" },
{ hi: "हर सुबह नई उम्मीद लेकर आती है 🌞", en: "Every morning brings new hope 🌞" },
{ hi: "जो मिला है उसी में सुकून ढूंढना ही ज़िंदगी है 🌿", en: "Finding peace in what you have is life 🌿" },
{ hi: "वक़्त बदलता है, और वही ज़िंदगी सिखाता है ✨", en: "Time changes, and that’s what teaches life ✨" },
{ hi: "छोटी-छोटी खुशियों में ही बड़ी ज़िंदगी छुपी है 🌱", en: "Big life is hidden in small joys 🌱" },
{ hi: "आज मुस्कुरा लो, कल का भरोसा नहीं 🌿", en: "Smile today, tomorrow is never certain 🌿" },
{ hi: "ज़िंदगी रुकती नहीं, हमें चलना सिखाती है ✨", en: "Life never stops, it teaches us to keep moving ✨" },
{ hi: "जो है उसी में खुश रहना ही असली अमीरी है 🌿", en: "True wealth is being happy with what you have 🌿" },
{ hi: "ज़िंदगी छोटी है, इसे मुस्कुराकर जीना सीखो 🌿", en: "Life is short, learn to live it with a smile 🌿" },
{ hi: "हर पल को ऐसे जियो जैसे आखिरी हो ✨", en: "Live every moment as if it’s your last ✨" },
{ hi: "ज़िंदगी का असली मज़ा छोटी खुशियों में है 🌱", en: "The real joy of life lies in small happiness 🌱" },
{ hi: "हर दिन एक नया सबक सिखाता है 🌞", en: "Every day teaches a new lesson 🌞" },
{ hi: "ज़िंदगी वही है जो हम इसे बनाते हैं 🌿", en: "Life is what we make of it 🌿" },
{ hi: "खुश रहना ही सबसे बड़ी कला है ✨", en: "Happiness itself is the greatest art ✨" },
{ hi: "ज़िंदगी को आसान बनाओ, मुश्किलें खुद आसान हो जाएंगी 🌱", en: "Make life simple, and difficulties will ease themselves 🌱" }
  ]
};

// Show quotes by category (Explore button uses this)
function showQuotes(category) {
  currentCategory = category; // remember active category
  const container = document.getElementById("quoteContainer");
  container.innerHTML = "";

  quotesData[category].forEach(q => {
    const div = document.createElement("div");
    div.className = "quote-box";
    div.innerText = q[currentLang]; // show based on current language
    container.appendChild(div);
  });

  // Explore button should scroll into view
  document.getElementById("quotes").scrollIntoView({ behavior: "smooth" });
}

// Scroll to About section (Explore Ehsaas button)
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

// Random Quote of the Day (shown in hero section)
function showRandomQuote() {
  const allQuotes = [
    ...quotesData.love,
    ...quotesData.sad,
    ...quotesData.motivation,
    ...quotesData.life
  ];
  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  document.getElementById("randomQuote").innerText = allQuotes[randomIndex][currentLang];
}

// Toggle language (Translate button only updates text, no scroll)
function toggleLanguage() {
  currentLang = currentLang === "hi" ? "en" : "hi";
  showRandomQuote(); // update hero quote

  // If a category is already active, refresh it in the new language
  if (currentCategory) {
    const container = document.getElementById("quoteContainer");
    container.innerHTML = "";
    quotesData[currentCategory].forEach(q => {
      const div = document.createElement("div");
      div.className = "quote-box";
      div.innerText = q[currentLang];
      container.appendChild(div);
    });
    // ⚠️ Notice: no scroll here
  }

  // Update button text
  document.getElementById("langBtn").innerText =
    currentLang === "hi" ? "Translate to English" : "Translate to Hindi";
}

// Run random quote on page load
window.onload = () => {
  showRandomQuote();
  document.getElementById("langBtn").innerText = "Translate to English";
};