/* كنوز من السنة — TREASURES FROM THE SUNNAH — app.js v2.0 */
/* Based on "Kunuz min al-Sunnah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'كنوز من السنة',
    splashSub: 'أحاديث نبوية للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة النجم ٥٣: ٣-٤',
    tabHome: 'الرئيسية', tabTraits: 'الأحاديث', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'كنوز نبوية',
    traitsDesc: '١٥ حديثاً نبوياً من كتاب الشيخ محمد الغزالي — كل حديث بآية وشرح وتطبيق عملي',
    quizTitle: '🏆 من سيصبح حافظاً؟',
    quizDesc: 'اختبر معلوماتك عن أحاديث النبي ﷺ — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي مع السنة',
    progressDesc: 'تقدمك وإنجازاتك في رحلة الأحاديث',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية نبوية',
    dailyLabel: '✨ حديث اليوم',
    searchPlaceholder: 'ابحث في الأحاديث...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ حديثاً نبوياً من كتاب كنوز من السنة',
      'مسابقة "من سيصبح حافظاً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Treasures from the Sunnah',
    splashSub: 'Prophetic hadiths for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah An-Najm 53:3-4',
    tabHome: 'Home', tabTraits: 'Hadiths', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Prophetic Treasures',
    traitsDesc: '15 prophetic hadiths from Sheikh al-Ghazali — each with a verse, explanation, and practical application',
    quizTitle: '🏆 Who Wants to Be a Hafiz?',
    quizDesc: 'Test your knowledge of the Prophet\'s hadiths — 4 choices per question',
    progressTitle: 'My Sunnah Journey',
    progressDesc: 'Your progress and achievements in the hadith journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Prophetic Duas',
    dailyLabel: "✨ Today's Hadith",
    searchPlaceholder: 'Search hadiths...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 prophetic hadiths from Treasures from the Sunnah',
      '"Who Wants to Be a Hafiz?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Trésors de la Sunnah',
    splashSub: 'Hadiths prophétiques pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate An-Najm 53:3-4',
    tabHome: 'Accueil', tabTraits: 'Hadiths', tabQuiz: 'Quiz',
    tabProgress: 'Progrès', tabAbout: 'Livre',
    traitsTitle: 'Trésors Prophétiques',
    traitsDesc: '15 hadiths prophétiques du livre du Sheikh al-Ghazali — chacun avec un verset, une explication et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Hafiz ?',
    quizDesc: 'Testez vos connaissances sur les hadiths du Prophète — 4 choix par question',
    progressTitle: 'Mon Parcours Sunnah',
    progressDesc: 'Vos progrès et réalisations dans le parcours des hadiths',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas Prophétiques',
    dailyLabel: '✨ Hadith du Jour',
    searchPlaceholder: 'Rechercher les hadiths...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Expérience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consécutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Réf. Coran',
    correct: 'Bravo ! Bonne réponse ! 🎉',
    wrong: 'Réessayez la prochaine fois 💪',
    quizComplete: 'Quiz Terminé !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Débutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Persévérant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 hadiths prophétiques du livre Trésors de la Sunnah',
      'Quiz « Qui Veut Devenir Hafiz ? » avec récompenses',
      'Système de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 HADITH CARDS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'💎',
    ar:{title:'حديث النية',desc:'النية أساس كل عمل في الإسلام. لا يُقبل عمل بلا نية صالحة. فالعمل الصالح مع نية فاسدة كالجسد بلا روح، والنية الصادقة ترفع أبسط الأعمال إلى أعلى الدرجات.',verse:'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ',verseRef:'البينة ٥',hadith:'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى — متفق عليه',action:'جدد نيتك الآن: قبل كل عمل اسأل نفسك — لماذا أفعل هذا؟ هل هو لله؟',young:'قبل أي شيء تفعله، اسأل نفسك: لماذا أفعل هذا؟ اجعل كل شيء لله! 💎'},
    en:{title:'Hadith of Intention',desc:'Intention is the foundation of every deed in Islam. No deed is accepted without a sincere intention. A good deed with a corrupt intention is like a body without a soul, while a sincere intention elevates the simplest acts to the highest ranks.',verse:'They were only commanded to worship Allah with sincerity in religion',verseRef:'Al-Bayyinah 5',hadith:'Actions are but by intentions, and every person will have only what they intended — Agreed upon',action:'Renew your intention now: before every action ask yourself — why am I doing this? Is it for God?',young:'Before you do anything, ask yourself: why am I doing this? Make everything for Allah! 💎'},
    fr:{title:"Hadith de l'Intention",desc:"L'intention est le fondement de tout acte en Islam. Aucun acte n'est accepté sans intention sincère. Une bonne action avec une intention corrompue est comme un corps sans âme, tandis qu'une intention sincère élève les actes les plus simples.",verse:"Ils n'ont été commandés que d'adorer Allah en Lui vouant un culte sincère",verseRef:'Al-Bayyinah 5',hadith:'Les actes ne valent que par les intentions, et chaque personne aura ce qu\'elle a eu l\'intention de faire — Unanimement reconnu',action:'Renouvelez votre intention maintenant : avant chaque action demandez-vous — pourquoi je fais cela ?',young:'Avant de faire quoi que ce soit, demande-toi : pourquoi je fais cela ? Fais tout pour Allah ! 💎'}
  },
  {
    id:2, emoji:'🤝',
    ar:{title:'حديث اللطف',desc:'الرفق واللطف من أعظم صفات المسلم. النبي ﷺ كان ألطف الناس. الرفق يزين كل شيء ويُنتزع منه يشوهه. اللطف ليس ضعفاً بل هو قوة الحكماء.',verse:'فَبِمَا رَحْمَةٍ مِنَ اللَّهِ لِنْتَ لَهُمْ',verseRef:'آل عمران ١٥٩',hadith:'إن الرفق لا يكون في شيء إلا زانه ولا ينزع من شيء إلا شانه — رواه مسلم',action:'كن لطيفاً اليوم مع كل من تقابله — ابتسم وتكلم بهدوء حتى مع من يغضبك',young:'كن لطيفاً مع الجميع! الابتسامة واللطف يجعلان العالم أجمل 🤝'},
    en:{title:'Hadith of Kindness',desc:'Gentleness and kindness are among the greatest qualities of a Muslim. The Prophet (PBUH) was the kindest of all people. Gentleness adorns everything it touches and its absence disgraces everything. Kindness is not weakness — it is the strength of the wise.',verse:'It was by the mercy of Allah that you were gentle with them',verseRef:'Al Imran 159',hadith:'Kindness is not found in anything except that it adorns it, and it is not removed from anything except that it disgraces it — Muslim',action:'Be kind today to everyone you meet — smile and speak calmly even with those who anger you',young:'Be kind to everyone! A smile and kindness make the world more beautiful 🤝'},
    fr:{title:'Hadith de la Gentillesse',desc:"La douceur et la gentillesse sont parmi les plus grandes qualités du musulman. Le Prophète (PSL) était le plus gentil de tous. La douceur embellit tout ce qu'elle touche et son absence enlaidit tout. La gentillesse n'est pas faiblesse — c'est la force des sages.",verse:"C'est par la miséricorde d'Allah que tu as été doux avec eux",verseRef:'Al Imran 159',hadith:"La douceur n'est pas dans une chose sans l'embellir, et elle n'est pas retirée d'une chose sans l'enlaidir — Muslim",action:"Soyez gentil aujourd'hui avec tous ceux que vous rencontrez — souriez et parlez calmement",young:'Sois gentil avec tout le monde ! Un sourire et la gentillesse rendent le monde plus beau 🤝'}
  },
  {
    id:3, emoji:'📚',
    ar:{title:'حديث طلب العلم',desc:'طلب العلم فريضة على كل مسلم ومسلمة. العلم نور يهدي صاحبه في ظلمات الجهل. من سلك طريق العلم سهل الله له طريقاً إلى الجنة. العلم ميراث الأنبياء.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له به طريقاً إلى الجنة — رواه مسلم',action:'تعلم شيئاً جديداً اليوم: اقرأ صفحة من كتاب أو احفظ حديثاً جديداً',young:'تعلم شيئاً جديداً كل يوم! اقرأ كتاباً واحفظ حديثاً جميلاً 📚'},
    en:{title:'Hadith of Seeking Knowledge',desc:'Seeking knowledge is an obligation upon every Muslim, male and female. Knowledge is a light that guides its seeker through the darkness of ignorance. Whoever follows a path seeking knowledge, Allah makes their path to Paradise easy. Knowledge is the inheritance of the prophets.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Learn something new today: read a page from a book or memorize a new hadith',young:'Learn something new every day! Read a book and memorize a beautiful hadith 📚'},
    fr:{title:'Hadith de la Quête du Savoir',desc:"La quête du savoir est une obligation pour chaque musulman et musulmane. Le savoir est une lumière qui guide son chercheur dans les ténèbres de l'ignorance. Quiconque emprunte un chemin vers le savoir, Allah lui facilite un chemin vers le Paradis.",verse:'Dis : Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'Quiconque emprunte un chemin vers le savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:"Apprenez quelque chose de nouveau aujourd'hui : lisez une page ou mémorisez un nouveau hadith",young:'Apprends quelque chose de nouveau chaque jour ! Lis un livre et mémorise un beau hadith 📚'}
  },
  {
    id:4, emoji:'🕊️',
    ar:{title:'حديث الصبر',desc:'الصبر نصف الإيمان. المسلم يصبر على البلاء ويشكر على النعمة. الصبر ليس ضعفاً بل هو قوة عظيمة تمنح صاحبها ثباتاً وسكينة. ما أُعطي أحد عطاءً خيراً من الصبر.',verse:'إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ',verseRef:'الزمر ١٠',hadith:'ما أُعطي أحد عطاءً خيراً وأوسع من الصبر — متفق عليه',action:'عندما تواجه صعوبة اليوم، تذكر أن الصبر مفتاح الفرج وأن الله مع الصابرين',young:'الصبر قوة خارقة! عندما تواجه شيئاً صعباً، خذ نفساً عميقاً وتذكر أن الله معك 🕊️'},
    en:{title:'Hadith of Patience',desc:'Patience is half of faith. A Muslim is patient in trials and grateful for blessings. Patience is not weakness — it is a great strength that grants its owner steadfastness and tranquility. No one has been given a gift better than patience.',verse:'The patient will be given their reward without measure',verseRef:'Az-Zumar 10',hadith:'No one has been given a gift better and more comprehensive than patience — Agreed upon',action:'When you face difficulty today, remember that patience is the key to relief and that Allah is with the patient',young:'Patience is a superpower! When you face something hard, take a deep breath and remember Allah is with you 🕊️'},
    fr:{title:'Hadith de la Patience',desc:"La patience est la moitié de la foi. Le musulman est patient dans les épreuves et reconnaissant pour les bienfaits. La patience n'est pas faiblesse — c'est une grande force qui accorde constance et sérénité.",verse:'Les patients recevront leur récompense sans mesure',verseRef:'Az-Zumar 10',hadith:"Personne n'a reçu un don meilleur et plus vaste que la patience — Unanimement reconnu",action:"Face à une difficulté aujourd'hui, rappelez-vous que la patience est la clé du soulagement",young:"La patience est un super-pouvoir ! Face à quelque chose de difficile, respire et souviens-toi qu'Allah est avec toi 🕊️"}
  },
  {
    id:5, emoji:'🤲',
    ar:{title:'حديث الأخوّة',desc:'المؤمنون إخوة يتحابون ويتعاونون. مثلهم كمثل الجسد الواحد إذا اشتكى منه عضو تداعى له سائر الجسد. لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.',verse:'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ',verseRef:'الحجرات ١٠',hadith:'لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه — متفق عليه',action:'تواصل اليوم مع صديق لم تكلمه منذ فترة — أخبره أنك تحبه في الله',young:'كن صديقاً رائعاً! أحب لأصدقائك ما تحبه لنفسك وساعدهم دائماً 🤲'},
    en:{title:'Hadith of Brotherhood',desc:'Believers are brothers and sisters who love and help each other. They are like one body — when one part hurts, the whole body responds. None of you truly believes until you love for your brother what you love for yourself.',verse:'The believers are but brothers',verseRef:'Al-Hujurat 10',hadith:'None of you truly believes until you love for your brother what you love for yourself — Agreed upon',action:'Reach out today to a friend you have not spoken to in a while — tell them you care about them',young:'Be an amazing friend! Love for your friends what you love for yourself and always help them 🤲'},
    fr:{title:"Hadith de la Fraternité",desc:"Les croyants sont des frères et soeurs qui s'aiment et s'entraident. Ils sont comme un seul corps — quand une partie souffre, tout le corps réagit. Aucun de vous ne croit vraiment tant qu'il n'aime pas pour son frère ce qu'il aime pour lui-même.",verse:'Les croyants ne sont que des frères',verseRef:'Al-Hujurat 10',hadith:"Aucun de vous ne croit vraiment tant qu'il n'aime pas pour son frère ce qu'il aime pour lui-même — Unanimement reconnu",action:"Contactez un ami que vous n'avez pas vu depuis longtemps — dites-lui que vous tenez à lui",young:"Sois un ami formidable ! Aime pour tes amis ce que tu aimes pour toi-même et aide-les toujours 🤲"}
  },
  {
    id:6, emoji:'❤️',
    ar:{title:'حديث بر الوالدين',desc:'بر الوالدين من أعظم العبادات بعد الصلاة. رضا الله في رضا الوالدين وسخط الله في سخطهما. الجنة تحت أقدام الأمهات. من أحسن إلى والديه أحسن الله إليه.',verse:'وَقَضَى رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا',verseRef:'الإسراء ٢٣',hadith:'رضا الله في رضا الوالد وسخط الله في سخط الوالد — رواه الترمذي',action:'اتصل بوالديك الآن أو قبّل يدهما وقل لهما: أحبكما في الله',young:'أحب ماما وبابا كثيراً! ساعدهما وأطعهما واجعلهما سعيدين كل يوم ❤️'},
    en:{title:'Hadith of Honoring Parents',desc:'Honoring parents is one of the greatest acts of worship after prayer. Allah\'s pleasure lies in the pleasure of parents, and His displeasure in theirs. Paradise is at the feet of mothers. Whoever is good to their parents, Allah will be good to them.',verse:'And your Lord has decreed that you worship none but Him, and that you be good to your parents',verseRef:'Al-Isra 23',hadith:'Allah\'s pleasure is in the pleasure of the parent, and Allah\'s displeasure is in the displeasure of the parent — Tirmidhi',action:'Call your parents now or kiss their hands and tell them: I love you for the sake of Allah',young:'Love your mom and dad so much! Help them, obey them, and make them happy every day ❤️'},
    fr:{title:'Hadith du Respect des Parents',desc:"Honorer les parents est l'un des plus grands actes d'adoration après la prière. La satisfaction d'Allah est dans celle des parents, et Son mécontentement dans le leur. Le Paradis est aux pieds des mères.",verse:"Et ton Seigneur a décrété que vous n'adoriez que Lui et que vous soyez bons envers vos parents",verseRef:'Al-Isra 23',hadith:"La satisfaction d'Allah est dans celle du parent, et le mécontentement d'Allah est dans celui du parent — Tirmidhi",action:'Appelez vos parents maintenant ou embrassez leurs mains et dites-leur : je vous aime pour Allah',young:'Aime maman et papa très fort ! Aide-les, obéis-leur et rends-les heureux chaque jour ❤️'}
  },
  {
    id:7, emoji:'🏠',
    ar:{title:'حديث حق الجار',desc:'الجار له حق عظيم في الإسلام. أوصى جبريل النبي ﷺ بالجار حتى ظن أنه سيورثه. لا يدخل الجنة من لا يأمن جاره بوائقه. الإحسان إلى الجار من علامات الإيمان.',verse:'وَالْجَارِ ذِي الْقُرْبَى وَالْجَارِ الْجُنُبِ',verseRef:'النساء ٣٦',hadith:'ما زال جبريل يوصيني بالجار حتى ظننت أنه سيورثه — متفق عليه',action:'أهدِ جارك شيئاً اليوم — حتى لو كان طبقاً من الطعام أو ابتسامة وسلاماً',young:'كن جاراً رائعاً! قل السلام لجيرانك وشاركهم الطعام والابتسامات 🏠'},
    en:{title:'Hadith of Neighbor Rights',desc:'Neighbors have great rights in Islam. Angel Jibreel kept advising the Prophet (PBUH) about the neighbor until he thought the neighbor would be given inheritance rights. Whoever\'s neighbor is not safe from their harm does not enter Paradise.',verse:'And the neighbor who is near and the neighbor who is a stranger',verseRef:'An-Nisa 36',hadith:'Jibreel kept advising me about the neighbor until I thought he would give them inheritance — Agreed upon',action:'Gift your neighbor something today — even if it is a plate of food or a smile and greeting',young:'Be an awesome neighbor! Say hello to your neighbors and share food and smiles with them 🏠'},
    fr:{title:'Hadith du Droit du Voisin',desc:"Le voisin a de grands droits en Islam. L'ange Jibreel n'a cessé de recommander le voisin au Prophète (PSL) jusqu'à ce qu'il pense qu'il lui donnerait un droit d'héritage. Celui dont le voisin n'est pas en sécurité n'entre pas au Paradis.",verse:'Et le voisin qui est proche et le voisin qui est étranger',verseRef:'An-Nisa 36',hadith:"Jibreel n'a cessé de me recommander le voisin jusqu'à ce que je pense qu'il lui donnerait l'héritage — Unanimement reconnu",action:"Offrez quelque chose à votre voisin aujourd'hui — même un plat de nourriture ou un sourire",young:'Sois un voisin formidable ! Dis bonjour à tes voisins et partage nourriture et sourires 🏠'}
  },
  {
    id:8, emoji:'⚖️',
    ar:{title:'حديث الصدق',desc:'الصدق أساس الأخلاق. الصدق يهدي إلى البر والبر يهدي إلى الجنة. الكذب يهدي إلى الفجور والفجور يهدي إلى النار. المسلم الصادق يكتب عند الله صدّيقاً.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ',verseRef:'التوبة ١١٩',hadith:'عليكم بالصدق فإن الصدق يهدي إلى البر وإن البر يهدي إلى الجنة — متفق عليه',action:'كن صادقاً اليوم في كل كلمة تقولها — حتى لو كان الصدق صعباً',young:'كن صادقاً دائماً! الصدق مثل النور — يجعل الجميع يحبونك ويثقون بك ⚖️'},
    en:{title:'Hadith of Honesty',desc:'Honesty is the foundation of all morals. Truthfulness leads to righteousness, and righteousness leads to Paradise. Lying leads to wickedness, and wickedness leads to the Fire. A truthful Muslim is recorded with Allah as a truthful person.',verse:'O you who believe, fear Allah and be with the truthful',verseRef:'At-Tawbah 119',hadith:'Be truthful, for truthfulness leads to righteousness, and righteousness leads to Paradise — Agreed upon',action:'Be honest today in every word you say — even if the truth is difficult',young:'Always be honest! Honesty is like a light — it makes everyone love and trust you ⚖️'},
    fr:{title:"Hadith de l'Honnêteté",desc:"L'honnêteté est le fondement de toutes les vertus. La véracité mène à la droiture et la droiture mène au Paradis. Le mensonge mène à l'immoralité et l'immoralité mène au Feu. Un musulman véridique est inscrit auprès d'Allah comme véridique.",verse:'Ô vous qui croyez, craignez Allah et soyez avec les véridiques',verseRef:'At-Tawbah 119',hadith:"Soyez véridiques, car la véracité mène à la droiture et la droiture mène au Paradis — Unanimement reconnu",action:"Soyez honnête aujourd'hui dans chaque parole — même si la vérité est difficile",young:"Sois toujours honnête ! L'honnêteté est comme la lumière — elle fait que tout le monde t'aime et te fait confiance ⚖️"}
  },
  {
    id:9, emoji:'🌿',
    ar:{title:'حديث العفو والمغفرة',desc:'العفو من أشرف الأخلاق. من عفا وأصلح فأجره على الله. النبي ﷺ عفا عن أهل مكة يوم الفتح رغم كل ما فعلوه به. العفو يطهر القلب ويرفع صاحبه.',verse:'وَلْيَعْفُوا وَلْيَصْفَحُوا أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللَّهُ لَكُمْ',verseRef:'النور ٢٢',hadith:'ما نقصت صدقة من مال وما زاد الله عبداً بعفو إلا عزاً — رواه مسلم',action:'سامح شخصاً أساء إليك اليوم — حرر قلبك من الحقد والغضب',young:'سامح من أخطأ في حقك! القلب النظيف أجمل من الانتقام 🌿'},
    en:{title:'Hadith of Forgiveness',desc:'Forgiveness is one of the noblest traits. Whoever forgives and reconciles, their reward is with Allah. The Prophet (PBUH) forgave the people of Makkah on the day of conquest despite everything they did to him. Forgiveness purifies the heart and elevates its owner.',verse:'Let them pardon and overlook — would you not like that Allah should forgive you?',verseRef:'An-Nur 22',hadith:'Charity does not decrease wealth, and Allah does not increase a servant in forgiveness except in honor — Muslim',action:'Forgive someone who wronged you today — free your heart from resentment and anger',young:'Forgive those who hurt you! A clean heart is more beautiful than revenge 🌿'},
    fr:{title:'Hadith du Pardon',desc:"Le pardon est l'un des traits les plus nobles. Celui qui pardonne et réconcilie, sa récompense est auprès d'Allah. Le Prophète (PSL) a pardonné aux gens de la Mecque le jour de la conquête malgré tout ce qu'ils lui ont fait.",verse:"Qu'ils pardonnent — N'aimeriez-vous pas qu'Allah vous pardonne ?",verseRef:'An-Nur 22',hadith:"La charité ne diminue pas la richesse, et Allah n'augmente un serviteur en pardon qu'en honneur — Muslim",action:"Pardonnez à quelqu'un qui vous a fait du tort — libérez votre coeur de la rancune",young:'Pardonne à ceux qui t\'ont blessé ! Un coeur propre est plus beau que la vengeance 🌿'}
  },
  {
    id:10, emoji:'🎁',
    ar:{title:'حديث الصدقة',desc:'الصدقة لا تنقص المال بل تزيده بركة. كل معروف صدقة — الابتسامة صدقة والكلمة الطيبة صدقة وإماطة الأذى عن الطريق صدقة. الصدقة تطفئ غضب الرب.',verse:'مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً',verseRef:'البقرة ٢٤٥',hadith:'كل معروف صدقة — رواه البخاري',action:'تصدق اليوم بشيء: ابتسامة أو كلمة طيبة أو مال أو وقت تقضيه في مساعدة محتاج',young:'كل شيء جميل تفعله هو صدقة! ابتسم وساعد الآخرين وشارك ما عندك 🎁'},
    en:{title:'Hadith of Charity',desc:'Charity does not decrease wealth — it increases its blessings. Every good deed is charity — a smile is charity, a kind word is charity, and removing harm from the road is charity. Charity extinguishes the anger of the Lord.',verse:'Who is it that would loan Allah a goodly loan so He will multiply it for him many times over?',verseRef:'Al-Baqarah 245',hadith:'Every good deed is charity — Bukhari',action:'Give charity today: a smile, a kind word, money, or time spent helping someone in need',young:'Every beautiful thing you do is charity! Smile, help others, and share what you have 🎁'},
    fr:{title:"Hadith de l'Aumône",desc:"L'aumône ne diminue pas la richesse — elle augmente sa bénédiction. Tout bon acte est une aumône — un sourire est aumône, une bonne parole est aumône, et enlever un obstacle du chemin est aumône.",verse:'Qui est celui qui prêtera à Allah un beau prêt pour qu\'Il le multiplie plusieurs fois ?',verseRef:'Al-Baqarah 245',hadith:'Tout bon acte est une aumône — Bukhari',action:"Donnez une aumône aujourd'hui : un sourire, une bonne parole, de l'argent ou du temps",young:'Chaque belle chose que tu fais est une aumône ! Souris, aide les autres et partage 🎁'}
  },
  {
    id:11, emoji:'🕌',
    ar:{title:'حديث الصلاة',desc:'الصلاة عمود الدين وأول ما يُحاسب عليه العبد. هي صلة بين العبد وربه. من حافظ عليها كانت له نوراً وبرهاناً ونجاة يوم القيامة. الصلاة تنهى عن الفحشاء والمنكر.',verse:'إِنَّ الصَّلَاةَ تَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ',verseRef:'العنكبوت ٤٥',hadith:'العهد الذي بيننا وبينهم الصلاة فمن تركها فقد كفر — رواه الترمذي',action:'صلِّ الصلوات الخمس في وقتها اليوم — وأضف ركعتي سنة مع كل صلاة',young:'حافظ على صلاتك! الصلاة مثل الحبل الذي يربطك بالله — لا تتركها أبداً 🕌'},
    en:{title:'Hadith of Prayer',desc:'Prayer is the pillar of religion and the first thing a servant is questioned about. It is the connection between the servant and their Lord. Whoever maintains it will have light, proof, and salvation on the Day of Judgment. Prayer forbids immorality and wrongdoing.',verse:'Indeed, prayer forbids immorality and wrongdoing',verseRef:'Al-Ankabut 45',hadith:'The covenant between us and them is prayer; whoever abandons it has disbelieved — Tirmidhi',action:'Pray all five prayers on time today — and add two sunnah units with each prayer',young:'Keep your prayers! Prayer is like a rope connecting you to Allah — never leave it 🕌'},
    fr:{title:'Hadith de la Prière',desc:"La prière est le pilier de la religion et la première chose sur laquelle le serviteur sera interrogé. C'est le lien entre le serviteur et son Seigneur. Celui qui la maintient aura lumière, preuve et salut au Jour du Jugement.",verse:"Certes, la prière préserve de la turpitude et du blâmable",verseRef:'Al-Ankabut 45',hadith:'Le pacte entre nous et eux est la prière ; quiconque l\'abandonne a mécru — Tirmidhi',action:"Priez les cinq prières à l'heure aujourd'hui — et ajoutez deux rakaat sunnah avec chacune",young:'Garde tes prières ! La prière est comme une corde qui te lie à Allah — ne la laisse jamais 🕌'}
  },
  {
    id:12, emoji:'🌙',
    ar:{title:'حديث الصيام',desc:'الصيام جُنة — أي وقاية من النار والمعاصي. الصائم له فرحتان: فرحة عند فطره وفرحة عند لقاء ربه. الصيام يعلم الصبر والإحساس بالفقراء ويقوي الإرادة.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ',verseRef:'البقرة ١٨٣',hadith:'الصيام جُنة فلا يرفث ولا يجهل — متفق عليه',action:'صم يوماً تطوعاً هذا الأسبوع — واشعر بإحساس الفقراء والمحتاجين',young:'الصيام يعلمك الصبر! عندما تصوم تشعر بالفقراء وتتعلم التحكم في نفسك 🌙'},
    en:{title:'Hadith of Fasting',desc:'Fasting is a shield — protection from the Fire and from sins. The fasting person has two joys: joy when breaking fast and joy when meeting their Lord. Fasting teaches patience, empathy for the poor, and strengthens willpower.',verse:'O you who believe, fasting has been prescribed for you',verseRef:'Al-Baqarah 183',hadith:'Fasting is a shield, so one should not use foul language or act ignorantly — Agreed upon',action:'Fast a voluntary day this week — and feel what the poor and needy experience',young:'Fasting teaches you patience! When you fast, you feel what poor people feel and learn self-control 🌙'},
    fr:{title:'Hadith du Jeûne',desc:"Le jeûne est un bouclier — protection contre le Feu et les péchés. Le jeûneur a deux joies : la joie à la rupture et la joie à la rencontre de son Seigneur. Le jeûne enseigne la patience et l'empathie envers les pauvres.",verse:'Ô vous qui croyez, le jeûne vous a été prescrit',verseRef:'Al-Baqarah 183',hadith:"Le jeûne est un bouclier, qu'on n'use pas de propos obscènes ni d'ignorance — Unanimement reconnu",action:'Jeûnez un jour volontaire cette semaine — ressentez ce que vivent les pauvres',young:'Le jeûne t\'apprend la patience ! Quand tu jeûnes, tu ressens ce que les pauvres ressentent 🌙'}
  },
  {
    id:13, emoji:'🌻',
    ar:{title:'حديث الشكر',desc:'الشكر يزيد النعم والكفر بها يزيلها. من لم يشكر الناس لم يشكر الله. الشكر يكون بالقلب والسان والعمل. انظروا إلى من هو أسفل منكم ولا تنظروا إلى من هو فوقكم.',verse:'لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ',verseRef:'إبراهيم ٧',hadith:'من لا يشكر الناس لا يشكر الله — رواه الترمذي',action:'اشكر ٥ أشخاص اليوم على شيء فعلوه لك — وقل الحمد لله ١٠ مرات',young:'قل الحمد لله كل يوم! واشكر كل من يساعدك — ماما وبابا ومعلمك وأصدقاءك 🌻'},
    en:{title:'Hadith of Gratitude',desc:'Gratitude increases blessings while ingratitude removes them. Whoever does not thank people does not thank Allah. Gratitude is expressed through the heart, tongue, and actions. Look at those below you, not those above you.',verse:'If you are grateful, I will surely increase you',verseRef:'Ibrahim 7',hadith:'Whoever does not thank people does not thank Allah — Tirmidhi',action:'Thank 5 people today for something they did for you — and say Alhamdulillah 10 times',young:'Say Alhamdulillah every day! And thank everyone who helps you — your parents, teachers, and friends 🌻'},
    fr:{title:'Hadith de la Gratitude',desc:"La gratitude augmente les bienfaits tandis que l'ingratitude les supprime. Celui qui ne remercie pas les gens ne remercie pas Allah. La gratitude s'exprime par le coeur, la langue et les actes.",verse:'Si vous êtes reconnaissants, Je vous augmenterai certainement',verseRef:'Ibrahim 7',hadith:'Celui qui ne remercie pas les gens ne remercie pas Allah — Tirmidhi',action:"Remerciez 5 personnes aujourd'hui — et dites Alhamdulillah 10 fois",young:'Dis Alhamdulillah chaque jour ! Et remercie tous ceux qui t\'aident — tes parents, profs et amis 🌻'}
  },
  {
    id:14, emoji:'🙏',
    ar:{title:'حديث التوكل على الله',desc:'التوكل أن تأخذ بالأسباب ثم تفوض النتيجة لله. لو توكلتم على الله حق توكله لرزقكم كما يرزق الطير. التوكل لا يعني الكسل بل يعني الثقة بالله مع العمل.',verse:'وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',verseRef:'الطلاق ٣',hadith:'لو أنكم كنتم توكلون على الله حق توكله لرزقكم كما يرزق الطير تغدو خماصاً وتروح بطاناً — رواه الترمذي',action:'اعمل بجد اليوم ثم قل: توكلت على الله — ولا تقلق من النتيجة',young:'اعمل بجد ثم توكل على الله! مثل العصفور — يخرج كل صباح ويرزقه الله 🙏'},
    en:{title:'Hadith of Trust in God',desc:'Trust in God means taking all necessary measures then entrusting the outcome to Allah. If you truly trusted in Allah, He would provide for you as He provides for the birds. Trust does not mean laziness — it means confidence in Allah while working.',verse:'And whoever puts their trust in Allah, He will be sufficient for them',verseRef:'At-Talaq 3',hadith:'If you truly put your trust in Allah, He would provide for you as He provides for the birds — they go out hungry and return full — Tirmidhi',action:'Work hard today then say: I trust in Allah — and do not worry about the result',young:'Work hard then trust in Allah! Like a bird — it goes out every morning and Allah provides for it 🙏'},
    fr:{title:'Hadith de la Confiance en Dieu',desc:"La confiance en Dieu c'est prendre les mesures nécessaires puis confier le résultat à Allah. Si vous aviez confiance en Allah, Il vous nourrirait comme les oiseaux. La confiance ne signifie pas paresse.",verse:'Et quiconque met sa confiance en Allah, Il lui suffit',verseRef:'At-Talaq 3',hadith:'Si vous mettiez votre confiance en Allah, Il vous nourrirait comme les oiseaux — ils partent affamés et reviennent rassasiés — Tirmidhi',action:"Travaillez dur aujourd'hui puis dites : Je m'en remets à Allah — ne vous inquiétez pas",young:"Travaille dur puis fais confiance à Allah ! Comme l'oiseau — il sort chaque matin et Allah le nourrit 🙏"}
  },
  {
    id:15, emoji:'🌟',
    ar:{title:'حديث حسن الخلق',desc:'حسن الخلق من أثقل ما يوضع في ميزان العبد يوم القيامة. أقرب الناس مجلساً من النبي ﷺ يوم القيامة أحسنهم أخلاقاً. بحسن الخلق يبلغ المسلم درجة الصائم القائم.',verse:'وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ',verseRef:'القلم ٤',hadith:'إن من أحبكم إلي وأقربكم مني مجلساً يوم القيامة أحاسنكم أخلاقاً — رواه الترمذي',action:'تعامل مع كل من تقابله اليوم بأحسن أخلاقك — ابتسم واحترم واصبر',young:'كن صاحب أخلاق رائعة! ابتسم وكن لطيفاً ومحترماً مع الجميع 🌟'},
    en:{title:'Hadith of Good Character',desc:'Good character is among the heaviest things placed on the scale of the servant on the Day of Judgment. The closest to the Prophet (PBUH) on that Day will be those with the best character. Through good character, a Muslim reaches the rank of one who fasts and prays.',verse:'And indeed, you are of a great moral character',verseRef:'Al-Qalam 4',hadith:'The most beloved to me and the closest to me on the Day of Judgment are those with the best character — Tirmidhi',action:'Treat everyone you meet today with your best character — smile, be respectful, and be patient',young:'Have amazing character! Smile, be kind, and be respectful to everyone you meet 🌟'},
    fr:{title:'Hadith du Bon Caractère',desc:"Le bon caractère est parmi les choses les plus lourdes dans la balance du serviteur au Jour du Jugement. Les plus proches du Prophète (PSL) ce Jour-là seront ceux au meilleur caractère.",verse:'Et tu es certes d\'un caractère immense',verseRef:'Al-Qalam 4',hadith:'Les plus aimés de moi et les plus proches au Jour du Jugement sont ceux au meilleur caractère — Tirmidhi',action:"Traitez tous ceux que vous rencontrez aujourd'hui avec votre meilleur caractère — souriez et respectez",young:'Aie un caractère formidable ! Souris, sois gentil et respectueux avec tout le monde 🌟'}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Hafiz?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما أول حديث في صحيح البخاري؟',opts:['كل معروف صدقة','إنما الأعمال بالنيات','الدين النصيحة','المسلم من سلم المسلمون'],correct:1,hint:'هذا الحديث يتحدث عن أساس كل عمل',quran:'البينة ٥'},
    en:{q:'What is the first hadith in Sahih al-Bukhari?',opts:['Every good deed is charity','Actions are but by intentions','Religion is sincere advice','A Muslim is one from whom others are safe'],correct:1,hint:'This hadith speaks about the foundation of every deed',quran:'Al-Bayyinah 5'},
    fr:{q:'Quel est le premier hadith dans Sahih al-Bukhari ?',opts:['Tout bon acte est aumône','Les actes ne valent que par les intentions','La religion est le conseil sincère','Le musulman est celui dont les autres sont en sécurité'],correct:1,hint:'Ce hadith parle du fondement de tout acte',quran:'Al-Bayyinah 5'}
  },
  {
    ar:{q:'أكمل الحديث: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب ل..."',opts:['دينه','نفسه','أهله','ربه'],correct:1,hint:'هذا الحديث عن الأخوة الإسلامية',quran:'الحجرات ١٠'},
    en:{q:'Complete the hadith: "None of you truly believes until you love for your brother what you love for your..."',opts:['religion','self','family','Lord'],correct:1,hint:'This hadith is about Islamic brotherhood',quran:'Al-Hujurat 10'},
    fr:{q:'Complétez le hadith : « Aucun de vous ne croit tant qu\'il n\'aime pour son frère ce qu\'il aime pour... »',opts:['sa religion','lui-même','sa famille','son Seigneur'],correct:1,hint:'Ce hadith porte sur la fraternité islamique',quran:'Al-Hujurat 10'}
  },
  {
    ar:{q:'من الذي أوصى النبي ﷺ بالجار حتى ظن أنه سيورثه؟',opts:['ميكائيل','إسرافيل','جبريل','عزرائيل'],correct:2,hint:'هذا الملك هو الذي نزل بالقرآن',quran:'النساء ٣٦'},
    en:{q:'Who kept advising the Prophet (PBUH) about the neighbor until he thought he would inherit?',opts:['Mikael','Israfil','Jibreel','Azrael'],correct:2,hint:'This angel is the one who brought down the Quran',quran:'An-Nisa 36'},
    fr:{q:'Qui a recommandé le voisin au Prophète (PSL) jusqu\'à ce qu\'il pense qu\'il hériterait ?',opts:['Mikael','Israfil','Jibreel','Azrael'],correct:2,hint:'Cet ange est celui qui a révélé le Coran',quran:'An-Nisa 36'}
  },
  {
    ar:{q:'ما الذي وصفه النبي ﷺ بأنه "جُنة" (وقاية)؟',opts:['الصلاة','الصدقة','الصيام','الحج'],correct:2,hint:'هذه العبادة تكون في شهر رمضان',quran:'البقرة ١٨٣'},
    en:{q:'What did the Prophet (PBUH) describe as a "shield"?',opts:['Prayer','Charity','Fasting','Hajj'],correct:2,hint:'This act of worship takes place in Ramadan',quran:'Al-Baqarah 183'},
    fr:{q:'Qu\'est-ce que le Prophète (PSL) a décrit comme un "bouclier" ?',opts:['La Prière','L\'Aumône','Le Jeûne','Le Hajj'],correct:2,hint:'Cet acte d\'adoration a lieu pendant le Ramadan',quran:'Al-Baqarah 183'}
  },
  {
    ar:{q:'أكمل الحديث: "الرفق لا يكون في شيء إلا ..."',opts:['نفعه','زانه','أصلحه','رفعه'],correct:1,hint:'ضد هذه الكلمة هو "شانه"',quran:'آل عمران ١٥٩'},
    en:{q:'Complete the hadith: "Kindness is not found in anything except that it..."',opts:['benefits it','adorns it','fixes it','elevates it'],correct:1,hint:'The opposite of this word is "disgraces it"',quran:'Al Imran 159'},
    fr:{q:'Complétez le hadith : « La douceur n\'est pas dans une chose sans... »',opts:['lui profiter','l\'embellir','la réparer','l\'élever'],correct:1,hint:'Le contraire de ce mot est "l\'enlaidir"',quran:'Al Imran 159'}
  },
  {
    ar:{q:'في أي سورة وردت آية "لئن شكرتم لأزيدنكم"؟',opts:['البقرة','إبراهيم','الرحمن','لقمان'],correct:1,hint:'هذه السورة سميت باسم نبي بنى الكعبة',quran:'إبراهيم ٧'},
    en:{q:'In which surah does the verse "If you are grateful, I will increase you" appear?',opts:['Al-Baqarah','Ibrahim','Ar-Rahman','Luqman'],correct:1,hint:'This surah is named after the prophet who built the Kaaba',quran:'Ibrahim 7'},
    fr:{q:'Dans quelle sourate apparaît le verset « Si vous êtes reconnaissants, Je vous augmenterai » ?',opts:['Al-Baqarah','Ibrahim','Ar-Rahman','Luqman'],correct:1,hint:'Cette sourate porte le nom du prophète qui a construit la Kaaba',quran:'Ibrahim 7'}
  },
  {
    ar:{q:'ماذا يرزق الله الطير كما ورد في حديث التوكل؟',opts:['تخرج شبعانة وتعود جائعة','تخرج خماصاً وتعود بطاناً','تبقى في أعشاشها','تطير بلا توقف'],correct:1,hint:'الطيور تخرج صباحاً جائعة وتعود مشبعة',quran:'الطلاق ٣'},
    en:{q:'How does Allah provide for the birds according to the hadith of trust?',opts:['They go out full and return hungry','They go out hungry and return full','They stay in their nests','They fly without stopping'],correct:1,hint:'Birds go out hungry in the morning and return satisfied',quran:'At-Talaq 3'},
    fr:{q:'Comment Allah nourrit-Il les oiseaux selon le hadith de la confiance ?',opts:['Ils sortent rassasiés et reviennent affamés','Ils sortent affamés et reviennent rassasiés','Ils restent dans leurs nids','Ils volent sans arrêt'],correct:1,hint:'Les oiseaux sortent affamés le matin et reviennent rassasiés',quran:'At-Talaq 3'}
  },
  {
    ar:{q:'ما أثقل شيء في ميزان العبد يوم القيامة حسب الحديث؟',opts:['الصلاة','الصيام','حسن الخلق','الصدقة'],correct:2,hint:'هذا يتعلق بالأخلاق والتعامل مع الناس',quran:'القلم ٤'},
    en:{q:'What is the heaviest thing on the servant\'s scale on the Day of Judgment?',opts:['Prayer','Fasting','Good character','Charity'],correct:2,hint:'This is related to morals and dealing with people',quran:'Al-Qalam 4'},
    fr:{q:'Quelle est la chose la plus lourde dans la balance au Jour du Jugement ?',opts:['La Prière','Le Jeûne','Le Bon Caractère','L\'Aumône'],correct:2,hint:'Cela concerne les vertus et les relations avec les gens',quran:'Al-Qalam 4'}
  },
  {
    ar:{q:'أكمل الحديث: "عليكم بالصدق فإن الصدق يهدي إلى ..."',opts:['الجنة','البر','النجاح','السعادة'],correct:1,hint:'البر يهدي إلى الجنة',quran:'التوبة ١١٩'},
    en:{q:'Complete: "Be truthful, for truthfulness leads to..."',opts:['Paradise','Righteousness','Success','Happiness'],correct:1,hint:'Righteousness then leads to Paradise',quran:'At-Tawbah 119'},
    fr:{q:'Complétez : « Soyez véridiques, car la véracité mène à... »',opts:['Le Paradis','La Droiture','Le Succès','Le Bonheur'],correct:1,hint:'La droiture mène ensuite au Paradis',quran:'At-Tawbah 119'}
  },
  {
    ar:{q:'ما العبادة التي قال عنها النبي ﷺ "العهد الذي بيننا وبينهم"؟',opts:['الزكاة','الحج','الصلاة','الصيام'],correct:2,hint:'هي عمود الدين',quran:'العنكبوت ٤٥'},
    en:{q:'Which act of worship did the Prophet (PBUH) call "the covenant between us and them"?',opts:['Zakat','Hajj','Prayer','Fasting'],correct:2,hint:'It is the pillar of religion',quran:'Al-Ankabut 45'},
    fr:{q:'Quel acte d\'adoration le Prophète (PSL) a-t-il appelé « le pacte entre nous et eux » ?',opts:['La Zakat','Le Hajj','La Prière','Le Jeûne'],correct:2,hint:'C\'est le pilier de la religion',quran:'Al-Ankabut 45'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء حسن الخلق',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'رواه مسلم'},
    en:{label:'Dua for Good Character',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'O Allah, guide me to the best of character — Muslim'},
    fr:{label:'Dua pour le Bon Caractère',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'Ô Allah, guide-moi vers le meilleur caractère — Muslim'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'سورة التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:"Allah me suffit ; il n'y a de dieu que Lui — At-Tawbah 129"} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'},
    fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, déverse sur nous la patience — Al-Baqarah 250'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} },
  { ar:{label:'دعاء العفو',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'رواه الترمذي'},
    en:{label:'Dua for Forgiveness',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'O Allah, You are Forgiving and love forgiveness, so forgive me — Tirmidhi'},
    fr:{label:'Dua pour le Pardon',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'Ô Allah, Tu es Pardonneur et Tu aimes le pardon — Tirmidhi'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'kunuz-sunnah-xp';
const BADGES_KEY = 'kunuz-sunnah-badges';
const READ_KEY = 'kunuz-sunnah-read';
const STREAK_KEY = 'kunuz-sunnah-streak';
const MODE_KEY = 'kunuz-sunnah-mode';
const QUIZ_BEST_KEY = 'kunuz-sunnah-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme];
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabTraits').textContent = t.tabTraits;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('traitsTitle').textContent = t.traitsTitle;
  document.getElementById('traitsDesc').textContent = t.traitsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  document.getElementById('homeGrid').innerHTML = TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS (HADITHS) ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = document.getElementById('traitsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.hadith}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Hafiz?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'حافظ حقيقي!':lang==='fr'?'Un vrai Hafiz !':'A True Hafiz!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  document.getElementById('progressContainer').innerHTML = `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'حديث مقروء':lang==='fr'?'Hadiths lus':'Hadiths Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري بارز. ألّف أكثر من ٩٤ كتاباً في الفكر الإسلامي والدعوة والأخلاق. درس في الأزهر ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«كنوز من السنة» كتاب يتناول الأحاديث النبوية الشريفة ويشرحها بأسلوب عصري عملي. يبين الشيخ الغزالي كيف أن السنة النبوية كنز عظيم يحتاج إلى فهم صحيح وتطبيق واعٍ في حياتنا اليومية.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "كنوز من السنة" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Prominent Egyptian Islamic scholar and thinker. Authored over 94 books on Islamic thought, preaching, and ethics. Studied at Al-Azhar and taught at Emir Abdelkader University in Constantine, Algeria. King Faisal Award winner.',
      bookTitle: 'About the Book',
      bookDesc: '"Treasures from the Sunnah" explores prophetic hadiths and explains them in a modern, practical style. Sheikh al-Ghazali shows how the Prophetic Sunnah is a great treasure that needs correct understanding and conscious application in daily life.',
      sourcesTitle: 'Sources',
      sources: ['"Treasures from the Sunnah" (Kunuz min al-Sunnah) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Eminent savant et penseur islamique egyptien. Auteur de plus de 94 livres sur la pensee islamique. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '\"Tresors de la Sunnah\" explore les hadiths prophetiques et les explique dans un style moderne et pratique. Le Sheikh al-Ghazali montre comment la Sunnah prophetique est un grand tresor qui necessite une comprehension correcte et une application consciente.',
      sourcesTitle: 'Sources',
      sources: ['"Tresors de la Sunnah" (Kunuz min al-Sunnah) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر كنوز السنة النبوية بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "كنوز من السنة" للشيخ محمد الغزالي، القرآن الكريم، الصحيحان.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ حديثاً، مسابقة تفاعلية، نظام نقاط وشارات.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وشروح.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share the treasures of the Prophetic Sunnah interactively.'},
      {title:'📚 Sources',body:'"Treasures from the Sunnah" by Sheikh Mohammed al-Ghazali, the Holy Quran, Sahih collections.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 hadiths, interactive quiz, XP and badges system.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and explanations.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager les tresors de la Sunnah.'},
      {title:'📚 Sources',body:'"Tresors de la Sunnah" par Sheikh Mohammed al-Ghazali, le Saint Coran, les Sahih.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 hadiths, quiz interactif, systeme XP et badges.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et explications.'},
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ حديثاً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ أكمل ١٥ حديثاً لتصبح خبيراً'],
    en: ['📖 Read a new hadith every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua','⭐ Complete all 15 hadiths to become an Expert'],
    fr: ['📖 Lisez un nouveau hadith chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas','⭐ Completez les 15 hadiths pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
