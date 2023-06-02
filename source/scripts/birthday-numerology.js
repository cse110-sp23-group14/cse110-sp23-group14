function calculateLifePathNumber(birthDate) {
    // Split the birth date into an array
    const dateArray = birthDate.split(".");
  
    // Extract year, month, and day from the array
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
  
    // Reduce each part to a single digit or a master number
    const reducedYear = reduceNumber(year);
    const reducedMonth = reduceNumber(month);
    const reducedDay = reduceNumber(day);
  
    // Calculate the sum of year, month, and day
    let sum = reducedYear + reducedMonth + reducedDay;
  
    // Continue reducing the sum until it becomes a single-digit or a Master Number
    sum = reduceNumber(sum);
  
    // Return the calculated Life Path number
    return sum;
  }
  
  function reduceNumber(number) {
    let result = Array.from(number.toString(), Number).reduce((acc, curr) => acc + curr, 0);
    
    while (result > 9 && result !== 11 && result !== 22 && result !== 33) {
      result = Array.from(result.toString(), Number).reduce((acc, curr) => acc + curr, 0);
    }
    
    return result;
  }
  

  // Soul Urge Number data
const soulUrgeNumberData = {
    "1": {
      "personality": 
      `As natural-born leaders, you are not only courageous but also high spirited.  
      You love your freedom, so it is ensured that its reins are intact in your hands. 
      You are well- suited for self-employment and would excel as a self-boss. Your goal-oriented nature has taken you a long way in your life, if not yet then it is likely to show its effect in the coming time. 
      The pure dedication and focus with which you take up any task or errand give you success most of the time. You put your heart and soul into achieving your target or task. 
      You can be a multi-tasker if the work interests you and you have the zeal to do it.
      You are mostly clear about the path of achievement but you also demand attention and love from people around. Often you get agitated when things do not go your way. The swollen ego, boastful nature and arrogance at times drive you insane and you hamper things around. 
        `,

      "characteristic": 
      `Positive:
            As declared leaders, you own qualities like lateral thinking and creativity. 
            Others might perceive you as self-centred and egoistic, but your leadership and nut-cracking quality is what makes people envious of you. 
            Dynamic nature, heart to take a risk and succeed are some positives which do not come in everyone and anyone.  
        Negative:
            It is quite evident that you are egoistic, self-centric and aggressive at times. 
            You need to ensure that it does not reach a level that it starts to spoil things for you that you have built or earned. 
            You mostly lose your cool when a problem pops up and lack patience. Overenthusiastic nature, 
            dominating trait and at times the violent side of you might restrict your productivity and also be the reason for your downfall.
            `,
        
        "career":
        `You are a solo rider when it comes to career or business. You prefer to work alone and it is then when you outshine the most. 
        The entrepreneur quality in you pushes to work hard and achieve any kind of goal. You tend to take your work too seriously, even when it is not needed. 
        It leads to a lot of stress and you end up affecting your health. It is important to follow a healthy diet and a planned day to stay fit both physically and mentally. 
        With such strong traits, you can also be a politician or go for strong posts like military, etc. You are a powerhouse of qualities, 
        if you use them in the right way then success will be at your feet and there is no goal you cannot achieve. So, ensure to imbibe humility to sustain fame, success, and positivity in life.
        `,

        "love":
        `Since you like to be the boss in most places, even in love life you are likely to do the same.  
        You want to take charge and this can be a big drawback when you come across a person of the same life path number. 
        Even with people who do not like to be dominated, you might face a problem, if you try to take charge all the time. 
        Your inclination towards compromise is very less which can be a reason for a lot of differences in relations. 
        You lack the art to talk things out to resolve, so might have to work on that to save your relation.

        Partnering with a person of the same life path number can be exciting as you both have a charismatic personality. 
        However, it can be tricky too as you both might have a different perspective about career, relationship life, etc. 
        It can be that you both aim for the same things but your dominating nature does not let you things work out well.
        
        Life path number 1 compatibility is best observed with people falling under 3, 5, and 6.  
        They can be a good match for you, as they have flexible personalities and can get along with such kinds of traits and also enjoy a healthy relationship.
        `,
    },
    "2": {
      "personality": 
      `People in the category of number 2 are true peace lovers. Your emotional quotient is very high which is both bane and boon for you in life. 
      You are a loyal partner, friend, and bond with people easily. Even though you are reserved by nature, the intuitive side of you makes you a people’s person. 
      In a situation of confusion, tiff, and misunderstanding you play an active part in resolving them for others. The convincing power is high on your side, which makes you a perfect mediator.  

      Since you have the power to change people's mind, it often becomes difficult to explain yourself when there is a problem in your paradise. 
       You own the power to self-heal from hurtful situations and also specialize in helping others do the same. 
       People with this life path number are mostly in professions like spirituality, healing, nursing, etc.`,

      "characteristic": 
      `Positive:
      Sensitivity and loyalty run in your blood. It makes you a true friend or partner. 
      You stand strong in any situation to protect your loved ones. You are open to listening and are compassionate to others' feelings. 
      You are not the conflict initiators instead you always try to calm things down and maintain harmony. 
      You are observant and very well know how to use the minutest of detail to disarm negativity in the surrounding. 
      You like your routine life and are not very open to frequent changes or alterations.
      
      Negative:
      The twos in spite of being diplomatic, lack the spine to take the lead and fight for the right. 
      You prefer to be in the shadow and wait for others to take a stand for you, to come up front. Since your emotional side is always high, things affect you very easily. 
      Due to this you become agitated and are likely to act weirdly. Somewhere in life, you are self-centred when it comes to your liking and comfort. 
      But you are spineless in context to standing for self. The art of holding back thoughts and over compromising in a relation are other traits in number 2. 
      Your over sensitiveness can be a reason for suffering.`,

      "career":
      `The patience in you highlights the creative side of you. Jobs like writing and art-related might fancy you and bring happiness in life. 
      You always keep others comfort before yours this makes you a lovable colleague at work. In situations when there is a tiff at work you are looked upon to resolve and maintain peace.  
      Your unique nature helps you make good decisions at work even when you are deciding upon the profile you plan to opt for. 
      Interpersonal skills is your forte so you are inclined more towards communication and mediating professions. 
      You need to pump up your self-confidence to achieve your goals rather than waiting for someone to do things for you.`,

      "love":
      `Twos are known as loyal and one of the best love partners. In spite of being dedicated and supportive lovers, 
      if by any chance you are betrayed in love then the culprit has to be ready to face the wrath of your anger and hurt. 
      However, you are a great lover who does not give up in relationships and ensures to keep the partner happy. Communication and understanding are what you seek in a partner.

      The life path number 2 compatibility is most appreciated with 8, 9 and those who belong to the same life path number. 
      For those who belong to the same life path number two, you are likely to get along well. 
      But there is a catch! You might end up asking each other to make decisions and it will give birth to frustration. 
      Whereas, 8 and 9 numbers will understand your nature and take care of your feelings treating you the way you want them to.`
    },

    "3": {
      "personality": 
      `People who fall under this category love to be the nucleus everywhere. Since you have a charismatic aura, you end up being the centre of attraction. 
      You are full of creativity and are very expressive as compared to other numbers. You are born artists and are super romantic at heart. 
       Your observant nature helps you take a calculative and sensible decision about life, career, and other aspects of life. 
       The best part about you is that you do not hold any grudge against anyone and are very optimistic about life. 
       You are limitless and enjoy living your present to the fullest without worrying about tomorrow.  Such a nature often pushes you to escape taking up responsibility. 
       You are a die-heart spender so, saving is not something you do and due to which you suffer later.`,

      "characteristic": 
      `Positive:
      You love yourself and this is the reason you are less concerned about what others feel or think about you. As your own counsellor, 
      you easily criticize yourself when needed and ensure to work on such shortcomings. With excellent communication skills, 
      you work well in a team and can provide a comfortable environment to colleagues and co-workers. Your creative skills, cheerfulness, and friendly nature attract people towards you.
      
      Negative:
      You do not usually get hurt easily, but if you do then you cut off from people around and built a cocoon around you. 
      You act opposite to your true nature. In some worse cases, you even become sarcastic with intend to hurt the person who hurt you. 
      You are not someone who loves rules so, you do not like to work under rigid conditions. 
      Since you are good at most of the things you do, this often creates a lot of confusion in deciding which work to take up first. Due to this, you lack focus. 
      Overthinking and analysing is what you do most of the time, this affects your productivity and holds you from giving your best.`,

      "career":
      `You are quite practical and are mostly into the artistic, intellectual and creative category of work. 
      You are not a person who can excel in businesses as you are fickle-minded. When it comes to hobbies and passion, you might find it difficult to settle in a job. 
      Your spontaneous attitude makes you a quick learner and you play on your strengths. Do not doubt your skills and go-ahead to perform to the best of your ability.
        You need to ensure you do not fall towards the negative side of your personality because then you are likely to ruin your built image and also waste your skills.`,

      "love":
      `Your friendly nature makes you an interesting personality as a partner. You adore joy, happiness, and creativity and that is what you look for in your relationship. 
      For you, self-expression and individuality is the most important. On the contrary, you are hesitant in giving yourself fully to the partner.  
      You enjoy the company of a person who is almost like you but not completely. Even though you are your own mentor and guide, 
      you still look for an understanding partner who can help you figure out life and make the right decisions regarding career and other important events. 
      You desire a partner who can help you focus on life and make bring calmness and steadiness to an overthinking mind and behavior.

      Life path number 3 compatibility is best seen with 5 and 7.
      Take the assistance of a professional astrologer who can give you a detailed analysis of the impact of life path number 3 in your life and how you can overcome and deal with upcoming events in life.`,
    },

    "4": {
      "peronality": `The fours are the emblem of stability and functional life. You are practical in either personal and professional front or any situation that demands your attention. 
      You desire financial stability which is your topmost priority. The thirst for respect is much bigger than anything around. 
      Companies love to have employees like you, who are team players and can hold the team together. You are imaginative, rational and anti any kind of injustice that takes place anywhere. 
      You are trustworthy when it comes to emotional support and people can depend on you for any kind of assistance. Your seriousness and hard work are likely to take you a long way.`,

      "characteristic": 
      `Positive:

      You are down to earth which makes you approachable and reachable for any kind of assistance. You are people's person that is why you are amongst the much need people in the core group. 
      The best part about you is that you do not surrender to any kind of peer pressure. Perseverance is what you demand most of the time from self and even from people around you. 
      The orderly form of life is your life long mantra. You are a learner and seek knowledge from everywhere you go. Risk bearing feature is absent in your system, 
      you would rather make a solid backup plan and act accordingly than depend on taking the risk without a safety net at hand. 
      You are determined in whatever you do and even possess loner quality, where you can enjoy a lonely time too.
      
      Negative:
      
      Unfortunately, you are very harsh on yourself. Either it is because of some old wounds which have yet not healed or any mishap that has left an unhealed scar. 
      Such things make you feeble and you find it hard to forget. One of the biggest problems with you is that you are not ready to compromise in any situation. 
      You are a staunch rule follower and expect others to have the same ideology which is quite impossible most times. 
      If you find out people working or associated with you do not carry the same ideology, then you tend to lash out at them, you become impolite, 
      stubborn and even authoritative which gives a negative impact on your image`,

      "career":
      `The fours are the kind of employees companies look for. You are focused, goal-oriented and super hard working. 
      You can fix any situation irrespective of time, place or condition. As dedicated and reliable, your seniors are likely to bestow you with responsibilities. 
      This is the reason your position graph is always moving upwards on the professional front.  You are a master in completing any task given to you. 
      Whether it boring, monotonous or even time consuming, you do not give up on completing it. Others may give up after some time but you don't until the task is completed. 
      This is the reason you turn out to be good trainers.`,

      "love":
      `Looking at the seriousness you keep regarding life, you are not a natural romantic. You are not the kind who can sweep his/her lover off their feet or plan a pomp surprise celebration for them. 
      You cannot grant a fairy-tale moment to your partners this can be one reason you are considered a sloppy lover. 
      Relationship for you is a serious genre that you deal with just like other aspects of your life. There is no special treatment from your end. 
      You desire a steady relationship and a partner who is as hard-working as you.

      Life path number 4 compatibility is mostly seen with 1 and 8. Since people who belong to 8 numbers are goal-oriented, they are likely to gel well with the fours. `
    },

    "5": {
      "personality": `You are an explorative personality who loves to explore. You adore your freedom and ensures that nobody dares to take it away from you. 
      Traveling, meeting new people, enjoying even the smallest experience is what describes you. Curiosity runs in your blood, it pushes you to touch new heights.
      You are also a risk- taker but a calculated one. The risk is worth the leap is what you always make sure. 
      The adventure-seeking nerve makes you a good motivator to push people to explore their potential. Fearlessness is what you constantly aim to conquer, 
      as it restricts your flight to fly high and make the most of what is around you. Change is the constant factor in your life that you love the most. 
      Monotony bores you and you make sure to exit any relation or situation that cradles it.`,


      "characteristic": 
      `Positive:

      You are full of ideas, which helps to enhance your overall personality and also image amongst people. You inspire people both on the professional and personal front. 
      Since you are young at heart, you do not support orthodox ideologies and rules. Live life to the fullest without any restrictions is what you advise people all the time. 
      You possess good communication skills this helps you crack some good deals and even expand your social circle. 
      Progressive thinking is the tool that makes you live life in the highest way possible without any judgments.
      
      Negative:
      As a person who is never at rest, you often end up with unfinished tasks in your basket. Since you are too hyper with all the workaround, 
      you just aim at doing everything at once leading to no work done. Lack of concentration makes you agitated and lose cool. 
      You are anxious most of the time, and anger always sits on your nose, if things do not go your way. 
      The rebellious side of you turns to active mode when someone tries to tie you or take away your freedom. 
      You are inclined towards making a lot of enemies, ensure you keep yourself away from such situations. Stay away from fights as much as possible to preserve peace in life`, 

      "career":`Committing to a career is very difficult for the fives as they fear to be tied. You are a powerhouse of energy, ideas, 
      and passion and if you realize that the job does not give justice to your expectation, you tend to run away from such profiles. 
      Your fluctuating mind and restlessness often restrict you from taking up new or long projects, as you are doubtful about your stability. 
      You very well know that excitement or zeal for something does not stay the same in you over time. You seek perfection but lack commitment and prolonged concentration,
       this is the reason you feel directionless most of the time. The best part about fives is that you can develop new skills in any field, so the right flexibility and liking, 
       this is the only way you can hold yourself and settle to find a purpose in life.`,

       "love":`Your free-spiritedness is one of the charming facts about you that attracts people towards you. Even though you are shy about romance, you very well know what you seek. 
       The fear of being pulled by your partner into his/ her style of living, you avoid any kind of commitment and serious relationships. 
       Since freedom is what you love the most, you are not ready to compromise even if it costs keeping the love of your life at one arm distance.

       Life path number 5 compatibility is mostly seen with the same life path number people. As you both love your born free nature and understand each other's plight, you enjoy a relationship together. 
       You will get along well with 1 and 7 too, as your energy will match with them and you would enjoy exploring and traveling with them`
    },

    "6": {
      "personality": 
      `You are natural caretakers and are ready to go to any limit to keep your closed ones happy and content. 
      Your sacrificing nature makes you a people's person and also one of the most naïve personality. Your motherly side often makes you choose careers like teaching, training, childcare, etc. 
      Your emotionally intuitive nature makes you super kind that is taken for granted by some often. 
      Often you lack to see the reality of people and when hurt you still do not believe and you end up being hurt or betrayed. 
      Your escape from harsh reality is a drawback you should overcome. You love to take up responsibilities and make sure to do justice to the same. 
      Your humility is a gem on your personality crown.`,

      "characteristic": 
      `Positive:
      The empathetic nature gives you a big heart to understand each one's point of view and feelings. 
      You prefer keeping others comfort before yours, this is the reason you do not think about yourself at all. 
      Your sacrificing nature, makes you most wanted amongst family and friends. At times, the extent of sacrifice and the desperation to make the other person feel good has no limit, 
      which eventually affects your overall health and can exhaust you completely. Love, peace, and support are inbuilt emotions in you making you appear charming and the 
      most warm-natured person to be with.
      
      Negative:
      
      They say too much of everything is bad! Such is the case with the life path number 6. Your over-servicing nature makes you ignore yourself and results in self-destruction. 
      By default, you assume that you are obliged to do things for others and keep your preferences at bay. Due to this, 
      you do not get a chance to exhibit your talent and skills that might benefit you professionally and personally. To put it in harsh words, you do not mind being slaves to people.
       With all your energy channelized towards others betterment, you are likely to get sick worrying and eventually you are unable to showcase your talent, as you avoid taking hard tasks.`,

     "career":
     `You lack self-confidence and are mostly the back-bencher in all the fields, courtesy you‘re giving nature. On the contrary, you are the one who spreads a cozy vibe at work. 
     You are an employee who is always ready to contribute as much as you can. This is the reason most of you opt for professions like social work, teaching, training, etc. 
     You can excel in the leadership position, as you are someone who ensures peace and harmony along with the betterment of your fellow members. 
     You are a control freak, a problem solver with a cool mind, this is the reason your team is always disciplined and happy at the same time. 
     Your decision-making skills work well. You are a soft-spoken person, this gives you a chance to show your talent and skills to others around.`,

     "love":
     `Reading all the above qualities, it is quite evident that you are an amazing partner when it comes to relationships. 
     Your caring, selfless nature makes the partner comfortable, as they get all the attention and the right to make decisions.
      Your motherly nature does not only confined to the partner, but you are also the same when it comes to your family. 
      They are the most important people to you and their happiness is what you seek all the time. Even as a peacemaker and the ocean of love, 
      you are very careful and observant about who will be your partner. You take ample time to choose and analyze all the aspects. When you are satisfied then only you pick the right one for you.

     Life path number 6 compatibility is best seen with 1, 2 and 9. 1 and 9 seek guidance and direction in life to achieve success. 
     6s are a pro at providing that and thus they make a good combination`
    },

    "7": {
      "personality": 
      `Life path number 7 is always thirsty for knowledge. Your basic aim of life is to explore your surroundings and develop both spiritually and mentally. 
      You are a seeker of reality and are on the lookout to attain wisdom. In some way, you are also a perfectionist, 
      which might make your relation with people uneasy as perfection that you seek is only in your mind. You often lookout for flaws in people which does let you earn a good reputation. 
      You set very high standards for self, which eventually makes you tough within. You are a loner and often like to escape to your cocoon for a solace. 
      You might appear weird when you try to overdo things and appear normal or over-friendly, as you are a reserved man. 
      Such an effort might backfire and make people look down at you as vulgar and judgmental. 
      You love your lonely mental place and most of the time are busy finding answers about your life and its purpose.`,

      "characteristic": 
      `Positive:

      You prefer to work in solitude and figure out things alone without anyone's help. You have your own beliefs and you like to stick to them all the time. 
      It is very difficult to change your mindset or decisions. Even though you are a loner, 
      you have a magnetic charm that attracts people every time you decide to walk out of your shell are confident to express yourself. 
      At times people see a humorous side of you which they like. You are sensible and sensitive at the same time. 
      You have infinite spiritual energy in you that helps you to evolve, know yourself and also introspect various aspects of life.
    
      Negative:
      
      Your loner side is not what people close to you enjoy. You often judge others because they do not have a mind-set like you or cannot do things just the way you like. 
      Paranoia runs in your blood and is also the reason you are likely to collapse. 
      The tiff between heart and mind is never-ending as you want to ignore your heart completely and follow your mind which is not possible. 
      Since you are on the lookout for inner peace, you fail to realize that it is right there and your mindset is the only barrier that restricts you from attaining it. 
      You are a secretive person and someone who conceals his feelings easily, thus making it difficult to know what exactly you are feeling and feeding your mind. 
      A cruel critic, slap tongue, careless use of words are few of your not so good sides. You love to escape from reality and often appear is a person who is not understanding. 
      Unfortunately, you can be exhausting to be around.`,

      "career":
      `You are a learner and also a wise man at the same time at work. You enjoy learning practically than theoretically. 
      Intuitiveness is one of your qualities. You have excellent communication skills and are a good guide to others. 
      Since you are intelligent and observant you are likely to take up professions like scientists, investigation, philosophy, etc. 
      You enjoy working independently. Comfort takes a back seat when it comes to focusing at work and completing the task. 
      In spite of that, you are anti-deadlines. You have your way of working which you do not like to change when others advise you to follow a different way of working. `,

      "love":
      `You tend to fall in love quickly if you ignore the bug of finding self. At times the blind run for personal quest makes your partner feel out of place, lonely and unwanted. 
      You as a lover you always want reassurance in the relationship. At times, to make the condition right you can overdo love declaration and gestures which might make your partner feel awkward. 
      Winning your trust is a tedious task. You love natural beauty and prefer to cradle yourself in the same- close to nature. 
      You are a reserved person and yet you are responsible for all the worrying and hampering the peaceful ambiance.

      Life path number 7 compatibility is highest with 5 and 3. As they will always challenge you and never bore you.`
    },

    "8": {
      "meaning": "People with a Soul Urge Number 8 are ambitious, success-oriented, and practical.",
      "description": "They have a strong desire for achievement, financial abundance, and material success."
    },

    "9": {
      "meaning": "Individuals with a Soul Urge Number 9 are compassionate, humanitarian, and idealistic.",
      "description": "They have a deep desire to make a positive impact on the world and help others."
    },

    "11": {
      "meaning": "People with a Soul Urge Number 11 possess a highly spiritual and intuitive nature.",
      "description": "They have a deep desire to inspire and uplift others through their unique insights and visionary thinking."
    },

    "22": {
      "meaning": "Individuals with a Soul Urge Number 22 are master builders and have the potential to manifest significant accomplishments in their lives.",
      "description": "They have a strong desire to create lasting impact and contribute to the betterment of society."
    }

  };


  // Example usage
  const birthDate = "2002.1.1";
  const lifePathNumber = calculateLifePathNumber(birthDate);
  console.log("Life Path Number:", lifePathNumber);