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

      "characteristics": 
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

      "characteristics": 
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
      "": "People with a Soul Urge Number 4 are practical, reliable, and hardworking.",
      "description": "They have a strong desire for stability, order, and structure in their lives."
    },

    "5": {
      "meaning": "Individuals with a Soul Urge Number 5 are adventurous, freedom-loving, and adaptable.",
      "description": "They have a strong desire for freedom, variety, and experiences."
    },

    "6": {
      "meaning": "People with a Soul Urge Number 6 value harmony, family, and nurturing.",
      "description": "They have a deep desire to care for and support others."
    },

    "7": {
      "meaning": "Individuals with a Soul Urge Number 7 are introspective, analytical, and spiritual.",
      "description": "They have a strong desire for knowledge, wisdom, and inner growth."
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