const terms = [
{
    term: "Access Control",
    definition: "A security technique that regulates who or what can view or use resources in a computing environment.",
    eli5: "It's like a keycard that lets only certain people into certain rooms."
  },
  {
    term: "Adware",
    definition: "Software that automatically displays or downloads advertising material when a user is online.",
    eli5: "It's like a pop-up that keeps showing ads while you're trying to play a game."
  },
  {
    term: "Advanced Persistent Threat (APT)",
    definition: "A prolonged and targeted cyberattack in which an attacker gains access to a network and remains undetected for an extended period.",
    eli5: "It's like a sneaky burglar who lives in your house without you knowing and steals stuff slowly."
  },
  {
    term: "Antivirus",
    definition: "Software designed to detect and destroy computer viruses and malware.",
    eli5: "It's like a guard dog for your computer that barks at bad software."
  },
  {
    term: "Attack Surface",
    definition: "The total sum of the different points where an unauthorized user can try to enter data to or extract data from an environment.",
    eli5: "It's like all the doors and windows of your house that a thief could try to use."
  },
  {
    term: "Authentication",
    definition: "The process of verifying the identity of a user or device.",
    eli5: "It's like checking an ID card to see if someone is who they say they are."
  },
  {
    term: "Authorization",
    definition: "The process of giving someone permission to do or have something.",
    eli5: "After checking your ID, it's like giving you the right keys to open the doors you're allowed to enter."
  },
  {
    term: "Behavioral Analysis",
    definition: "Monitoring how users or programs act to detect anomalies or threats.",
    eli5: "It’s like a teacher noticing if a student starts acting strange and checking if something’s wrong."
  },
  {
    term: "Black Hat Hacker",
    definition: "A hacker who violates computer security for personal gain or malicious reasons.",
    eli5: "They're like bad guys who break into computers to steal or cause trouble."
  },
  {
    term: "Botnet",
    definition: "A network of infected computers controlled remotely to perform tasks like spamming or attacks.",
    eli5: "Imagine someone controls thousands of zombie computers to do bad stuff without their owners knowing."
  },
  {
    term: "CAPTCHA",
    definition: "A challenge-response test to determine whether the user is human.",
    eli5: "It's like a puzzle websites give you to make sure you're not a robot."
  },
  {
    term: "Clickjacking",
    definition: "A malicious technique tricking users into clicking something different from what they perceive.",
    eli5: "It's like a fake button hiding behind a real one that tricks you into pressing it."
  },
  {
    term: "Credential Stuffing",
    definition: "A cyberattack where stolen account credentials are used to gain unauthorized access.",
    eli5: "It's like using your stolen username and password to try and open all your other accounts."
  },
  {
    term: "Cryptography",
    definition: "The practice of securing communication through encoding information.",
    eli5: "It’s like turning your message into secret code only your friend knows how to read."
  },
  {
    term: "Cyberstalking",
    definition: "The use of the Internet to harass or stalk an individual or group.",
    eli5: "It’s like someone keeps watching and messaging you online in a creepy way."
  },
  {
    term: "Dark Web",
    definition: "Part of the internet that isn't indexed by search engines and often used for anonymous activities.",
    eli5: "It's like a hidden alley of the internet where people can secretly meet."
  },
  {
    term: "Data Breach",
    definition: "An incident where confidential data is accessed or disclosed without authorization.",
    eli5: "It’s like someone breaking into a locker and stealing all your private notes."
  },
  {
    term: "DDoS Attack",
    definition: "Distributed Denial of Service; an attack where multiple systems flood a target to make it inaccessible.",
    eli5: "It’s like too many people ringing a doorbell so no one else can reach it."
  },
  {
    term: "Firewall",
    definition: "A network security system that monitors and controls incoming and outgoing traffic.",
    eli5: "It’s like a bouncer at a party who decides who gets in and who doesn’t."
  },

  {
    term: "Phishing",
    definition: "A type of attack where fake emails or messages trick users into revealing personal information.",
    eli5: "When someone pretends to be your teacher to steal your homework or secrets!"
  },
  {
    term: "Malware",
    definition: "Software designed to harm, exploit, or otherwise compromise a computer system.",
    eli5: "It's like a bad robot that tries to break things in your computer."
  },
  {
    term: "Two-Factor Authentication (2FA)",
    definition: "A security process requiring two separate forms of verification before access is granted.",
    eli5: "It's like needing both a key and a secret handshake to open a treasure box."
  },
  {
    term: "Encryption",
    definition: "The process of converting data into a code to prevent unauthorized access.",
    eli5: "It's like turning your message into a secret language only your friend can read."
  },
  {
    term: "VPN (Virtual Private Network)",
    definition: "A tool that encrypts your internet connection and hides your IP address.",
    eli5: "Like wearing an invisibility cloak while exploring the internet."
  },
  {
    term: "Zero-Day Exploit",
    definition: "A software vulnerability that is unknown to the vendor and exploited by hackers.",
    eli5: "A hidden crack in a wall that even the builder didn’t know about, but a thief finds first."
  },
  {
    term: "Keystroke Logging",
    definition: "The action of recording the keys struck on a keyboard, typically in a covert manner.",
    eli5: "It's like someone secretly watching and writing down every button you press on your keyboard."
  },
  {
    term: "White Hat Hacker",
    definition: "An ethical hacker who uses their skills to find and fix security problems.",
    eli5: "Like a good guy hacker who helps protect computers instead of breaking into them."
  },
  {
    term: "Grey Hat Hacker",
    definition: "A hacker who may break the law but doesn’t have bad intentions, often to highlight flaws.",
    eli5: "Not a good guy or bad guy — they break rules but try to help."
  },
  {
    term: "Patch",
    definition: "A software update meant to fix bugs or security vulnerabilities.",
    eli5: "Like putting a band-aid on your app to fix problems."
  },
  {
    term: "Backdoor",
    definition: "A method of bypassing normal authentication to access a system.",
    eli5: "It’s like a secret way to get inside a locked room without using the front door."
  },
  {
    term: "Zero Trust Security",
    definition: "A security model that requires verification for every access request, regardless of origin.",
    eli5: "Don’t trust anyone unless they prove who they are every time."
  },
  {
    term: "DNS Hijacking",
    definition: "A type of attack where DNS queries are redirected to malicious sites.",
    eli5: "You ask for one website, but someone tricks you and sends you to a fake one."
  },
  {
    term: "HTTPS",
    definition: "Hypertext Transfer Protocol Secure — a secure version of HTTP using encryption.",
    eli5: "It’s like whispering secrets in a safe tunnel instead of shouting them out loud."
  },
  {
    term: "Exploit",
    definition: "A piece of code or technique that takes advantage of a software bug or vulnerability.",
    eli5: "It's like finding a secret weakness in a video game and using it to win unfairly."
  },
  {
    term: "Data Leakage",
    definition: "When sensitive data is accidentally or unlawfully exposed.",
    eli5: "It’s like accidentally dropping your diary on the road where anyone can read it."
  },
  {
    term: "IP Address",
    definition: "A unique string of numbers that identifies a device on the internet.",
    eli5: "It’s like your computer’s home address online."
  },
  {
    term: "Bug Bounty",
    definition: "A reward offered to individuals for reporting software bugs or security flaws.",
    eli5: "Get paid for finding mistakes in software."
  },
  {
    term: "Man-in-the-Middle Attack",
    definition: "When an attacker secretly relays or alters communication between two parties.",
    eli5: "It’s like someone secretly listening and changing your mail before it reaches your friend."
  },
  {
    term: "Doxing",
    definition: "Publicly revealing private or personal information about an individual online.",
    eli5: "It’s like putting someone’s secrets on a billboard for everyone to see."
  },
  {
    term: "Secure Socket Layer (SSL)",
    definition: "A protocol for encrypting internet traffic and verifying website identities.",
    eli5: "It’s like sending secret letters in a locked envelope."
  },
  {
    term: "Ransomware",
    definition: "A type of malware that locks your files and demands payment to unlock them.",
    eli5: "It’s like a thief locking your toys in a box and asking for candy to give them back."
  },
  {
    term: "Payload",
    definition: "The part of malware that performs the harmful action.",
    eli5: "It’s the dangerous part of a bad program — like the prank in a whoopee cushion."
  },
  {
    term: "Key Exchange",
    definition: "The process of sharing encryption keys securely between parties.",
    eli5: "It’s like sending your friend a secret codebook so you both can write hidden messages."
  },
  {
    term: "Threat Actor",
    definition: "An individual or group responsible for a cyberattack.",
    eli5: "The bad guy or team behind the computer break-in."
  },
  {
    term: "Spyware",
    definition: "Software that secretly gathers information about you.",
    eli5: "Like a sneaky spy watching what you do on your computer."
  },
  {
    term: "Patch Management",
    definition: "The process of regularly applying updates to software.",
    eli5: "Fixing holes in your clothes before they get worse."
  },
  {
    term: "Cyber Espionage",
    definition: "Spying through digital means, often by governments or companies.",
    eli5: "Secretly sneaking into someone’s computer to gather secrets."
  },
  {
    term: "Breach",
    definition: "A security incident where data is accessed without permission.",
    eli5: "Someone sneaking into a locked room and taking stuff without permission."
  },
  {
    term: "Red Team",
    definition: "A group that simulates real-world attacks to test an organization’s defenses.",
    eli5: "Pretend bad guys hired to break your system and see what’s weak."
  },
  {
    term: "Blue Team",
    definition: "The team responsible for defending against attacks and responding to threats.",
    eli5: "The good guys who stop the pretend or real bad guys."
  },
  {
    term: "Social Engineering",
    definition: "Tricking people into revealing confidential information.",
    eli5: "Like someone pretending to be your mom to get your school password."
  },
  {
    term: "Tokenization",
    definition: "Replacing sensitive data with unique symbols (tokens).",
    eli5: "Like replacing your name with a nickname only your friends understand."
  },
  {
    term: "Security Awareness Training",
    definition: "Education to help users recognize and prevent cyber threats.",
    eli5: "Teaching people how to spot and avoid internet tricks."
  },
  {
    term: "Trojan Horse",
    definition: "Malware disguised as a normal file or program.",
    eli5: "A bad guy hiding inside a gift you download."
  },
  {
    term: "Fileless Malware",
    definition: "Malware that operates in memory without installing files.",
    eli5: "A ghost virus — it doesn’t leave behind files you can find easily."
  },
  {
    term: "Security Token",
    definition: "A physical or digital item used to prove identity.",
    eli5: "Like a special keychain that proves you’re you."
  },
{
  term: "Air Gap",
  definition: "A security measure that involves isolating a computer or network from other networks, especially the internet.",
  eli5: "Imagine unplugging your computer from the internet so hackers can’t reach it."
},
{
  term: "Application Security",
  definition: "Measures taken to improve the security of an application by preventing security flaws.",
  eli5: "It's like locking the doors and windows of an app to keep bad guys out."
},
{
  term: "Attack Vector",
  definition: "A path or means by which a hacker gains access to a computer or network.",
  eli5: "It's the door or window that a thief uses to sneak into a house."
},

{
  term: "Biometrics",
  definition: "Security authentication using physical traits like fingerprints or facial recognition.",
  eli5: "It’s like unlocking your phone with your face or finger."
},
{
  term: "Brute Force Attack",
  definition: "A hacking method that tries many password combinations until it finds the right one.",
  eli5: "Like trying every key on a keychain until one opens the lock."
},
{
  term: "Buffer Overflow",
  definition: "A software flaw where too much data is written to a buffer, potentially allowing attackers to execute malicious code.",
  eli5: "Imagine pouring too much water into a cup and it spills everywhere—even places it shouldn’t."
},
{
  term: "Certificate Authority (CA)",
  definition: "An entity that issues digital certificates to verify identities on the internet.",
  eli5: "It’s like a trusted organization giving websites a digital passport."
},
{
  term: "Cryptanalysis",
  definition: "The process of decoding or breaking cryptographic codes and ciphers.",
  eli5: "It’s like being a code-breaker trying to solve secret messages."
},
{
  term: "Cyber Hygiene",
  definition: "Practices and steps that users take to maintain system health and improve online security.",
  eli5: "It’s like brushing your teeth, but for your computer to keep it clean and safe."
},
{
  term: "Deepfake",
  definition: "AI-generated audio or video that makes people appear to say or do things they didn’t.",
  eli5: "It’s like a puppet show that looks so real, you can’t tell it’s fake."
},
{
  term: "Digital Forensics",
  definition: "The process of collecting, analyzing, and preserving electronic data for investigations.",
  eli5: "It’s like being a detective, but for computer files and data."
},
{
  term: "DNS Spoofing",
  definition: "Tricking a DNS server into sending users to a fake website.",
  eli5: "It's like changing a road sign so people go to the wrong place."
},
{
  term: "Drive-by Download",
  definition: "Malware that automatically downloads to a user’s computer without their consent.",
  eli5: "It’s like catching a cold just by walking past someone."
},
{
  term: "Encryption Key",
  definition: "A code that is used to encrypt and decrypt information.",
  eli5: "It’s like the key that locks or unlocks a treasure chest."
},
{
  term: "Hash Function",
  definition: "A function that converts data into a fixed-length string, often used in storing passwords.",
  eli5: "It’s like turning any word into a secret code that’s always the same size."
},
{
  term: "Honeypot",
  definition: "A system set up to attract attackers and study their behavior.",
  eli5: "It’s like leaving fake treasure out to catch a thief."
},
{
  term: "Keylogger",
  definition: "A program that records everything typed on a keyboard.",
  eli5: "It’s like someone secretly watching and writing down every key you press."
},
{
  term: "Logic Bomb",
  definition: "Malicious code triggered by a specific event or condition.",
  eli5: "It’s like a trap that only goes off when someone steps in a certain place."
},
{
  term: "Multi-Factor Authentication (MFA)",
  definition: "A security method requiring more than one form of verification to access an account.",
  eli5: "It’s like needing both a password and a fingerprint to open a door."
},
{
  term: "Packet Sniffing",
  definition: "Monitoring and capturing data packets that pass through a network.",
  eli5: "It’s like someone listening to your phone calls without you knowing."
},
{
  term: "Penetration Testing",
  definition: "Simulated cyberattacks used to test the security of a system.",
  eli5: "It’s like hiring someone to try to break into your house to see how secure it is."
},
{
  term: "Pharming",
  definition: "Redirecting users from legitimate websites to fraudulent ones without their knowledge.",
  eli5: "It’s like being sent to a fake store even though you typed in the real address."
},
{
  term: "Plaintext",
  definition: "Unencrypted information that anyone can read.",
  eli5: "It’s like an open book that anyone can read."
},
{
  term: "Replay Attack",
  definition: "An attacker intercepts and reuses a valid data transmission.",
  eli5: "It’s like recording someone’s key swipe and replaying it to unlock a door."
},
{
  term: "Rootkit",
  definition: "Malicious software that hides its presence and allows unauthorized access.",
  eli5: "It’s like a thief who sneaks into your house and hides under the floorboards."
},
{
  term: "Script Kiddie",
  definition: "An inexperienced hacker who uses ready-made tools without fully understanding them.",
  eli5: "It’s like a kid using tools without knowing how they work."
},
{
  term: "Shoulder Surfing",
  definition: "Spying on someone to get their sensitive information by looking over their shoulder.",
  eli5: "It’s like peeking at someone’s ATM pin while they type it."
},
{
  term: "Spoofing",
  definition: "Pretending to be someone or something else to gain trust or access.",
  eli5: "It’s like wearing a mask to pretend you’re someone else."
},
{
  term: "URL Spoofing",
  definition: "Creating a fake website URL that mimics a real one to trick users.",
  eli5: "It’s like changing one letter in a web address so you don’t notice it’s fake."
},
{
  term: "Virtual Private Network (VPN)",
  definition: "A tool that encrypts your internet connection to protect your privacy.",
  eli5: "It’s like using a secret tunnel to browse the internet safely."
},
{
  term: "Whaling Attack",
  definition: "A phishing attack that targets high-profile individuals like executives.",
  eli5: "It’s like going after the big fish instead of the small ones."
},
{
  term: "Hacker",
  definition: "A hacker is a person who uses technical skills to gain unauthorized access to systems, networks, or data. Hackers can be malicious (black hat), ethical (white hat), or fall somewhere in between (gray hat).",
  eli5: "A hacker is like someone who figures out how to sneak into places they’re not supposed to — like picking a lock on a door. Some hackers are bad, but some are good and help keep things safe."
},
{
  term: "Virus",
  definition: "A virus is a type of malicious software (malware) that attaches itself to programs or files and spreads from one computer to another, often damaging data or disrupting operations.",
  eli5: "A virus is like a bad bug for computers. Once it gets inside, it can spread and make your computer sick or act weird, just like a real-life virus makes people sick."
},
{
  term: "Cyberbullying",
  definition: "Cyberbullying is the act of harassing, threatening, or embarrassing someone through digital platforms such as social media, messaging apps, or online forums.",
  eli5: "Cyberbullying is like being mean to someone on the internet — sending hurtful messages or making fun of them online, which can really hurt their feelings."
},   
];
