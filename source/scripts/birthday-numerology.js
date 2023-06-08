function showNewPage() {

    const birthday = localStorage.getItem("birthdayYear");
    let text1 = "Your Life Path Number is:";
    let text2 = "";
    const lifePathNumber=calculateLifePathNumber(birthday);
    if (!birthday) {
        text1 = "We do not have your birthday.";
    } else {
        // Calculate the life path number based on the birthday
        // Replace this logic with your actual calculation
        text2 = lifePathNumber;
    }
    document.getElementById("main-content").innerHTML = `
        <div>
            <p class="title">"Life Path Number"</p>
            <p class="text1">${text1}</p>
            <p class="text2">${text2}</p>
        </div>
        <div>
            <button onclick="showPopup('personality', ${lifePathNumber})">Personality</button>
            <button onclick="showPopup('characteristic',${lifePathNumber})">Characteristic</button>
            <button onclick="showPopup('career',${lifePathNumber})">Career</button>
            <button onclick="showPopup('love',${lifePathNumber})">Love</button>
        </div>
    `;

    setTimeout(function() {
        const text2Element = document.getElementsByClassName("text2")[0];
        text2Element.style.transition = "opacity 1s ease";
        text2Element.style.opacity = "1";
    }, 3000); // Delay in milliseconds (3000ms = 3 seconds)
}

function hidePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

function showPopup(popupId, lifePathNumber) {
    const popup = document.getElementById(popupId);
    const personalityData = soulUrgeNumberData[lifePathNumber][popupId];

    // Update the popup content with the personality information\
    popup.innerHTML = `
        <span class="popup-close" onclick="hidePopup('${popupId}')">&times;</span>
        <img class="image" src="assets/lifepath/${lifePathNumber}.jpg" alt="horoscope sign">
        <br>
        <br>
        <h3 >${popupId}</h3>
        <br>
        <p>${personalityData}</p>
    `;

    // Display the popup
    popup.style.display = "block";
}


function calculateLifePathNumber(birthDate) {
    console.log(birthDate);
    // Split the birth date into an array
    const dateArray = birthDate.split('.');

    // Extract year, month, and day from the array
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    console.log(dateArray);
    // Reduce each part to a single digit or a master number
    const reducedYear = reduceNumber(year);
    const reducedMonth = reduceNumber(month);
    const reducedDay = reduceNumber(day);
    

    // Calculate the sum of year, month, and day
    let sum = reducedYear + reducedMonth + reducedDay;

    // Reduce the sum to a single digit or a master number
    sum = reduceNumber(sum);

    // Return the calculated Life Path number
    return sum;
}

function reduceNumber(number) {
    let result = parseInt(number, 10);
    while (result > 9) {
        const digits = Array.from(result.toString(), Number);
        result = digits.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
    }

    return result;
}


// Soul Urge Number data
const soulUrgeNumberData = {
    "1": {
        "personality":
            `As natural-born leaders, you are not only courageous but also high spirited. You love your freedom, so it is ensured that its reins are intact in your hands. You are well- suited for self-employment and would excel as a self-boss. Your goal-oriented nature has taken you a long way in your life, if not yet then it is likely to show its effect in the coming time. The pure dedication and focus with which you take up any task or errand give you success most of the time. You put your heart and soul into achieving your target or task. You can be a multi-tasker if the work interests you and you have the zeal to do it. You are mostly clear about the path of achievement but you also demand attention and love from people around. Often you get agitated when things do not go your way. The swollen ego, boastful nature and arrogance at times drive you insane and you hamper things around.`,

        "characteristic":
            `For positive,  as declared leaders, you own qualities like lateral thinking and creativity. Others might perceive you as self-centred and egoistic, but your leadership and nut-cracking quality is what makes people envious of you. Dynamic nature, heart to take a risk and succeed are some positives which do not come in everyone and anyone.
            For negative, it is quite evident that you are egoistic, self-centric and aggressive at times. You need to ensure that it does not reach a level that it starts to spoil things for you that you have built or earned. You mostly lose your cool when a problem pops up and lack patience. Overenthusiastic nature, dominating trait and at times the violent side of you might restrict your productivity and also be the reason for your downfall.
            `,
        
        "career":
            `You are a solo rider when it comes to career or business. You prefer to work alone and it is then when you outshine the most. The entrepreneur quality in you pushes to work hard and achieve any kind of goal. You tend to take your work too seriously, even when it is not needed. It leads to a lot of stress and you end up affecting your health. It is important to follow a healthy diet and a planned day to stay fit both physically and mentally. With such strong traits, you can also be a politician or go for strong posts like military, etc. You are a powerhouse of qualities, if you use them in the right way then success will be at your feet and there is no goal you cannot achieve. So, ensure to imbibe humility to sustain fame, success, and positivity in life.`,

        "love":
            `Since you like to be the boss in most places, even in love life you are likely to do the same. You want to take charge and this can be a big drawback when you come across a person of the same life path number. Even with people who do not like to be dominated, you might face a problem, if you try to take charge all the time. Your inclination towards compromise is very less which can be a reason for a lot of differences in relations. You lack the art to talk things out to resolve, so might have to work on that to save your relation.

            Partnering with a person of the same life path number can be exciting as you both have a charismatic personality. However, it can be tricky too as you both might have a different perspective about career, relationship life, etc. It can be that you both aim for the same things but your dominating nature does not let you things work out well.
            
            Life path number 1 compatibility is best observed with people falling under 3, 5, and 6. They can be a good match for you, as they have flexible personalities and can get along with such kinds of traits and also enjoy a healthy relationship.`,
    },

    "2": {
        "personality":
            `People in the category of number 2 are true peace lovers. Your emotional quotient is very high which is both bane and boon for you in life. You are a loyal partner, friend, and bond with people easily. Even though you are reserved by nature, the intuitive side of you makes you a people's person. In a situation of confusion, tiff, and misunderstanding you play an active part in resolving them for others. The convincing power is high on your side, which makes you a perfect mediator.
            Since you have the power to change people's mind, it often becomes difficult to explain yourself when there is a problem in your paradise. 
            You own the power to self-heal from hurtful situations and also specialize in helping others do the same. 
            People with this life path number are mostly in professions like spirituality, healing, nursing, etc.`,

        "characteristic":
        `For positive, the twos
        have sensitivity and loyalty run in your blood. It makes you a true friend or partner.
        You stand strong in any situation to protect your loved ones. You are open to listening and are compassionate to others' feelings. 
        You are not the conflict initiators instead you always try to calm things down and maintain harmony. 
        You are observant and very well know how to use the minutest of detail to disarm negativity in the surrounding. 
        You like your routine life and are not very open to frequent changes or alterations. 
        
        For negative,
        the twos in spite of being diplomatic, lack the spine to take the lead and fight for the right. 
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
        `For positive, 
      you love yourself and this is the reason you are less concerned about what others feel or think about you. As your own counsellor, 
      you easily criticize yourself when needed and ensure to work on such shortcomings. With excellent communication skills, 
      you work well in a team and can provide a comfortable environment to colleagues and co-workers. 
      
      For negative, 
      you do not usually get hurt easily, but if you do then you cut off from people around and built a cocoon around you. 
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
        "personality":
        `The fours are the emblem of stability and functional life. You are practical in either personal and professional front or any situation that demands your attention. 
      You desire financial stability which is your topmost priority. The thirst for respect is much bigger than anything around. 
      Companies love to have employees like you, who are team players and can hold the team together. You are imaginative, rational and anti any kind of injustice that takes place anywhere. 
      You are trustworthy when it comes to emotional support and people can depend on you for any kind of assistance. Your seriousness and hard work are likely to take you a long way.`,

        "characteristic":
        `For Positive, 

      you are down to earth which makes you approachable and reachable for any kind of assistance. You are people's person that is why you are amongst the much need people in the core group. 
      The best part about you is that you do not surrender to any kind of peer pressure. Perseverance is what you demand most of the time from self and even from people around you. 
      The orderly form of life is your life long mantra. You are a learner and seek knowledge from everywhere you go. You would rather make a solid backup plan and act accordingly than depend on taking the risk without a safety net at hand. 
      You are determined in whatever you do and even possess loner quality.
      
      For Negative, 
      
      unfortunately, you are very harsh on yourself. Either it is because of some old wounds which have yet not healed or any mishap that has left an unhealed scar. 
      Such things make you feeble and you find it hard to forget. One of the biggest problems with you is that you are not ready to compromise in any situation. 
      You are a staunch rule follower and expect others to have the same ideology. 
      If you find out people working or associated with you do not carry the same ideology, then you tend to lash out at them, you become impolite, even authoritative which gives a negative impact on your image`,

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
        "personality":
        `You are an explorative personality who loves to explore. You adore your freedom and ensures that nobody dares to take it away from you. 
      Traveling, meeting new people, enjoying even the smallest experience is what describes you. Curiosity runs in your blood, it pushes you to touch new heights.
      You are also a risk- taker but a calculated one. The risk is worth the leap is what you always make sure. 
      The adventure-seeking nerve makes you a good motivator to push people to explore their potential. Fearlessness is what you constantly aim to conquer, 
      as it restricts your flight to fly high and make the most of what is around you. Change is the constant factor in your life that you love the most. 
      Monotony bores you and you make sure to exit any relation or situation that cradles it.`,


        "characteristic":
      `For positive,

      you are full of ideas, which helps to enhance your overall personality and also image amongst people. You inspire people both on the professional and personal front. 
      Since you are young at heart, you do not support orthodox ideologies and rules. Live life to the fullest without any restrictions is what you advise people all the time. 
      You possess good communication skills this helps you crack some good deals and even expand your social circle. 
      Progressive thinking is the tool that makes you live life in the highest way possible without any judgments.
      
      For negative,
      as a person who is never at rest, you often end up with unfinished tasks in your basket. Since you are too hyper with all the workaround, 
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
      `For positive, 
      the empathetic nature gives you a big heart to understand each one's point of view and feelings. 
      You prefer keeping others comfort before yours, this is the reason you do not think about yourself at all. 
      Your sacrificing nature, makes you most wanted amongst family and friends. At times, the extent of sacrifice and the desperation to make the other person feel good has no limit, 
      which eventually affects your overall health and can exhaust you completely. Love, peace, and support are inbuilt emotions in you making you appear charming and the 
      most warm-natured person to be with. 
      
      For negative, 
      
      they say too much of everything is bad! Such is the case with the life path number 6. Your over-servicing nature makes you ignore yourself and results in self-destruction. 
      By default, you assume that you are obliged to do things for others and keep your preferences at bay. Due to this, 
      you do not get a chance to exhibit your talent and skills that might benefit you. In harsh words, you do not mind being slaves to people.
       With all your energy channelized towards others betterment, you are likely to get sick worrying and eventually you are unable to showcase your talent, as you avoid taking hard tasks.`,

        "career":
     `You lack self-confidence and are mostly the back-bencher in all the fields, courtesy you're giving nature. On the contrary, you are the one who spreads a cozy vibe at work. 
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
      `For positive,

      you prefer to work in solitude and figure out things alone without anyone's help. You have your own beliefs and you like to stick to them all the time. 
      It is very difficult to change your mindset or decisions. Even though you are a loner, 
      you have a magnetic charm that attracts people every time you decide to walk out of your shell are confident to express yourself. 
      At times people see a humorous side of you which they like. You are sensible and sensitive at the same time. 
      You have infinite spiritual energy in you that helps you to evolve, know yourself and also introspect various aspects of life. 
    
      For negative, 
      
      your loner side is not what people close to you enjoy. You often judge others because they do not have a mind-set like you or cannot do things just the way you like. 
      Paranoia runs in your blood and is also the reason you are likely to collapse.  
      The tiff between heart and mind is never-ending as you want to ignore your heart completely and follow your mind which is not possible. 
      Since you are on the lookout for inner peace, you fail to realize that it is right there and your mindset is the only barrier that restricts you from attaining it. 
      You are a secretive person and someone who conceals his feelings easily, thus making it difficult to know what exactly you are feeling. 
      You love to escape from reality and often appear is a person who is not understanding. 
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
        "personality":
      `People who belong to the life path number 8 are hardworking and goal-oriented. Irrespective of that you are also very materialistic. 
      Since you are a very ambitious person. You are also too honest and straightforward which might give you a tough time with people around. 
      You are not very open to taking advice from anyone as you think too highly of yourself. You always want to be the choice maker rather than anyone else getting to decide for you. 
      You are a very energetic person and know how to deal with it. You have the qualities of a leader and are very clear about your goals. 
      You are passionate about your work as it will lead you to earn good money which is your ultimate goal.`,

        "characteristic":
      `For positive, 

      shower of power and money if dealt nicely can bring out the responsible side of you and make you gain money and fame quickly. 
      Your goal-oriented nature makes people look up to you in terms of work. You see things as black and white, the grey side does not exist for you. 
      You realize your responsibility as the provider of family and ensure that your family is happy and does not lack anything when it comes to money-related possessions. 
      Even after great failures, you have a zeal to bounce back and regain what you have lost with the help of clean ethics. 
      The combination of energy, focus, and dedication makes you a successful person in any field you step in. 
      
      For negative, 
      
      with great power comes great responsibility! You often forget this rule due to which your life becomes unmanageable. 
      You do not know how to use your authority effectively, which leads to disaster. 
      Your careless attitude due to fame and monetary power gives people the leverage to disrespect you and take advantage of you. 
      You are too materialistic due to which you fail to see the emotional side of life. You are self-centred and you expect your goal to be everyone's too. 
      Your swollen ego does not let you take advice and make your life imbalanced.`,

        "career":`You are extremely business-minded. You are thirsty for growth all the time which pushes you to reach new heights. 
      People with this life path number often become surgeons, tech specialists, etc. You aim to acquire more and more wealth and power. 
      Money oriented work lures you all the time. You have leadership skills that can push a team to aim high and perform exceptionally well for power and money.`,

        "love":
      `You are good at reading people but lack the art of expressing in a relationship. 
      You are likely to spend a lot on your partner but it does not makeup to the emotional support they seek. 
      Over-spending on a partner might annoy them after some time. You are against infidelity and cannot tolerate it in any form. 
      Time and again you keep reminding your partner the same. You are a strong-willed lover when in love can go out of the way to prove your love. 
      Overall you are difficult to be in a relationship as you are more focused on your monetary goals than the partner. 
      Unfortunately, you are so drugged by the thought of earning money and fame you can even see your partner as the tool of success.

      Life path number 8 compatibility might work well with 2 and 6. As they would be ready to let you take charge and also be ready to work towards the goals.`
    },

    "9": {
        "personality":
      `Generosity and emotion are two pillars of your existence. Since you are a concoction of all the numbers, you are the powerhouse of energy. 
      You are full of compassion and strength which help you cope with life and other aspects of life. You have diverse knowledge in almost all the field which makes you an intellectual person. 
      Since you are made from the extraction of all the numbers you are adaptable, mysterious and also diverse. You possess creative thinking and artistic flair. 
      Unfortunately, you are a control freak and like to take charge all the time. You cannot take denial sportingly. 
      Your personality is complex and multi-layered which makes you not very open to learning and advice.`,


        "characteristic":
      `For positive, 

      surprisingly, your mantra for life is live and let live. You are versatile in your talent which lets you explore various types of fields in career. 
      Humanity is very much alive in you which makes you soft-hearted towards people especially those who are close to you. 
      You have a deep affection for people who seek help from you, it pushes you to stretch to help them. 
      You are somewhat of a perfectionist and openly include people in your voyage who share the thought. You are not a macro thinker instead you concentrate on the bigger picture. 
      You like to share your dreams, goals with people it motivates you. Teamwork is your forte as you are a good decision-maker who is unbiased. 
      You support truth in every situation, you are not a blind follower. If you concentrate then you can excel creatively and can be influential. 
      
      For negative, 
      
      you are never satisfied. In a broader term even when you achieve the goal, you still feel the task is unfinished and your goal becomes something else. 
      You lack the zeal to perform exceptionally as your mind is cluttered with uninvited thoughts. At times, materialistic desire can trigger in you and if given weight, 
      it is likely to hamper your progress. You lack the tendency to let things go, which eventually hurts you the most. 
      In spite of being diverse yourself, you do not appreciate people who are diverse in personality, choices or opinions.`,

        "career":
      `Life path number 9 your dedication and hard work lets you earn good money in terms of business and crack good deals for those in the job. 
      Concentration is very important if you want to attain prosperity and success. Avoid being fearful, it will block you from performing well and even exploring new opportunities. 
      The scars of the past are likely to haunt you, which eventually affect your overall wellbeing. Since you are adaptable, you have a lot of options open in terms of career and business. 
      Flexibility will take you to new heights in careers like psychology, philosophy, etc. You will turn out to be a great boss as you are not a control freak.`,

        "love":
      `Unfortunately, you are not a very dedicated person in the relationship. The need for freedom does not let you be completely into anyone. 
      If the partner is controlling a little dominating you do not go well with them or eventually escape. On the contrary, you are very naïve when it comes to love. 
      You end up being a victim in the relationship mostly. You are ready to sacrifice yourself to make the partner happy and comfortable. 
      Even though you are patient and careful love makes you blind. Put your developing intuition in use to have a happy and fruitful relationship.

      Life path number 9 compatibility is best with 7 and 3. As 3 would add fun and light-heartedness in your life and 7 will provide comfort and guidance to focus and keep the mind calm.`
    },

    "11": {
        "personality":
      `The Life Path Number 11 is a mighty number which has a great potential to be an inspiring soul for others. 
      People with 11 life path number have the ability to be magical and impressive with their skills and capabilities. 
      You can be both a source of energy and a source of light for others and irradiate them with your wisdom. 
      You are not only energetic, but you have a certain aura that fills up the room you enter as you have the ability to pass on the energy with others around you. 
      It may not be less of a remark, but you may not be aware of the potential you have inside of you. 
      You can inspire, influence and affect many people, though you may have been misunderstood since your childhood, which is why you are bashful and reserved in your essence.

      Life path 11 in numerology startle people with your ability to mold situations apart from inspiring them to be just as energetic as you are. 
      You may not be aware of the surrounding that you create with your aura, but you do influence many people around you without you being conscious about it. 
      This suggests that you may be quite powerful and prominent in your essence.`,

        "characteristic":
      `You're a visionary who struggles to live up to other people's standards. As a result, 11s make fantastic artists, poets, and musicians. 
      You are an expert at translating your cosmic consciousness into art, and you aren't afraid to produce works that others consider avant-garde or strange.

      The number 2's fundamental force often endows you with a strong capacity to collaborate with others. 
      Since you pick up on their psychic wavelengths so quickly, you respect peace and become intensely distressed when those around you are upset.
      
      Your empathy makes you an outstanding mediator, and you can listen to others without passing judgement and provide sound guidance about the best course of action. 
      You possess tremendous inner strength and are capable of completing every task you put your mind to.`,

        "career":
      `The Life Path Number 11, a master number in numerology, is well-suited for work involving diverse worldviews and negotiation, 
      making careers in foreign affairs and dispute resolution an excellent fit. 11s have a knack for mediating and are often sought by employers for their problem-solving abilities.

      Individuals with this number also possess a deep spiritual connection and a strong affinity for metaphysical thinking, making them naturally inclined to explore the mysteries of the universe. 
      This profound spiritual bond can also cause them to struggle with existential questions, leading to potential anxiety and fear.
      
      Despite the challenges, when 11s achieve spiritual balance, they thrive, often finding solace in serene religions like Taoism and Buddhism. 
      Importantly, they seek religious traditions that permit personal exploration and discovery. Overall, number 11s are highly intuitive and adaptable, 
      possessing a unique blend of worldly negotiation skills and deep spiritual understanding.`,

        "love":
      `Individuals with Life Path Number 11 possess natural diplomacy and tact. They are skilled at uniting different viewpoints and foster harmony. 
      With a strong sense of aesthetics and rhythm, they excel in fields such as massage, acupuncture, physical therapy, and counselling. Emotionally sensitive and loyal, 
      they thrive in relationships that have spiritual engagement and mutual understanding. They share a unique connection with those of Life Path Number 2, 
      offering each other stability and comprehension. Despite being more inclined towards spirituality, they value companionship and love, seeking openness and honesty in all relationships.`
    },

    "22": {
        "personality":
      `This Life Path Number 22 is the most powerful of them all. It will give you a lot of success, knowledge, and money as well. 
      There are tremendous possibilities for you to indulge in, depending on what you choose to do. You can either have the probability to find something tremendous here or lead the simple life.

      You possess a lot of power and energy. However, it is all limited to your epitomes and visions that you also use to inspire people. 
      You want them to be a part of the larger picture you have in your mind. You may only be able to recognize your aim when you have all the required resources like knowledge, 
      people, ideas, money, etc which may help you achieve what you desire.
      
      Furthermore, your aim is such that it may require a lot of changes so that it can evolve dramatically in itself to sustain. 
      You will be able to combine a variety of features in you. You are capable of dealing with different kinds of people effectively. 
      It makes you create a following of sorts, all of which may have a common goal or aim. You may be able to get people together to unite in search of a common goal without you flying high above the ground. 
      You do all these things with humility and subtlety.`,

        "characteristic":
      `So, people with the Life Path Number 22 may have a great chance to get into politics, business. You are very sensible, logical and pragmatic which makes you deal with all situations in a more practical manner. 
      You have a vision and a glimpse of how to reach your goal, and you do exactly what is required, making you a successful person.
      You have an idea of what will work and what will not, on which you make further decisions on how to reach your goal. 
      Apart from this, you are also quite intuitive which adds to the process of making the correct choices.

      Even though this is one of the Life Path Numbers which holds great potential, it is also challenging to maintain and attain an equanimous state of mind while having to do so many tasks. 
      You may have a lot of ambitions and objectives to fulfill which requires a vast amount of energy, power, and determination.`,

        "career":
      `People with the number 22 are master builders, and they always want to create. As they are creative, they can work great in the field of design. 
      Their communication skills help them deal with clients efficiently, and can be good in sales. The strength of people with life path number 22 is innumerable; 
      thus through considerable efforts, they can bring together the three powerful things (People, Idea & Resources) and implement their plans effectively for the bigger cause.`,

        "love":
      `As far as your relationship with your partner is concerned, you are a substantial lover who takes care of their partner's needs. 
      You are someone who stands by his/her partner when required, be it emotional support or giving proper advice when needed. 
      Though you do not have any unrealistic or imaginary thoughts about love, you do care about your partner and your close ones as per your numerology compatibility chart. 
      However, you try not to be overemotional. Your thoughts are quite atypical and individualistic, and you do not like any kind of affectation and artificiality.

      This Life Path Number 22, as stated before, is very crucial and important because you are affiliated with this number for a specific reason. 
      You must now make sure to evolve in the right direction so that you can share this with others as well. You have to explore the potential of humans and their existence. 
      For this reason, 22 as a Life Path Number is also known as a Life Lesson. You may as well call it destiny. You should know about your destiny number using this expression destiny number calculator. 
      You are primarily here to know yourself, co-exist with others, learn from your experiences and then act accordingly.`
    },

    "33": {
        "personality":
      `Simply put, they get drained, and instead of finding ways to recharge their spiritual energies, 
      they prefer to let themselves become careless and apathetic to the problems and plight of others around them. 
      Though they do this for self-preservation, they can easily be seduced by the ease and comfort it provides, and slowly start sliding into negative behaviour. 
      On the other end of their spectrum, some eventually cannot help helping others. This happens irrespective of whether those around them want their aid or not. 
      This kindest and intuitive number 33 start manifesting smothering and controlling behaviours which increasingly manifests itself with the desire to closely monitor 
      and control the emotional aspirations and aspersions of the people around them. After that, it is impossible to inform them to the erosion of their self-control, 
      and it is easy for them to be lost within the manifest destructiveness of the number 33.`,

        "characteristic":`
      Life Path Number 33, in numerology, shares altruistic, creative, and nurturing qualities with Life Path Number 6, reflecting a powerful desire to serve and heal others. 
      However, unlike Number 6, 33 has mastered the ability to be selflessly giving without harm to self. They feel the distress of those around them deeply and constantly seek to alleviate it. 
      Their potential to make the world a better place through alleviation of suffering is one of their greatest challenges, which they might fully realize only in mid-life. 
      This path number carries the responsibility of enhanced cosmic consciousness, with a focus on uplifting humanity. Ultimately, Life Path Number 33 embodies altruism, striving to uplift global consciousness.`,

        "career":
      `Life Path Number 33, known as the 'master teacher', embodies great spiritual potential and a strong desire to aid those in need. 
      With talents in arts and a charismatic nature, 33s may find success in music, visual arts, or business. However, a career that doesn't involve service or charity work may leave them unfulfilled. 
      Their nurturing and giving nature may lead them towards professions that benefit the less fortunate. Despite their inclination to self-sacrifice potentially interfering with their career growth, 
      they are urged to balance their altruistic nature with their professional goals. Ultimately, as a Master Number, 33s feel a cosmic responsibility, 
      seeking to help others in the most direct and specific ways possible.`,
      
        "love":
      `People with Life Path Number 33 are generous, kind, and attractive, often admired for their humble yet proud demeanor. 
      They possess great understanding and listening skills, offering sympathy to those around them. However, they need to balance nurturing with enabling, u
      nderstanding that they can't protect their loved ones from every negative experience. In relationships, they seek harmony and make warm, protective, and understanding parents. 
      Their trust and support make them compatible partners for several life path numbers. As a Master Number, 33 shares compatibility similar to Number 6, 
      but they should seek partners with positive energies that contribute to their happiness and the world.`
    }
}
;
