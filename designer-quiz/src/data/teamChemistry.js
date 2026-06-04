export const TEAM_CHEMISTRY = {
  SA: {
    VP: { energy: "Creative tension", label: "Productive friction", description: "The Architect wants consistency. The Poet wants expression. When it works, you produce systems that are also beautiful. When it doesn't, you fight about whether the button should have a box-shadow." },
    UW: { energy: "Natural allies", label: "Strong collaboration", description: "You build it. They validate it. The Whisperer's research tells the Architect which patterns to standardise. Listen to them — their data is your prioritisation tool." },
    CA: { energy: "High friction", label: "Speed vs structure", description: "The Chaos Agent breaks your system repeatedly. You fix it repeatedly. Establish a 'new pattern protocol' together early — a lightweight way for them to propose new components without bypassing governance." },
    SP: { energy: "Strategic alignment", label: "Strong collaboration", description: "The Partner cares about outcomes. You care about the infrastructure that delivers them. Together you make a compelling case for design investment. Align on what the system enables for the business." },
    BB: { energy: "Operational harmony", label: "Natural allies", description: "The Builder makes sure your system actually reaches developers. They are your adoption strategy made human. Invest in this relationship — it determines whether your system lives or dies." },
  },
  VP: {
    SA: { energy: "Creative tension", label: "Productive friction", description: "They want tokens. You want texture. The best outcomes happen when you use the system as a foundation and push the expression within it, not against it." },
    UW: { energy: "Necessary check", label: "Healthy tension", description: "They will challenge every beautiful decision with 'but did users validate this?' Let them. Your best work survives usability testing. Work that doesn't survive wasn't finished." },
    CA: { energy: "High creative energy", label: "Explosive collaboration", description: "Two people who move fast and make bold decisions. Incredible for early-stage work, dangerous in a mature product. Agree on a review gate before anything gets in front of users." },
    SP: { energy: "Translation needed", label: "Strategic tension", description: "They speak in metrics. You speak in emotions. Neither is wrong. Build a shared vocabulary: 'emotional engagement drives retention' is a sentence both of you can work with." },
    BB: { energy: "Amplification", label: "Strong collaboration", description: "The Builder ensures your visual decisions are understood and implemented correctly. Brief them well — the quality of their communication determines whether your vision survives the handoff." },
  },
  UW: {
    SA: { energy: "Natural allies", label: "Strong collaboration", description: "Your research identifies which patterns confuse users. Their system is how those patterns get fixed permanently. Share findings generously — a good Architect will build your insights into the system." },
    VP: { energy: "Necessary check", label: "Healthy tension", description: "Push them. Your job is to make sure the beautiful thing also works. Frame usability findings as a gift: 'Here is what is stopping this from being as good as it looks.'" },
    CA: { energy: "Opposing forces", label: "High tension", description: "You validate. They skip validation. You slow down. They speed up. Find the minimum viable validation that satisfies you both: one five-person test before anything ships." },
    SP: { energy: "Strategic alliance", label: "Strong collaboration", description: "Your research gives the Partner ammunition for roadmap conversations. Make your findings business-legible. 'Users are confused by X and that is costing us Y' is a sentence they can take to leadership." },
    BB: { energy: "Operational harmony", label: "Natural allies", description: "The Builder makes sure your research reaches the whole team, not just the designer. Build a shared repository they can access. Your insights should outlast the project." },
  },
  CA: {
    SA: { energy: "High friction", label: "Speed vs structure", description: "You create. They govern. Agree on a 'minimum viable system compliance' standard so you are not blocked and they are not rebuilding after every sprint." },
    VP: { energy: "High creative energy", label: "Explosive collaboration", description: "Best creative partnership in design. Most likely to ship something visually extraordinary. Also most likely to ship something confusing. Assign someone to be the critical voice before launch." },
    UW: { energy: "Opposing forces", label: "High tension", description: "They want to test before you want to finish. Move fast AND run one quick test — even a five-question Maze study takes two hours and will save you from the most expensive mistakes." },
    SP: { energy: "Useful friction", label: "Productive tension", description: "They ask 'why are we building this?' You ask 'how quickly can we build it?' Both questions are necessary. Let them slow you down at the brief stage so you can run during execution." },
    BB: { energy: "Essential pairing", label: "Critical relationship", description: "The Builder translates your work to the rest of the team. Without them, your velocity creates confusion. Invest in this relationship — brief them before you finish, not after." },
  },
  SP: {
    SA: { energy: "Strategic alignment", label: "Strong collaboration", description: "You set the direction. They build the infrastructure for it. Bring the Architect into strategy conversations early — a design system built around your strategic direction is far more valuable than a generic one." },
    VP: { energy: "Translation needed", label: "Strategic tension", description: "Respect their craft. 'Make it more aesthetic' is not a brief. Give them emotional and experiential targets and let them find the expression. Your metrics are the destination; their craft is the vehicle." },
    UW: { energy: "Strategic alliance", label: "Strong collaboration", description: "Elevate their research. When a Whisperer brings you a finding, your job is to turn it into a strategic recommendation. You are the translator between user insight and business decision." },
    CA: { energy: "Useful friction", label: "Productive tension", description: "They execute. You direct. Give them a clear brief and then get out of their way. Micromanaging a Chaos Agent kills the thing you hired them for." },
    BB: { energy: "Operational partnership", label: "Strong collaboration", description: "The Builder makes your strategy legible to the entire organisation. Invest in how they communicate your decisions. The quality of internal design communication directly affects how much the company values design." },
  },
  BB: {
    SA: { energy: "Operational harmony", label: "Natural allies", description: "You make their system real for developers. Share what is and isn't getting implemented — this feedback is how they improve the system. You are their ground truth." },
    VP: { energy: "Amplification", label: "Strong collaboration", description: "Your clarity protects their vision in the handoff. Study their work deeply before briefing developers. The best thing you can do for a Visual Poet is ensure their intent survives implementation intact." },
    UW: { energy: "Operational harmony", label: "Natural allies", description: "You build the process. They fill it with insight. Create shared templates for how research findings get documented and shared. Make it easy for their work to reach everyone." },
    CA: { energy: "Essential pairing", label: "Critical relationship", description: "You are the person who makes their speed sustainable for the team. Your process is the container their chaos operates within. This relationship requires high trust — build it early." },
    SP: { energy: "Operational partnership", label: "Strong collaboration", description: "You execute their strategy at the team level. When you understand the strategic intent behind a decision, your facilitation becomes sharper. Ask them why, not just what." },
  },
};
